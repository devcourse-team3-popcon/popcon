import { ChangeEvent, useEffect, useState } from "react";
import { getUserPlaylist } from "../../../apis/playlist/getUserPlaylists";
import UserListItem from "./UserListItem";
import SearchBar from "../../../components/common/SearchBar";
import { getAllUserInfo } from "../../../apis/playlist/getAllUserInfo";
import { isJSONString } from "../../../utils/stringUtils";

export default function UserPlaylistPreview({
  setSelectedUserId,
}: {
  setSelectedUserId: (id: string) => void;
}) {
  const [inputValue, setInputValue] = useState("");
  const [userList, setUserList] = useState<UserType[]>([]);
  const [allUserList, setAllUserList] = useState<UserType[]>([]);

  useEffect(() => {
    const getAllUserList = async () => {
      const data = await getAllUserInfo();
      setAllUserList(data);
    };
    getAllUserList();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (!inputValue.trim()) {
      setUserList([]);
      return;
    }
    const getUsersData = async () => {
      const usersData = await getUserPlaylist(inputValue);
      setUserList(usersData);
    };
    getUsersData();
  }, [inputValue]);
  return (
    <div className="flex flex-col p-[48px] bg-[color:var(--grey-600)] w-full h-[408px] rounded-[30px] gap-[32px]">
      <div className="flex gap-[16px] text-[24px] font-bold px-[32px]">
        <p>다른 유저들의 PlayList 보러가기</p>
        <p>👀</p>
      </div>
      <div>
        <div className="flex flex-col w-full h-[336px] items-center gap-[8px] px-8">
          <SearchBar
            value={inputValue}
            className="w-full "
            placeholder="사용자 검색"
            onChange={handleInputChange}
          />
          <div className="flex flex-col overflow-auto h-[60%] scrollbar-hide">
            {userList.length > 0
              ? userList.map((user) => {
                  if (isJSONString(user.fullName)) {
                    const parsedData = JSON.parse(user.fullName);
                    return (
                      <UserListItem
                        key={user._id}
                        id={user._id}
                        fullName={parsedData.name}
                        isOnline={user.isOnline}
                        favoriteArtist={parsedData.favoriteArtist}
                        setSelectedUserId={setSelectedUserId}
                      />
                    );
                  } else
                    return (
                      <UserListItem
                        key={user._id}
                        id={user._id}
                        fullName={user.fullName}
                        isOnline={user.isOnline}
                        setSelectedUserId={setSelectedUserId}
                      />
                    );
                })
              : allUserList.map((user) => {
                  if (isJSONString(user.fullName)) {
                    const parsedData = JSON.parse(user.fullName);
                    return (
                      <UserListItem
                        key={user._id}
                        id={user._id}
                        fullName={parsedData.name}
                        isOnline={user.isOnline}
                        favoriteArtist={parsedData.favoriteArtist}
                        setSelectedUserId={setSelectedUserId}
                      />
                    );
                  } else
                    return (
                      <UserListItem
                        key={user._id}
                        id={user._id}
                        fullName={user.fullName}
                        isOnline={user.isOnline}
                        setSelectedUserId={setSelectedUserId}
                      />
                    );
                })}
          </div>
        </div>
      </div>
    </div>
  );
}
