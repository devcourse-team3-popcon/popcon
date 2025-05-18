import { useEffect, useState } from "react";
import MusicRecommender from "../features/playlist/components/MusicRecommender/MusicRecommender";
import PlayListBanner from "../features/playlist/components/PlayListBanner";
import PlaylistPanel from "../features/playlist/components/PlaylistPanel/PlaylistPanel";
import OtherUserPlaylist from "../features/playlist/components/OtherUserPlaylist/OtherUserPlaylist";
import { getUserInfo } from "../apis/playlist/userService";
import UserPlaylistPreview from "../features/playlist/components/UserPlaylistPreview/UserPlaylistPreview";

export default function Playlist() {
  const [userId, setUserId] = useState("");
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [currentVideo, setCurrentVideo] = useState<{
    postId: string;
    videoId: string;
  } | null>(null);

  useEffect(() => {
    const getUserData = async () => {
      const data = await getUserInfo();
      setUserId(data._id);
      setSelectedUserId(data._id);
    };
    getUserData();
  }, []);

  return (
    <div className="mt-12 md:mt-0 lg:mt-25 flex flex-col scrollbar-hide w-[80%] lg:w-[800px] xl:w-[1080px] justify-center items-center h-auto lg:h-[70vh]">
      <PlayListBanner />
      <div className="flex flex-col xl:flex-row gap-[32px] w-full h-[70vh]">
        <div className="flex flex-col gap-[32px] w-full xl:w-[58%] order-last xl:order-none h-full mt-8">
          <MusicRecommender
            setCurrentVideo={setCurrentVideo}
            currentVideo={currentVideo}
          />

          {userId === selectedUserId ? (
            <UserPlaylistPreview setSelectedUserId={setSelectedUserId} />
          ) : (
            <OtherUserPlaylist
              selectedUserId={selectedUserId}
              setSelectedUserId={setSelectedUserId}
              setCurrentVideo={setCurrentVideo}
              currentVideo={currentVideo}
            />
          )}
        </div>
        <div className="w-full xl:w-[40%] order-first xl:order-none h-[70vh]">
          <PlaylistPanel
            setCurrentVideo={setCurrentVideo}
            currentVideo={currentVideo}
          />
        </div>
      </div>
    </div>
  );
}
