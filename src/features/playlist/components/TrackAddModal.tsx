import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { searchTrack } from "../../../apis/spotify/spotifySearch";
import { getSpotifyAccessToken } from "../../../apis/spotify/getSpotifyAccessToken";
import PlaylistTrackItem from "./PlaylistTrackItem";
import { useAddTrackToPlaylist } from "../hooks/useAddTrackToPlaylist";
import PlaylistTrackItemSkeleton from "./PlaylistTrackItemSkeleton";
import SearchBar from "../../../components/common/SearchBar";

export default function TrackAddModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [trackList, setTrackList] = useState<SpotifyTrack[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const dialogElement = dialogRef.current;
    dialogElement?.showModal();
    document.body.style.overflow = "hidden";
    const handleBackdropClick = (e: MouseEvent) => {
      if (e.target === dialogElement) {
        dialogElement?.close();
        onClose();
      }
    };
    dialogElement?.addEventListener("click", handleBackdropClick);

    return () => {
      dialogElement?.removeEventListener("click", handleBackdropClick);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);

    if (!inputValue.trim()) setTrackList([]);
  };

  const handleTrackClick = useAddTrackToPlaylist(() => {
    dialogRef.current?.close();
    onClose();
  });

  useEffect(() => {
    const getData = async () => {
      if (!inputValue.trim()) {
        setTrackList([]);
        return;
      }
      const timer = setTimeout(async () => {
        try {
          setIsSearching(true);
          const token = await getSpotifyAccessToken();
          const searchData = await searchTrack(inputValue.trim(), token);
          setTrackList(searchData);
          console.log(searchData);
        } catch (error) {
          console.error("노래 검색 실패:", error);
        } finally {
          setIsSearching(false);
        }
      }, 300);

      return () => clearTimeout(timer);
    };

    getData();
  }, [inputValue]);

  return (
    <dialog
      ref={dialogRef}
      className="w-[464px] h-[672px] bg-[color:var(--bg-color)] rounded-[30px] border border-[#fbfbfb78] px-[48px] py-[32px] flex flex-col m-auto"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-[20px] font-bold text-[color:var(--white)]">
          음악 추가
        </h2>
        <X
          onClick={() => {
            dialogRef.current?.close();
            onClose();
          }}
          className="text-[#fbfbfbC2] cursor-pointer"
        />
      </div>
      <div className="flex justify-center mt-[24px]">
        <SearchBar
          value={inputValue}
          onChange={handleInputChange}
          className="w-[100%]"
        />
      </div>
      <div className="overflow-auto flex-1 mt-4 scrollbar-hide">
        {isSearching ? (
          <PlaylistTrackItemSkeleton />
        ) : inputValue.trim() === "" ? (
          ""
        ) : trackList.length === 0 ? (
          <div className="flex justify-center items-center h-20 text-[color:var(--white)]">
            검색 결과가 없습니다
          </div>
        ) : (
          trackList.map((track, index) => (
            <PlaylistTrackItem
              key={track.id || index}
              track={track}
              trackId={track.id}
              onClick={handleTrackClick}
            />
          ))
        )}
      </div>
    </dialog>
  );
}
