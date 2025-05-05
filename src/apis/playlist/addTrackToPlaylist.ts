import { axiosInstance } from "../axiosInstance";

export const addTrackToPlayList = async ({
  title,
}: {
  title: { name: string; imgUrl: string; artist: string };
}) => {
  try {
    const res = await axiosInstance.post("/posts/create", {
      title: JSON.stringify(title),
      img: null,
      channelId: "6815e9d7f940b6515bf4e101",
    });
    return res.data;
  } catch (error) {
    console.log("플레이리스트에 추가 실패", error);
    throw error;
  }
};
