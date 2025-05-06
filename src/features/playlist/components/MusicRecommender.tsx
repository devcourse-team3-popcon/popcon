import { useEffect, useState, useRef } from "react";
import { usePlaylistStore } from "../../../stores/playlistStore";
import TrackCard from "./TrackCard";
import { generatePromptFromTracks } from "../hooks/getPromptFromTracks";
import { recommendTracksByGpt } from "../../../apis/openai/getMusicRecommendationByGPT";
import { getSpotifyAccessToken } from "../../../apis/spotify/getSpotifyAccessToken";
import { searchMultipleTracks } from "../../../apis/spotify/spotifySearch";

export default function MusicRecommender() {
  const tracks = usePlaylistStore((state) => state.tracks);
  const [recommendations, setRecommendations] = useState<SpotifyTrack[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const hasRequestedRef = useRef<boolean>(false);
  const requestCount = useRef<number>(0);

  useEffect(() => {
    if (hasRequestedRef.current || tracks.length === 0) return;

    const fetchRecommendations = async () => {
      if (hasRequestedRef.current) return;

      try {
        setIsLoading(true);
        setError(null);

        hasRequestedRef.current = true;

        const currentRequestId = ++requestCount.current;

        const prompt = generatePromptFromTracks(tracks);

        const recommendedTracks = await recommendTracksByGpt(prompt);

        if (currentRequestId !== requestCount.current) {
          return;
        }

        const token = await getSpotifyAccessToken();
        const spotifyTracks = await searchMultipleTracks(
          recommendedTracks,
          token
        );

        if (currentRequestId !== requestCount.current) {
          return;
        }

        setRecommendations(spotifyTracks);
      } catch (err) {
        console.error("추천 음악 가져오기 실패:", err);
        setError("추천 음악을 가져오기 에러");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();

    return () => {
      console.log("MusicRecommender 컴포넌트 언마운트");
    };
  }, [tracks]);

  const refreshRecommendations = () => {
    hasRequestedRef.current = false;
    setRecommendations([]);
    const newRequestCount = requestCount.current + 1;
    requestCount.current = newRequestCount;

    setIsLoading(true);

    const fetchRecommendations = async () => {
      try {
        if (hasRequestedRef.current) return;

        hasRequestedRef.current = true;

        const prompt = generatePromptFromTracks(tracks);
        const recommendedTracks = await recommendTracksByGpt(prompt);

        if (newRequestCount !== requestCount.current) {
          return;
        }

        const token = await getSpotifyAccessToken();
        const spotifyTracks = await searchMultipleTracks(
          recommendedTracks,
          token
        );

        if (newRequestCount !== requestCount.current) {
          return;
        }

        setRecommendations(spotifyTracks);
      } catch (err) {
        console.error("추천 실패", err);
        setError("추천 음악을 가져오기 에러");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecommendations();
  };

  return (
    <div className="flex flex-col px-12 py-10 bg-[color:var(--grey-600)] rounded-[30px] gap-[32px] w-[800px]">
      <div className="flex px-8 gap-[16px] text-[24px] font-bold justify-between items-center">
        <div className="flex gap-4">
          <p>POPcon 이 추천하는 음악</p>
          <p>🎧</p>
        </div>

        <button
          onClick={refreshRecommendations}
          disabled={isLoading}
          className="text-[16px] px-4 py-2 bg-[color:var(--primary-300)] rounded-lg text-[color:var(--bg-color)] disabled:opacity-50"
        >
          {isLoading ? "로딩 중..." : "새로 추천받기"}
        </button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-[200px]">
          <p className="text-[color:var(--white-80)]">
            추천 음악을 가져오는 중...
          </p>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center h-[200px]">
          <p className="text-[color:var(--white-80)]">{error}</p>
        </div>
      ) : (
        <div className="flex overflow-x-auto gap-[25px] justify-center">
          {recommendations.length > 0 ? (
            recommendations.map((track, index) => (
              <TrackCard key={track.id || index} track={track} />
            ))
          ) : (
            <>
              <TrackCard />
              <TrackCard />
              <TrackCard />
              <TrackCard />
            </>
          )}
        </div>
      )}
    </div>
  );
}
