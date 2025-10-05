import { Plus } from "lucide-react";
interface PlaylistHeaderProps {
  userName: string;
  onAddClick: () => void;
}

export default function PlaylistHeader({
  userName,
  onAddClick,
}: PlaylistHeaderProps) {
  return (
    <>
      <div className="justify-between items-center z-40 flex">
        <div className="flex gap-[16px] md:text-[20px] font-bold items-center">
          <h2 className="capitalize"> {userName} 님의 PlayList</h2>
          <span
            className="flex items-center justify-center w-6 h-6"
            style={{ fontSize: "20px" }}
          >
            🌱
          </span>
        </div>
        <Plus
          className="text-[color:var(--white-80)] cursor-pointer"
          onClick={onAddClick}
        />
      </div>
    </>
  );
}
