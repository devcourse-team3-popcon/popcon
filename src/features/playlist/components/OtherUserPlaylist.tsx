import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { getUserById } from "../../../apis/playlist/getUserById";
import { isJSONString } from "../../../utils/stringUtils";
import { getOtherUserTrackToPlaylist } from "../../../apis/playlist/getOtherUserTrackToPlaylist";
import PlaylistTrackItem from "./PlaylistTrackItem";
import { getUserInfo } from "../../../apis/playlist/getUserInfo";

export default function OtherUserPlaylist({
  selectedUserId,
  setSelectedUserId,
}: {
  selectedUserId: string;
  setSelectedUserId: (id: string) => void;
}) {
  const [selectedUserName, setSelectedUserName] = useState<string | null>(null);
  const [parsedData, setParsedData] = useState<ParsedDataType | null>(null);
  const [userPlaylist, setUserPlaylist] = useState<TrackInfo[] | null>(null);
  const [myId, setMyId] = useState("");

  useEffect(() => {
    const getMyId = async () => {
      const data = await getUserInfo();
      setMyId(data._id);
    };
    getMyId();
  }, []);

  useEffect(() => {
    const getUserData = async () => {
      const data = await getUserById(selectedUserId);
      if (isJSONString(data.fullName)) {
        setParsedData(JSON.parse(data.fullName));
      } else {
        setSelectedUserName(data.fullName);
      }
    };
    getUserData();
  }, [selectedUserId]);

  useEffect(() => {
    const getUserId = async () => {
      const data = await getOtherUserTrackToPlaylist(selectedUserId);
      setUserPlaylist(data);
    };
    getUserId();
  }, [selectedUserId]);

  return (
    <div className="flex flex-col p-[48px] bg-[color:var(--grey-600)] w-full h-[408px] rounded-[30px] gap-[32px]">
      <div className="flex items-center gap-2 px-[18px]">
        <ChevronLeft
          className="cursor-pointer"
          onClick={() => setSelectedUserId(myId)}
        />
        <div className="flex gap-4 text-[24px] font-bold px-4">
          <p>{parsedData ? parsedData.name : selectedUserName} 님의 PlayList</p>
          <p>👀</p>
        </div>
      </div>
      <div>
        <div className="flex w-full h-[336px] gap-[8px] px-8">
          <div className="flex flex-col overflow-auto h-[80%] w-full scrollbar-hide">
            {userPlaylist &&
              userPlaylist.map((track) => {
                const parsed: TrackInfo = {
                  _id: track._id,
                  title:
                    typeof track.title === "string"
                      ? JSON.parse(track.title)
                      : track.title,
                };
                return (
                  <PlaylistTrackItem
                    key={track._id}
                    item={parsed}
                    trackId={track._id}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
