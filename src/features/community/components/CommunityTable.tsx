import { Calendar, Heart, MessageSquare, Type, UserRound } from "lucide-react";
import { useNavigate } from "react-router";
import { parseTitle } from "../../../utils/parseTitle";
import { Post } from "../types/Post";
import { parseUserName } from "../../../utils/parseUserName";

type CommunityTableProps = {
  posts: Post[];
};

export default function CommunityTable({ posts }: CommunityTableProps) {
  const navigate = useNavigate();

  const formatTime = (date: Date) => {
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleClick = (postId: string) => {
    navigate(`/community/post/${postId}`);
  };

  return (
    <>
      <div className="w-full">
        <table className="w-full table-fixed">
          <thead className="border-b text-[color:var(--primary-300-50)] ">
            <tr>
              <th className="p-4 w-[50%] text-left">
                <div className="flex items-center">
                  <Type className="w-[18px] h-[18px]" />
                </div>
              </th>
              <th className="w-[15%]">
                <div className="flex items-center justify-center">
                  <UserRound className="w-[18px] h-[18px]" />
                </div>
              </th>
              <th className="w-[10%]">
                <div className="flex items-center justify-center">
                  <MessageSquare className="w-[18px] h-[18px]" />
                </div>
              </th>
              <th className="w-[10%]">
                <div className="flex items-center justify-center">
                  <Heart className="w-[18px] h-[18px]" />
                </div>
              </th>
              <th className="w-[15%]">
                <div className="flex items-center justify-center">
                  <Calendar className="w-[18px] h-[18px]" />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="text-[14px] font-extralight text-[color:var(--white-80)]">
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
              posts.map((post) => {
                const parsedTitle = parseTitle(post.title);
                const parsedUserName = parseUserName(post.author.fullName);
                return (
                  <tr
                    key={post._id}
                    className="cursor-pointer hover:text-[color:var(--primary-300)] text-[#fbfbfb95]"
                    onClick={() => handleClick(post._id)}
                  >
                    <td className="text-left p-4 font-normal text-[16px]">
                      {parsedTitle.title}
                    </td>
                    <td className="text-center p-4">{parsedUserName.name}</td>
                    <td className="text-center p-4">{post.comments.length}</td>
                    <td className="text-center p-4">{post.likes.length}</td>
                    <td className="text-center p-4">
                      {formatTime(new Date(post.createdAt))}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
