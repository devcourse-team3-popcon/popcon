import { useCallback } from "react";
import { addTrackToPlayList } from "../../../apis/playlist/addTrackToPlaylist";

export function useAddTrackToPlaylist(onSuccess?: () => void) {
  const handleTrackClick = useCallback(
    async (track: SpotifyTrack) => {
      try {
        await addTrackToPlayList({
          title: {
            name: track.name,
            imgUrl: track.album.images[0]?.url || "",
            artist: track.artists[0]?.name || "Unknown",
          },
        });
        console.log("노래 추가 성공");
        onSuccess?.();
      } catch (err) {
        console.error("노래 추가 실패", err);
      }
    },
    [onSuccess]
  );

  return handleTrackClick;
}
