import { ReactNode, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import SearchBar from "../../../components/common/SearchBar";
import { Plus } from "lucide-react";
import { Post } from "../types/Post";
import usePostsByChannel from "../../../hooks/usePostsByChannel";
import Pagination from "../../../components/common/Pagination";
import { usePagination } from "../../../hooks/usePagination";

interface ComunityPageProps {
  renderTable: (posts: Post[]) => ReactNode;
  channelId: string;
}
export default function CommunityPage({
  renderTable,
  channelId,
}: ComunityPageProps) {
  const [searchInput, setSearchInput] = useState("");
  const [searchType, setSearchType] = useState<"all" | "writer">("all");
  const navigate = useNavigate();
  const { page, cntPage, setPagination } = usePagination();
  const { posts, loading } = usePostsByChannel(channelId);

  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    return posts.filter((post) => {
      if (!searchInput.trim()) return true;
      return searchType === "all"
        ? post.title.includes(searchInput)
        : post.author.fullName.includes(searchInput);
    });
  }, [posts, searchInput, searchType]);

  useEffect(() => {
    setPagination(cntPage, filteredPosts.length, 1);
  }, [searchInput, searchType, cntPage]);

  const indexOfLastPost = page * cntPage;
  const indexOfFirstPost = indexOfLastPost - cntPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  if (loading) return <p>로딩 중...</p>;

  return (
    <>
      <div className="mb-24">
        <div className="flex w-full py-12 justify-between items-center text-[color:var(--white-80)]">
          <div className="w-[70%] flex gap-4">
            <select
              value={searchType}
              onChange={(e) =>
                setSearchType(e.target.value as "all" | "writer")
              }
            >
              <option key="0" value="all">
                게시물
              </option>
              <option key="1" value="writer">
                사용자
              </option>
            </select>
            <SearchBar
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              className="w-[70%]"
            />
          </div>

          <Plus className="cursor-pointer" onClick={() => navigate("add")} />
        </div>

        {renderTable(currentPosts)}

        <div className="mt-8 flex justify-center">
          <Pagination
            page={page}
            cntPage={cntPage}
            totalCnt={filteredPosts.length}
            setPagination={setPagination}
          />
        </div>
      </div>
    </>
  );
}
