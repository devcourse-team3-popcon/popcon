import { useEffect, useState } from "react";
import MusicRecommender from "../features/playlist/components/MusicRecommender";
import PlayListBanner from "../features/playlist/components/PlayListBanner";
import PlaylistPanel from "../features/playlist/components/PlaylistPanel";
import UserPlaylistPreview from "../features/playlist/components/UserPlaylistPreview";
import { getUserInfo } from "../apis/playlist/getUserInfo";
import OtherUserPlaylist from "../features/playlist/components/OtherUserPlaylist";

export default function Playlist() {
  const [userId, setUserId] = useState("");
  const [selectedUserId, setSelectedUserId] = useState<string>("");

  useEffect(() => {
    const getUserData = async () => {
      const data = await getUserInfo();
      setUserId(data._id);
      setSelectedUserId(data._id);
    };
    getUserData();
  }, []);

  return (
    <div className="flex flex-col scrollbar-hide w-[80%] justify-center items-center">
      <PlayListBanner />
      <div className="flex gap-[32px] w-full">
        <div className="flex flex-col gap-[32px] w-[58%]">
          <MusicRecommender />
          {userId === selectedUserId && (
            <UserPlaylistPreview setSelectedUserId={setSelectedUserId} />
          )}
          {userId !== selectedUserId && (
            <OtherUserPlaylist
              selectedUserId={selectedUserId}
              setSelectedUserId={setSelectedUserId}
            />
          )}
        </div>
        <div className="w-[40%]">
          <PlaylistPanel />
        </div>
      </div>
    </div>
  );
}
