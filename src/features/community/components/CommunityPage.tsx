import { ReactNode, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import SearchBar from "../../../components/common/SearchBar";
import { Plus } from "lucide-react";
import { Post } from "../types/Post";
import usePostsByChannel from "../../../hooks/usePostsByChannel";
import Pagination from "../../../components/common/Pagination";
import { usePagination } from "../../../hooks/usePagination";
import SelectBox from "../../../components/common/SelectBox";

interface ComunityPageProps {
  renderTable: (posts: Post[]) => ReactNode;
  channelId: string;
}
export default function CommunityPage({
  renderTable,
  channelId,
}: ComunityPageProps) {
  const [searchInput, setSearchInput] = useState("");
  const [searchType, setSearchType] = useState<"all" | "title" | "writer">(
    "all"
  );
  const navigate = useNavigate();
  const { page, cntPage, setPagination } = usePagination();
  const { posts, loading } = usePostsByChannel(channelId);
  const searchOptions = [
    { value: "all", label: "전체" },
    { value: "title", label: "게시물" },
    { value: "writer", label: "사용자" },
  ];

  const filteredPosts = useMemo(() => {
    if (!posts) return [];
    return posts.filter((post) => {
      if (!searchInput.trim()) return true;
      return searchType === "all"
        ? post.title.includes(searchInput) ||
            post.author.fullName.includes(searchInput)
        : searchType === "title"
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

  if (loading)
    return (
      <div className="w-full h-full flex justify-center items-center"></div>
    );

  return (
    <>
      <div className="mb-24">
        <div className="flex w-full py-12 justify-between items-center text-[color:var(--white-80)]">
          <div className="w-auto flex gap-4 items-center">
            <div>
              <SelectBox
                options={searchOptions}
                value={
                  searchOptions.find((opt) => opt.value === searchType) ?? null
                }
                onChange={(selected) =>
                  setSearchType(selected.value as "all" | "title" | "writer")
                }
              />
            </div>

            <SearchBar
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              className="w-[280px]"
            />
          </div>

          <Plus
            className="cursor-pointer mr-1"
            onClick={() => navigate("add")}
          />
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
