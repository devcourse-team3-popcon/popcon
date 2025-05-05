import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import PlayListInput from "./PlayListInput";
import { searchTrack } from "../../../apis/spotify/spotifySearch";
import { getSpotifyAccessToken } from "../../../apis/spotify/getSpotifyAccessToken";
import PlaylistTrackItem, { SpotifyTrack } from "./PlaylistTrackItem";
import { useAddTrackToPlaylist } from "../hooks/useAddTrackToPlaylist";

export default function TrackAddModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [inputValue, setInputValue] = useState("");
  const [trackList, setTrackList] = useState<SpotifyTrack[]>([]);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleTrackClick = useAddTrackToPlaylist(() => {
    dialogRef.current?.close();
    onClose();
  });

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
        <PlayListInput
          className="w-[400px]"
          placeholder="검색어 입력"
          onChange={handleInputChange}
        />
      </div>
      <div className="overflow-auto flex-1 mt-4">
        {trackList.map((track, index) => (
          <PlaylistTrackItem
            key={track.id || index}
            track={track}
            onClick={handleTrackClick}
          />
        ))}
      </div>
    </dialog>
  );
}
