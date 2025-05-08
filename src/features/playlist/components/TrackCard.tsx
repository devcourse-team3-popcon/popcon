import { usePlaylistStore } from "../../../stores/playlistStore";
import { Plus } from "lucide-react";
import TrackCardSkeleton from "./TrackCardSkeleton";
import { addTrackToPlayList } from "../../../apis/playlist/addTrackToPlaylist";

export default function TrackCard({ track }: { track: SpotifyTrack }) {
  const { setTracks } = usePlaylistStore();
  const tracks = usePlaylistStore((state) => state.tracks);

  if (!track) {
    return <TrackCardSkeleton />;
  }

  const handleAddToPlaylist = () => {
    const trackInfo = {
      title: {
        name: track.name,
        artist: track.artists[0].name,
        imgUrl: track.album.images[0]?.url || "",
      },
      _id: track.id,
    };
    const isAlreadyAdded = tracks.some(
      (t) =>
        t.title.name === trackInfo.title.name &&
        t.title.artist === trackInfo.title.artist
    );

    if (!isAlreadyAdded) {
      addTrackToPlayList(trackInfo);
      setTracks([trackInfo, ...tracks]);
    } else {
      alert("이미 추가된 곡입니다");
    }
  };

  return (
    <div className="w-[160px] h-full overflow-hidden flex flex-col cursor-pointer justify-center items-center gap-[25px] box-border">
      <div className="flex w-[108px] h-[108px] justify-center items-center">
        <img
          src={track.album.images[0]?.url || ""}
          alt={`${track.name} 앨범 커버`}
          className="w-full h-full object-contain rounded-full"
        />
      </div>

      <div className="flex flex-col gap-2 justify-center items-center w-full">
        <div className="flex flex-col gap-1.5">
          <p
            className="text-[14px] font-bold text-[color:var(--white)] truncate w-full text-center"
            title={track.name}
          >
            {track.name}
          </p>
          <div
            className="text-[12px] text-[color:var(--white-80)] truncate w-full text-center h-[17px]"
            title={track.artists[0].name}
          >
            {track.artists[0].name}
          </div>
        </div>

        <div
          className="flex justify-center gap-[8px] items-center mt-[8px] group"
          onClick={handleAddToPlaylist}
        >
          <Plus className="w-4 h-4 text-[color:var(--grey-400)] group-hover:text-[color:var(--primary-100)]" />
          <p className="text-[14px] text-[color:var(--grey-400)] group-hover:text-[color:var(--primary-100)]">
            Add Playlist
          </p>
        </div>
      </div>
    </div>
  );
}
