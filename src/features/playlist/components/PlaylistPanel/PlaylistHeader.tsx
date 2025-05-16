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
        <div className="flex gap-[16px] text-[20px] font-bold">
          <h2 className="capitalize">
            {" "}
            <span className="text-[color:var(--primary-300)]">
              {userName}
            </span>{" "}
            님의 PlayList
          </h2>
          <span className="inline">🌱</span>
        </div>
        <Plus
          className="text-[color:var(--white-80)] cursor-pointer"
          onClick={onAddClick}
        />
      </div>
    </>
  );
}
