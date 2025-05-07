import { SpotifyTrack } from "../../../types/spotify";
import { usePlaylistStore } from "../../../stores/playlistStore";
import { Plus } from "lucide-react";

interface TrackCardProps {
  track?: SpotifyTrack;
  onClick?: () => void;
}

export default function TrackCard({ track, onClick }: TrackCardProps) {
  const { setTracks } = usePlaylistStore();

  if (!track) {
    return (
      <div className="w-[160px] h-[240px] bg-[color:var(--grey-500)] rounded-[20px] flex items-center justify-center">
        <p className="text-[color:var(--white-60)]">추천 준비중</p>
      </div>
    );
  }

  const formatDuration = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleAddToPlaylist = () => {
    const currentTracks = usePlaylistStore.getState().tracks;

    const trackInfo = {
      name: track.name,
      artist: track.artists[0].name,
      imgUrl: track.album.images[0]?.url || "",
    };
    const isAlreadyAdded = currentTracks.some(
      (t) => t.name === trackInfo.name && t.artist === trackInfo.artist
    );

    if (!isAlreadyAdded) {
      setTracks([...currentTracks, trackInfo]);
      alert("플레이리스트에 추가되었습니다!");
    } else {
      alert("이미 플레이리스트에 추가된 곡입니다.");
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
