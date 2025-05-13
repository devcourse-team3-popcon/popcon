import { usePlaylistPanel } from "../../hooks/usePlaylistPanel";
import PlaylistHeader from "./PlaylistHeader";
import PlaylistTracks from "./PlaylistTracks";
import TrackAddModal from "./TrackAddModal";

export default function PlaylistPanel({
  currentVideo,
  setCurrentVideo,
}: CurrentVideoProps) {
  const { isModalOpen, userName, tracks, isLoading, toggleModal } =
    usePlaylistPanel();

  return (
    <section className="flex flex-col gap-[40px] h-auto xl:h-[800px] md:bg-[color:var(--grey-600)] rounded-[30px] md:p-[48px]">
      <PlaylistHeader userName={userName} onAddClick={toggleModal} />
      <PlaylistTracks
        tracks={tracks}
        isLoading={isLoading}
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
      />
      {isModalOpen && (
        <TrackAddModal
          onClose={toggleModal}
          currentVideo={currentVideo}
          setCurrentVideo={setCurrentVideo}
        />
      )}
    </section>
  );
}
