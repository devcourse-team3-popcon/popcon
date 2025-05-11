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
    <div className="flex justify-between items-center z-50">
      <div className="flex gap-[16px] text-[24px] font-bold">
        <h2 className="capitalize">
          {userName}
          님의 PlayList
        </h2>
        <span role="img">🌱</span>
      </div>
      <Plus
        className="text-[color:var(--white-80)] cursor-pointer"
        onClick={onAddClick}
      />
    </div>
  );
}
