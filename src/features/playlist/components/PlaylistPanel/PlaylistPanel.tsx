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
    <section className="flex flex-col gap-5 h-full md:bg-[color:var(--grey-600)] pt-10 rounded-[30px] md:pt-10 md:px-12">
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
