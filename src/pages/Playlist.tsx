import MusicRecommender from "../features/playlist/components/MusicRecommender";
import PlayListBanner from "../features/playlist/components/PlayListBanner";
import UserPlaylistPreview from "../features/playlist/components/UserPlaylistPreview";

export default function Playlist() {
  return (
    <div className="flex flex-col">
      <PlayListBanner />
      <div className="flex flex-col gap-[32px]">
        <MusicRecommender />
        <UserPlaylistPreview />
      </div>
    </div>
  );
}
