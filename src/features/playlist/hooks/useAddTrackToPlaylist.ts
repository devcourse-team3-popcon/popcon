import { useCallback } from "react";
import { usePlaylistStore } from "../../../stores/playlistStore";
import { addTrackToPlayList } from "../../../apis/playlist/playlistService";

export function useAddTrackToPlaylist(onSuccess?: () => void) {
  const { setTracks } = usePlaylistStore();
  const tracks = usePlaylistStore((state) => state.tracks);

  const handleTrackClick = useCallback(
    async (trackData: SpotifyTrack | TrackDataForPlaylist) => {
      try {
        let trackInfo: TrackDataForPlaylist;
        
        if ('album' in trackData) {
          trackInfo = {
            name: trackData.name,
            artist: trackData.artists[0]?.name || "Unknown",
            imgUrl: trackData.album.images[0]?.url || "",
          };
        } else {
          trackInfo = trackData;
        }

        const savedTrack = await addTrackToPlayList({
          title: trackInfo,
        });

        const newSavedTrack = {
          ...savedTrack,
          title: JSON.parse(savedTrack.title),
        };

        const isAlreadyAdded = tracks.some(
          (t) =>
            t.title.name === trackInfo.name &&
            t.title.artist === trackInfo.artist
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