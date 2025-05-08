import MusicRecommender from "../features/playlist/components/MusicRecommender";
import PlayListBanner from "../features/playlist/components/PlayListBanner";
import PlaylistPanel from "../features/playlist/components/PlaylistPanel";
import UserPlaylistPreview from "../features/playlist/components/UserPlaylistPreview";

export default function Playlist() {
  return (
    <div className="flex flex-col scrollbar-hide w-[80%] justify-center items-center">
      <PlayListBanner />
      <div className="flex gap-[32px] w-full">
        <div className="flex flex-col gap-[32px] w-[58%]">
          <MusicRecommender />
          <UserPlaylistPreview />
        </div>
        <div className="w-[40%]">
          <PlaylistPanel />
        </div>
      </div>
    </div>
  );
}
