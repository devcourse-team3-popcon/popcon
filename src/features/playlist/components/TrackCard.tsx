import { usePlaylistStore } from "../../../stores/playlistStore";
import { Plus } from "lucide-react";
import TrackCardSkeleton from "./TrackCardSkeleton";

export default function TrackCard({ track, onClick }: TrackCardProps) {
  const { setTracks } = usePlaylistStore();
  const tracks = usePlaylistStore((state) => state.tracks);

  if (!track) {
    return <TrackCardSkeleton />;
  }

  const handleAddToPlaylist = () => {
    const trackInfo = {
      name: track.name,
      artist: track.artists[0].name,
      imgUrl: track.album.images[0]?.url || "",
    };
    const isAlreadyAdded = tracks.some(
      (t) => t.name === trackInfo.name && t.artist === trackInfo.artist
    );

    if (!isAlreadyAdded) {
      setTracks([...tracks, trackInfo]);
      alert("플레이리스트에 추가됨");
    } else {
      alert("이미 추가된 곡임");
    }
  };

  return (
    <div
      className="w-[160px] h-[220px] overflow-hidden flex flex-col cursor-pointer justify-center items-center gap-[25px]"
      onClick={onClick || handleAddToPlaylist}
    >
      <div className="flex w-[108px] h-[108px] justify-center items-center">
        <img
          src={track.album.images[0]?.url || "/placeholder-album.jpg"}
          alt={`${track.name} 앨범 커버`}
          className="w-full h-full object-cover rounded-[100%]"
        />
      </div>

      <div className="flex flex-col gap-[8px] justify-center items-center">
        <p
          className="text-[14px] font-bold text-[color:var(--white)] truncate"
          title={track.name}
        >
          {track.name}
        </p>
        <p
          className="text-[14px] text-[color:var(--white)] truncate"
          title={track.artists[0].name}
        >
          {track.artists[0].name}
        </p>
        <div className="flex justify-center gap-[8px] items-center hover:text-[color:var(--primary-100)] mt-[8px]">
          <Plus className="w-4 h-4 text-[color:var(--grey-400)]" />
          <p className="text-[14px] text-[color:var(--grey-400)]">
            Add Playlist
          </p>
        </div>
      </div>
    </div>
  );
}
