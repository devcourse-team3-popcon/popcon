import { ReactNode, useState } from "react";
import { useNavigate } from "react-router";
import SearchBar from "../../../components/common/SearchBar";
import { Plus } from "lucide-react";
interface ComunityPageProps {
  title: string;
  table: ReactNode;
}
export default function CommunityPage({ title, table }: ComunityPageProps) {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="mb-24">
        <p className="text-[30px] font-semibold">{title}</p>
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
