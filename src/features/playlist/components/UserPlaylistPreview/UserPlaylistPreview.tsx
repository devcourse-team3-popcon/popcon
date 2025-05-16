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
    <section className="flex flex-col pt-10 px-12 bg-[color:var(--grey-600)] w-full overflow-hidden rounded-[30px] gap-[16px] h-[55%] mb-12 xl:mb-0 xl:min-h-0 min-h-80">
      <UserPlaylistHeader />

      <div className="flex-1 overflow-hidden">
        <div className="flex flex-col w-full h-full items-center gap-[8px] px-4">
          <SearchBar
            value={inputValue}
            className="w-full"
            placeholder="사용자 검색"
            onChange={handleInputChange}
            aria-label="사용자 검색"
          />
          <div className="w-full flex-1 overflow-auto scrollbar-hide">
            <UserList
              users={displayUsers}
              isLoading={isLoading}
              setSelectedUserId={setSelectedUserId}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
