import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PlayListInput from "./PlayListInput";
import { searchTrack } from "../../../apis/spotify/spotifySearch";
import { getSpotifyAccessToken } from "../../../apis/spotify/getSpotifyAccessToken";
import PlaylistTrackItem, { SpotifyTrack } from "./PlaylistTrackItem";

export default function TrackAddModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [trackList, setTrackList] = useState<SpotifyTrack[]>([]);

  useEffect(() => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      document.body.style.overflow = "hidden";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const getData = async () => {
      if (!inputValue.trim()) return;
      try {
        const token = await getSpotifyAccessToken();
        const searchData = await searchTrack(inputValue.trim(), token);
        setTrackList(searchData);
      } catch (error) {
        console.error("노래 검색 실패:", error);
      }
    };

    getData();
  }, [inputValue]);

  const handleClose = () => {
    dialogRef.current?.close();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <dialog
        ref={dialogRef}
        className="w-[90%] sm:w-[464px] h-auto max-h-[90vh] bg-[color:var(--bg-color)] 
                  rounded-[20px] sm:rounded-[30px] border border-[#fbfbfb78] 
                  p-4 sm:px-[48px] sm:py-[32px] flex flex-col m-0
                  overflow-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-[18px] sm:text-[20px] font-bold text-[color:var(--white)]">
            음악 추가
          </h2>
          <X
            onClick={handleClose}
            className="text-[#fbfbfbC2] cursor-pointer"
          />
        </div>
        <div className="flex justify-center mt-[16px] sm:mt-[24px]">
          <PlayListInput
            className="w-full sm:w-[400px]"
            placeholder="검색어 입력"
            onChange={handleInputChange}
          />
        </div>
        <div className="mt-4 overflow-y-auto flex-1">
          {trackList.map((track, index) => (
            <PlaylistTrackItem key={track.id || index} track={track} />
          ))}
        </div>
      </dialog>
    </div>
  );
}