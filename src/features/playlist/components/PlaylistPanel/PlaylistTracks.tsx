import PlaylistTrackItem from "../PlaylistTrackItem";
import PlaylistTrackItemSkeleton from "../PlaylistTrackItemSkeleton";

export default function PlaylistTracks({
  tracks,
  isLoading,
}: PlaylistTracksProps) {
  if (isLoading) {
    return (
      <div className="overflow-auto scrollbar-hide">
        {Array.from({ length: 5 }).map((_, index) => (
          <PlaylistTrackItemSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-[color:var(--grey-400)]">
        플레이리스트가 비어있습니다. 트랙을 추가해주세요.
      </div>
    );
  }

  return (
    <div className="overflow-auto scrollbar-hide">
      {tracks.map((track) => (
        <PlaylistTrackItem
          key={track._id}
          item={track}
          showEllipsis={true}
          trackId={track._id}
        />
      ))}
    </div>
  );
}
