import useSearchUsers from "../hooks/useSearchUsers";
// import { UserInfo } from "../types/UserInfo";
import SearchUser from "./SearchUser";

export default function UserList({
  keyword,
  onClick,
}: {
  keyword: string;
  onClick?: (userId: string) => void;
}) {
  const { userList } = useSearchUsers(keyword);

  // if (loading) return <p>loading...</p>;

  // console.log(userList);

  return (
    <>
      {userList.length === 0 ? (
        <div className="text-lg font-medium self-center">No Results</div>
      ) : (
        userList.map((user) => (
          <SearchUser
            key={user._id}
            userId={user._id}
            name={user.fullName.name}
            isOnline={user.isOnline}
            image={user.image}
            onClick={onClick}
          />
        ))
      )}
    </>
  );
}
