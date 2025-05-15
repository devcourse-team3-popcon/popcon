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
      <div className="justify-between items-center z-40 hidden md:flex">
        <div className="flex gap-[16px] text-[24px] font-bold">
          <h2 className="capitalize">{userName} 님의 PlayList</h2>
          <span className="hidden md:inline">🌱</span>
        </div>
        <Plus
          className="text-[color:var(--white-80)] cursor-pointer"
          onClick={onAddClick}
        />
      </div>
      <div className="md:hidden flex justify-between">
        <p className="font-[MonumentExtended] text-[20px]">
          PLAY<span className="text-[color:var(--primary-300)]">LIST</span>
        </p>
        <Plus
          className="text-[color:var(--white-80)] cursor-pointer"
          onClick={onAddClick}
        />
      </div>
    </>
  );
}
