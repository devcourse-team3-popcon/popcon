import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import SearchBar from "../../../components/common/SearchBar";
import { Plus } from "lucide-react";
import Hashtag from "../../../components/common/Hashtag";
import { Post } from "../../../types/Post";
import { axiosInstance } from "../../../apis/axiosInstance";

interface ComunityPageProps {
  title: string;
  renderTable: (posts: Post[]) => ReactNode;
  channelId: string;
}
export default function CommunityPage({
  title,
  renderTable,
  channelId,
}: ComunityPageProps) {
  const [searchInput, setSearchInput] = useState("");
  const [searchType, setSearchType] = useState<"all" | "writer">("all");
  const [posts, setPosts] = useState<Post[]>([]);
  const navigate = useNavigate();

  const hashtags = [
    "내 가수 자랑 😎",
    "이 노래 제목이 뭐죠? 🤔",
    "신곡 추천 🎶",
    "느좋 팝송 🎧️",
  ];

  const fetchPosts = async () => {
    try {
      const res = await axiosInstance.get(`/posts/channel/${channelId}`);
      setPosts(res.data);
    } catch (e) {
      console.error("게시글 조회 실패", e);
    }
  };

  const searchHandler = () => {
    fetchPosts();
  };

  // const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter") {
  //     searchHandler();
  //   }
  // };

  const filteredPosts = posts.filter((post) => {
    if (!searchInput.trim()) return true;
    if (searchType === "all") {
      return post.title.includes(searchInput);
    } else {
      return post.author.fullName.includes(searchInput);
    }
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="mb-24">
        <div className="flex flex-col gap-8">
          <p className="text-[30px] font-semibold">{title}</p>
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
        <div className="flex w-full py-12 justify-between items-center text-[color:var(--white-80)]">
          <div className="w-[70%] flex gap-4">
            <select
              value={searchType}
              onChange={(e) =>
                setSearchType(e.target.value as "all" | "writer")
              }
            >
              <option key="0" value="all">
                통합
              </option>
              <option key="1" value="writer">
                사용자
              </option>
            </select>
            <SearchBar
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                searchHandler();
              }}
              className="w-[70%]"
            />
          </div>

          <Plus className="cursor-pointer" onClick={() => navigate("add")} />
        </div>

        {renderTable(filteredPosts)}
      </div>
    </>
  );
}
