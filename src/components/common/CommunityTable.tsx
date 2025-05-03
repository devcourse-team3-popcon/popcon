import { Calendar, Heart, MessageSquare, Type, UserRound } from "lucide-react";
import usePostsByChannel from "../../hooks/usePostsByChannel";

type CommunityTableProps = {
  channelId: string;
};

export default function CommunityTable({ channelId }: CommunityTableProps) {
  const { posts: posts, loading } = usePostsByChannel(`${channelId}`);
  if (loading) return <p>로딩 중...</p>;
  return (
    <>
      <div className="w-full">
        <table className="w-full table-fixed">
          <thead className="border-b text-[color:var(--primary-300-50)] ">
            <tr>
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
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-8 text-[color:var(--white-80)]"
                >
                  게시물이 없습니다.
                </td>
              </tr>
            ) : (
              posts.map((post) => (
                <tr key={post.title}>
                  <td className="text-left p-4 font-medium">{post.title}</td>
                  <td className="text-center p-4">{post.author.fullName}</td>
                  <td className="text-center p-4">{post.comments}</td>
                  <td className="text-center p-4">{post.likes}</td>
                  <td className="text-center p-4">{post.createdAt}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
