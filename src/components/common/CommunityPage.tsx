import { ReactNode, useState } from "react";
import { useNavigate } from "react-router";
import SearchBar from "./SearchBar";
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
      <p className="text-[30px] font-semibold">{title}</p>
      <div className="flex w-full py-12 justify-between items-center text-[color:var(--white-80)]">
        <SearchBar
          value={searchInput}
          onChange={setSearchInput}
          className="w-[50%]"
        />

        <Plus className="cursor-pointer" onClick={() => navigate("add")} />
      </div>

      {table}
    </>
  );
}
