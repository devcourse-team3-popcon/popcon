import { usePlaylistPanel } from "../../hooks/usePlaylistPanel";
import PlaylistHeader from "./PlaylistHeader";
import PlaylistTracks from "./PlaylistTracks";
import TrackAddModal from "./TrackAddModal";

export default function PlaylistPanel() {
  const { isModalOpen, userName, tracks, isLoading, toggleModal } =
    usePlaylistPanel();

  return (
    <section className="flex flex-col gap-[40px] h-[800px] bg-[color:var(--grey-600)] rounded-[30px] p-[48px]">
      <PlaylistHeader userName={userName} onAddClick={toggleModal} />
      <PlaylistTracks tracks={tracks} isLoading={isLoading} />
      {isModalOpen && <TrackAddModal onClose={toggleModal} />}
    </section>
  );
}
