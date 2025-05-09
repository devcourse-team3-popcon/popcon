import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import PlaylistTrackItem from "./PlaylistTrackItem";
import TrackAddModal from "./TrackAddModal";
import { getTrackToPlaylist } from "../../../apis/playlist/getTrackToPlaylist";
import { usePlaylistStore } from "../../../stores/playlistStore";

export default function PlaylistPanel() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const setTracks = usePlaylistStore((state) => state.setTracks);
  const tracks = usePlaylistStore((state) => state.tracks);

 

  useEffect(() => {
    const fetchTracks = async () => {
      const data = await getTrackToPlaylist();
      const parsedData: TrackInfo[] = data.map(
        (item: { title: string; _id: string }) => {
          const parsedTitle = JSON.parse(item.title);

          return {
            title: parsedTitle,
            _id: item._id,
          };
        }
      );
      setTracks(parsedData);
    };
    fetchTracks();
  }, [setTracks]);

  return (
    <div className="flex flex-col gap-[40px] h-[800px] bg-[color:var(--grey-600)] rounded-[30px] p-[48px]">
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
      <div className="overflow-auto scrollbar-hide">
        {tracks.map((track) => (
          <PlaylistTrackItem
            key={track._id}
            item={track}
            showEllipsis={true}
            trackId={track._id}
          />
        ))}
      </div>
    </div>
  );
}
