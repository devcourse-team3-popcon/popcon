import PlaylistTrackItem from "./PlaylistTrackItem";
import PlaylistTrackItemSkeleton from "./PlaylistTrackItemSkeleton";
import frownicon from "../../../../assets/images/icon-frown.svg";

export default function PlaylistTracks({
  tracks,
  isLoading,
  currentVideo,
  setCurrentVideo,
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
      <div className="flex flex-col items-center justify-center h-full text-[color:var(--grey-400)] translate-y-[-70px] gap-6">
        <img src={frownicon} alt="frownicon" />
        <p>Your Playlist is empty. Add some tracks to get start</p>
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
          currentVideo={currentVideo}
          setCurrentVideo={setCurrentVideo}
        />
      ))}
    </div>
  );
}