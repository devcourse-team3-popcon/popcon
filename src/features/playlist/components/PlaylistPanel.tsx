import { Plus } from "lucide-react";
import PlaylistTrackItem from "./PlaylistTrackItem";
import { useEffect, useState } from "react";
import TrackAddModal from "./TrackAddModal";
import { getTrackToPlaylist } from "../../../apis/playlist/getTrackToPlaylist";

export default function PlaylistPanel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playList, setPlayList] = useState<
    NonNullable<PlaylistTrackItemProps["item"]>[]
  >([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getTrackToPlaylist();
      setPlayList(data);
    };
    getData();
  }, []);
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
      <div>
        {playList.map((item) => {
          const data = JSON.parse(item.title);
          return <PlaylistTrackItem item={data} showEllipsis={true} />;
        })}
      </div>
    </div>
  );
}
