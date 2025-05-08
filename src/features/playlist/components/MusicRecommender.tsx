import { useEffect, useState, useRef } from "react";
import { usePlaylistStore } from "../../../stores/playlistStore";
import TrackCard from "./TrackCard";
import { generatePromptFromTracks } from "../hooks/getPromptFromTracks";
import { getSpotifyAccessToken } from "../../../apis/spotify/getSpotifyAccessToken";
import { searchMultipleTracks } from "../../../apis/spotify/spotifySearch";
import { recommendTracksByGpt } from "../../../apis/openai/getMusicRecommendationByGPT";

export default function MusicRecommender() {
  const tracks = usePlaylistStore((state) => state.tracks);
  const [recommendations, setRecommendations] = useState<SpotifyTrack[]>([]);

  useEffect(() => {
    if (tracks.length === 0) return;
    const fetchRecommendations = async () => {
      try {
        const prompt = generatePromptFromTracks(tracks);
        const recommendedTracks = await recommendTracksByGpt(prompt);

        const token = await getSpotifyAccessToken();
        const spotifyTracks = await searchMultipleTracks(
          recommendedTracks,
          token
        );

        setRecommendations(spotifyTracks);
      } catch (err) {
        console.error("추천 음악 가져오기 실패:", err);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div className="flex flex-col px-12 py-10 bg-[color:var(--grey-600)] rounded-[30px] gap-[32px] w-[800px]">
      <div className="flex px-8 gap-[16px] text-[24px] font-bold justify-between items-center">
        <div className="flex gap-4">
          <p>POPcon 이 추천하는 음악</p>
          <p>🎧</p>
        </div>
      </div>
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
    </div>
  );
}
