import { useEffect, useState } from "react";
import { usePlaylistStore } from "../../../stores/playlistStore";
import TrackCard from "./TrackCard";
import { getSpotifyAccessToken } from "../../../apis/spotify/getSpotifyAccessToken";
import { searchMultipleTracks } from "../../../apis/spotify/spotifySearch";
import { recommendTracksByGpt } from "../../../apis/openai/getMusicRecommendationByGPT";
import TrackCardSkeleton from "./TrackCardSkeleton";
import { getUserInfo } from "../../../apis/playlist/getUserInfo";
import { getPromptFromTracks } from "../hooks/getPromptFromTracks";
import { getPromptFromGenre } from "../hooks/getPromptFromGenre";

export default function MusicRecommender() {
  const tracks = usePlaylistStore((state) => state.tracks);
  const [recommendations, setRecommendations] = useState<SpotifyTrack[]>([]);
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      const data = await getUserInfo();
      setUser(data);
    };
    getUserData();
  }, []);

  useEffect(() => {
    if (!user) return;
    const fetchRecommendations = async () => {
      try {
        if (tracks.length !== 0) {
          const prompt = getPromptFromTracks(tracks);
          const recommendedTracks = await recommendTracksByGpt(prompt);

          const token = await getSpotifyAccessToken();
          const spotifyTracks = await searchMultipleTracks(
            recommendedTracks,
            token
          );
          setRecommendations(spotifyTracks);
        } else {
          const parsedData = JSON.parse(user.fullName);
          const prompt = getPromptFromGenre(parsedData.favoriteGenre);
          const recommendedTracks = await recommendTracksByGpt(prompt);
          const token = await getSpotifyAccessToken();
          const spotifyTracks = await searchMultipleTracks(
            recommendedTracks,
            token
          );
          setRecommendations(spotifyTracks);
        }
      } catch (error) {
        console.error("추천 음악 가져오기 실패:", error);
      }
    };
    fetchRecommendations();
  }, [tracks]);

  return (
    <div className="flex flex-col px-12 py-10 bg-[color:var(--grey-600)] rounded-[30px] gap-[32px] w-full h-[360px]">
      <div className="flex px-8 gap-[16px] text-[24px] font-bold justify-between items-center">
        <div className="flex gap-4">
          <p>POPcon 이 추천하는 음악</p>
          <p>🎧</p>
        </div>
      </div>
      <div className="flex gap-[25px] justify-center items-center h-">
        {recommendations.length > 0 ? (
          recommendations.map((track, index) => (
            <TrackCard key={track.id || index} track={track} />
          ))
        ) : (
          <>
            <TrackCardSkeleton />
            <TrackCardSkeleton />
            <TrackCardSkeleton />
            <TrackCardSkeleton />
          </>
        )}
      </div>
    </div>
  );
}
