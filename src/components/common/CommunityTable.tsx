import { Calendar, Heart, MessageSquare, Type, UserRound } from "lucide-react";

export default function CommunityTable() {
  const posts = [
    {
      id: 1,
      title: "게시물 1",
      user: "user1",
      comments: "0",
      likes: "0",
      date: "2025-00-00",
    },
    {
      id: 2,
      title: "게시물 2",
      user: "user2",
      comments: "0",
      likes: "0",
      date: "2025-00-00",
    },
    {
      id: 3,
      title: "게시물 3",
      user: "user3",
      comments: "0",
      likes: "0",
      date: "2025-00-00",
    },
  ];
  return (
    <>
      <div className="w-full">
        <table className="w-full table-fixed">
          <thead className="border-b text-[color:var(--primary-300-50)] ">
            <th className="p-4 w-[50%] text-left">
              <div className="flex items-center">
                <Type />
              </div>
            </th>
            <th className="w-[15%]">
              <div className="flex items-center justify-center">
                <UserRound />
              </div>
            </th>
            <th className="w-[10%]">
              <div className="flex items-center justify-center">
                <MessageSquare />
              </div>
            </th>
            <th className="w-[10%]">
              <div className="flex items-center justify-center">
                <Heart />
              </div>
            </th>
            <th className="w-[15%]">
              <div className="flex items-center justify-center">
                <Calendar />
              </div>
            </th>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td className="text-left p-4 font-medium">{post.title}</td>
                <td className="text-center p-4">{post.user}</td>
                <td className="text-center p-4">{post.comments}</td>
                <td className="text-center p-4">{post.likes}</td>
                <td className="text-center p-4">{post.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
