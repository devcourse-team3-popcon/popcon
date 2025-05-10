import { parseUser } from "../../../../utils/userParser";
import UserListItem from "./UserListItem";
import { UserListItemSkeleton } from "./UserListItemSkeleton";

interface UserListProps {
  users: UserType[];
  isLoading: boolean;
  setSelectedUserId: (id: string) => void;
}

export default function UserList({
  users,
  isLoading,
  setSelectedUserId,
}: UserListProps) {
  if (isLoading) {
    return (
      <div className="flex flex-col overflow-auto h-[60%] scrollbar-hide w-full">
        {Array.from({ length: 5 }).map((_, index) => (
          <UserListItemSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="flex items-center justify-center h-[60%] text-gray-400">
        검색 결과가 없습니다.
      </div>
    );
  }

  return (
    <div className="flex flex-col overflow-auto h-[60%] scrollbar-hide w-full">
      {users.map((user) => {
        const parsedUser = parseUser(user);
        return (
          <UserListItem
            key={parsedUser.id}
            id={parsedUser.id}
            fullName={parsedUser.fullName}
            isOnline={parsedUser.isOnline}
            favoriteArtist={parsedUser.favoriteArtist}
            setSelectedUserId={setSelectedUserId}
          />
        );
      })}
    </div>
  );
}
