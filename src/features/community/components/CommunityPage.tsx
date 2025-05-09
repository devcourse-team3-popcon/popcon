import { ReactNode, useState } from "react";
import { useNavigate } from "react-router";
import SearchBar from "../../../components/common/SearchBar";
import { Plus } from "lucide-react";
import Hashtag from "../../../components/common/Hashtag";
interface ComunityPageProps {
  title: string;
  table: ReactNode;
}
export default function CommunityPage({ title, table }: ComunityPageProps) {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const hashtags = [
    "내 가수 자랑 😎",
    "이 노래 제목이 뭐죠? 🤔",
    "신곡 추천 🎶",
    "느좋 팝송 🎧️",
  ];

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
            <select>
              <option key="0" value="all">
                통합
              </option>
              <option key="1" value="writer">
                사용자
              </option>
            </select>
            <SearchBar
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-[70%]"
            />
          </div>

          <Plus className="cursor-pointer" onClick={() => navigate("add")} />
        </div>

        {table}
      </div>
    </>
  );
}
