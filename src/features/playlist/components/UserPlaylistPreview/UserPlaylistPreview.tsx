import UserPlaylistHeader from "./UserPlaylistHeader";
import UserList from "./UserList";
import { useUserPlaylistPreview } from "../../hooks/useUserPlaylistPreview";
import SearchBar from "../../../../components/common/SearchBar";

export default function UserPlaylistPreview({
  setSelectedUserId,
}: {
  setSelectedUserId: (id: string) => void;
}) {
  const { inputValue, displayUsers, isLoading, handleInputChange } =
    useUserPlaylistPreview();

  return (
    <section className="flex flex-col pt-12  md:px-12 md:bg-[color:var(--grey-600)] w-full h-[440px] overflow-hidden md:h-[408px] rounded-[30px] gap-[32px]">
      <UserPlaylistHeader />

      <div>
        <div className="flex flex-col w-full h-full md:h-[336px] items-center gap-[8px] 2xl:px-8">
          <SearchBar
            value={inputValue}
            className="w-full"
            placeholder="사용자 검색"
            onChange={handleInputChange}
            aria-label="사용자 검색"
          />

          <UserList
            users={displayUsers}
            isLoading={isLoading}
            setSelectedUserId={setSelectedUserId}
          />
        </div>
      </div>
    </section>
  );
}