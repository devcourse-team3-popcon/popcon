import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export interface TrackRecommendation {
  name: string;
  artist: string;
}

let isRequestInProgress = false;
const responseCache = new Map<string, TrackRecommendation[]>();

export const recommendTracksByGpt = async (
  prompt: string
): Promise<TrackRecommendation[]> => {
  if (responseCache.has(prompt)) {
    return responseCache.get(prompt)!;
  }

  if (isRequestInProgress) {
    throw new Error("이미 진행 중인 API 요청이 있음.");
  }

  try {
    isRequestInProgress = true;

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      messages: [{ role: "user", content: prompt }],
    });

    const text = response.choices[0].message.content || "";

    try {
      const parsed = JSON.parse(text);

      if (
        Array.isArray(parsed) &&
        parsed.every((item) => item.name && item.artist)
      ) {
        responseCache.set(prompt, parsed);
        return parsed as TrackRecommendation[];
      }

      throw new Error("invalud format");
    } catch (error) {
      console.error("gpt 응답 실패:", error);
      throw new Error("데이터 파싱 실패.");
    }
  } catch (error) {
    console.error("api 요청 실패:", error);
    throw error;
  } finally {
    isRequestInProgress = false;
  }
};
