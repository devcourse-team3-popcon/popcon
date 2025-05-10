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
    <div className="flex justify-between items-center">
      <div className="flex gap-[16px] text-[24px] font-bold">
        <h2 className="capitalize">
          {userName}
          님의 PlayList
        </h2>
        <span role="img" aria-label="seedling">
          🌱
        </span>
      </div>
      <Plus
        className="cursor-pointer text-[color:var(--white)]"
        onClick={onAddClick}
        aria-label="트랙 추가"
      />
    </div>
  );
}
