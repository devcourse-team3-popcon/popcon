import { Calendar, Heart, MessageSquare, Newspaper, Type } from "lucide-react";
import BackButton from "../../../components/common/BackButton";
import Hashtag from "../../../components/common/Hashtag";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useMemo, useState } from "react";
import { getPostsByUser } from "../../../apis/mypage/postsByUser";
import Pagination from "../../../components/common/Pagination";

export default function MyPostList() {
  const hashtags = ["티켓팅 꿀팁 🎫", "콘서트 후기 ✍️"];

  const location = useLocation();
  const navigate = useNavigate();
  const authorId = location.state?.authorId;
  const userName = location.state?.username;

  interface Post {
    _id: string;
    title: string;
    author: {
      username: string;
    };
    comments: string[];
    likes: string[];
    createdAt: string;
    updatedAt: string;
    channel: {
      name: string;
    };
  }

  const getChannelPath = (name: string) => {
    switch (name) {
      case "ConcertCommunity":
        return "concert-community";
      case "OpenCommunity":
        return "open-community";
      default:
        return "unknown";
    }
  };

  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  const pagedPosts = useMemo(() => {
    const start = (page - 1) * limit;
    const end = start + limit;
    return allPosts.slice(start, end);
  }, [allPosts, page]);

  useEffect(() => {
    if (!authorId) return;

    const fetchPosts = async () => {
      try {
        const res = await getPostsByUser(authorId);
        const parsed = res.map((post: Post) => ({
          ...post,
          title: JSON.parse(post.title).title,
        }));

        setAllPosts(parsed);
      } catch (err) {
        console.error("게시글 불러오기 실패:", err);
      }
    };

    fetchPosts();
  }, [authorId]);

  return (
    <div className="min-h-screen bg-[#1B1C1E] text-white flex flex-col items-center py-10 px-4 ">
      <div className="w-full max-w-[1049px] px-4 md:px-[100px] flex mb-4">
        <BackButton />
      </div>

      <div className="w-full px-4 md:px-[120px] max-w-[1049px] mt-4 flex flex-col gap-8">
        <p className="text-[30px] font-semibold">
          {userName ? `${userName}님의 게시글` : "내 게시글"}
        </p>

        <div className="flex gap-4 flex-wrap">
          {hashtags.map((tag, index) => (
            <Hashtag
              key={index}
              text={tag}
              variant={index % 2 ? "empty" : "filled"}
            />
          ))}
        </div>
      </div>

      <div className="mt-[20px] w-full max-w-[1049px] pt-[40px] px-4 md:px-[120px] flex flex-col">
        <table className="w-full table-fixed">
          <thead className="border-b text-[color:var(--primary-300-50)]">
            <tr>
              <th className="p-4 w-[50%] text-left">
                <div className="flex items-center">
                  <Type className="w-[18px] h-[18px]" />
                </div>
              </th>
              <th className="w-[14%]">
                <div className="flex items-center justify-center">
                  <Newspaper className="w-[18px] h-[18px]" />
                </div>
              </th>
              <th className="w-[9%]">
                <div className="flex items-center justify-center">
                  <MessageSquare className="w-[18px] h-[18px]" />
                </div>
              </th>
              <th className="w-[9%]">
                <div className="flex items-center justify-center">
                  <Heart className="w-[18px] h-[18px]" />
                </div>
              </th>
              <th className="w-[18%]">
                <div className="flex items-center justify-center">
                  <Calendar className="w-[18px] h-[18px]" />
                </div>
              </th>
            </tr>
          </thead>

          <tbody className="text-[14px] font-extralight text-[color:var(--white-80)]">
            {pagedPosts.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-8 text-[color:var(--white-80)]"
                >
                  게시물이 없습니다.
                </td>
              </tr>
            ) : (
              pagedPosts.map((post) => (
                <tr
                  key={post._id}
                  className="cursor-pointer hover:text-[color:var(--primary-300)] text-[#fbfbfb95]"
                  onClick={() =>
                    navigate(
                      `/community/${getChannelPath(post.channel.name)}/post/${
                        post._id
                      }`
                    )
                  }
                >
                  <td className="text-left p-4 font-normal text-[14px]">
                    {post.title}
                  </td>
                  <td className="text-center p-4">
                    {post.channel.name === "ConcertCommunity"
                      ? "콘서트 게시판"
                      : post.channel.name === "OpenCommunity"
                      ? "자유 게시판"
                      : "기타"}
                  </td>
                  <td className="text-center p-4">{post.comments.length}</td>
                  <td className="text-center p-4">{post.likes.length}</td>
                  <td className="text-center p-4">
                    {new Date(
                      post.updatedAt !== post.createdAt
                        ? post.updatedAt
                        : post.createdAt
                    ).toLocaleDateString("ko-KR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        <div className="mt-10 flex justify-center">
          <Pagination
            page={page}
            cntPage={limit}
            totalCnt={allPosts.length}
            setPagination={(_, __, newPage) => setPage(newPage)}
          />
        </div>
      </div>
    </div>
  );
}
