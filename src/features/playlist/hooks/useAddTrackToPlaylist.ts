import { useCallback } from "react";
import { usePlaylistStore } from "../../../stores/playlistStore";
import { addTrackToPlayList } from "../../../apis/playlist/playlistService";

export function useAddTrackToPlaylist(onSuccess?: () => void) {
  const { setTracks } = usePlaylistStore();
  const tracks = usePlaylistStore((state) => state.tracks);

  const handleTrackClick = useCallback(
    async (track: SpotifyTrack) => {
      try {
        const savedTrack = await addTrackToPlayList({
          title: {
            name: track.name,
            artist: track.artists[0]?.name || "Unknown",
            imgUrl: track.album.images[0]?.url || "",
          },
        });

        const newSavedTrack = {
          ...savedTrack,
          title: JSON.parse(savedTrack.title),
        };

        const isAlreadyAdded = tracks.some(
          (t) =>
            t.title.name === savedTrack.title.name &&
            t.title.artist === savedTrack.title.artist
        );

        if (!isAlreadyAdded) {
          setTracks([newSavedTrack, ...tracks]);
        } else {
          alert("이미 추가된 곡입니다");
        }

        onSuccess?.();
      } catch (err) {
        console.error("노래 추가 실패", err);
      }
    },
    [onSuccess, setTracks, tracks]
  );

  return handleTrackClick;
}
