import { Plus } from "lucide-react";
import PlaylistTrackItem from "./PlaylistTrackItem";
import { useState } from "react";
import TrackAddModal from "./TrackAddModal";

export default function PlaylistPanel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex flex-col gap-[40px] w-[560px] h-[912px] bg-[color:var(--grey-600)] rounded-[30px] p-[48px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-[16px] text-[24px] font-bold">
          <p>Jay 님의 PlayList</p>
          <span>🌱</span>
        </div>
        <Plus
          className="cursor-pointer"
          onClick={() => setIsModalOpen((prev) => !prev)}
        />
        {isModalOpen && (
          <TrackAddModal onClose={() => setIsModalOpen((prev) => !prev)} />
        )}
      </div>
      {/* <PlaylistTrackItem /> */}
    </div>
  );
}
