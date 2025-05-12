import { ListMusic, Trash2 } from "lucide-react";
import { usePlaylistStore } from "../../../../stores/playlistStore";
import { deleteTrackFromPlaylist } from "../../../../apis/playlist/playlistService";
import { useAddTrackToPlaylist } from "../../hooks/useAddTrackToPlaylist";

export default function PlaylistTrackItem({
  track,
  onClick,
  item,
  showEllipsis,
  trackId,
  other,
}: PlaylistTrackItemProps) {
  const { setTracks } = usePlaylistStore();
  const tracks = usePlaylistStore((state) => state.tracks);
  const handleTrackClick = useAddTrackToPlaylist();

  const deleteTrack = async (
    e: React.MouseEvent<SVGSVGElement>,
    trackId: string
  ) => {
    e.stopPropagation();
    await deleteTrackFromPlaylist(trackId);
    const updatedTracks = tracks.filter((track) => track._id !== trackId);
    setTracks(updatedTracks);
  };

  const imageUrl = track?.album.images[0]?.url ?? item?.title.imgUrl ?? "";
  const imageAlt = track ? `${track.name} 앨범 사진` : "앨범 사진";

  const trackName = track?.name ?? item?.title.name ?? "";
  const artistName = track?.artists[0]?.name ?? item?.title.artist ?? "";

  const handleListMusicClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (track) {
      handleTrackClick(track);
    } else if (item) {
      handleTrackClick({
        name: item.title.name,
        artist: item.title.artist,
        imgUrl: item.title.imgUrl,
      });
    }
  };

  return (
    <div
      className="flex h-auto p-[18px] justify-between items-center hover:bg-[color:var(--grey-500)] rounded-[10px] group cursor-pointer"
      onClick={() => onClick && track && onClick(track)}
    >
      <div className="flex gap-[24px] items-center flex-1 overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-15 h-15 rounded-[10px] flex-shrink-0"
        />
        <div className="overflow-hidden">
          <p className="text-[18px] text-[color:var(--white)] font-bold truncate">
            {trackName}
          </p>
          <p className="mt-2 text-[16px] text-[color:var(--grey-400)] truncate">
            {artistName}
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
      {other && (
        <div className="ml-2 flex-shrink-0" onClick={handleListMusicClick}>
          <ListMusic className="cursor-pointer invisible group-hover:visible transition-all" />
        </div>
      )}
    </div>
  );
}
