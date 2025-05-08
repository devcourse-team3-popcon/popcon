import { ChangeEvent, useEffect, useState } from "react";
import { getUserPlaylist } from "../../../apis/playlist/getUserPlaylists";
import UserListItem from "./UserListItem";
import SearchBar from "../../../components/common/SearchBar";

export default function UserPlaylistPreview() {
  const [inputValue, setInputValue] = useState("");
  const [userList, setUserList] = useState([]);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const getUsersData = async () => {
      const usersData = await getUserPlaylist(inputValue);
      setUserList(usersData);
      console.log(usersData);
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
            {userList
              ? userList.map((user) => <UserListItem user={user} />)
              : ""}
          </div>
        </div>
      </div>
    </div>
  );
}
