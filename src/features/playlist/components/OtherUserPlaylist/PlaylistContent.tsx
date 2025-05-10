import PlaylistTrackItem from "../PlaylistTrackItem";
import PlaylistTrackItemSkeleton from "../PlaylistTrackItemSkeleton";
import { EmptyPlaylist } from "./EmptyPlaylist";

export const PlaylistContent = ({
  userPlaylist,
  isLoading,
}: {
  userPlaylist: TrackInfo[] | null;
  isLoading: boolean;
}) => (
  <div className="flex w-full h-[354px] gap-[8px]">
    <div className="flex flex-col overflow-auto h-[80%] w-full scrollbar-hide">
      {isLoading ? (
        <PlaylistTrackItemSkeleton />
      ) : userPlaylist?.length ? (
        userPlaylist.map((track) => (
          <PlaylistTrackItem key={track._id} item={track} trackId={track._id} />
        ))
      ) : (
        <EmptyPlaylist />
      )}
    </div>
  </div>
);
