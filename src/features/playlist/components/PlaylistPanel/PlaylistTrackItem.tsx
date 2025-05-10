import { Trash2 } from "lucide-react";
import { usePlaylistStore } from "../../../../stores/playlistStore";
import { deleteTrackFromPlaylist } from "../../../../apis/playlist/playlistService";

export default function PlaylistTrackItem({
  track,
  onClick,
  item,
  showEllipsis,
  trackId,
}: PlaylistTrackItemProps) {
  const { setTracks } = usePlaylistStore();
  const tracks = usePlaylistStore((state) => state.tracks);

  const deleteTrack = async (e: React.MouseEvent, trackId: string) => {
    e.stopPropagation(); 
    await deleteTrackFromPlaylist(trackId);
    const updatedTracks = tracks.filter((track) => track._id !== trackId);
    setTracks(updatedTracks);
  };

  return (
    <div
      className="flex h-auto p-[18px] justify-between items-center hover:bg-[color:var(--grey-500)] rounded-[10px] group cursor-pointer"
      onClick={() => onClick && track && onClick(track)}
    >
      <div className="flex gap-[24px] items-center flex-1 overflow-hidden">
        <img
          src={track ? track.album.images[0].url : item?.title.imgUrl}
          alt={track ? `${track.name} 앨범 사진` : "앨범 사진"}
          className="w-15 h-15 rounded-[10px] flex-shrink-0"
        />
        <div className="overflow-hidden">
          <p className="text-[18px] text-[color:var(--white)] font-bold truncate">
            {track ? track.name : item?.title.name}
          </p>
          <p className="mt-2 text-[16px] text-[color:var(--grey-400)] truncate">
            {track ? track.artists[0].name : item?.title.artist}
          </p>
        </div>
      </div>
      {showEllipsis && (
        <div className="ml-2 flex-shrink-0">
          <Trash2
            className="cursor-pointer invisible group-hover:visible transition-all"
            onClick={(e) => deleteTrack(e, trackId)}
          />
        </div>
      )}
    </div>
  );
}