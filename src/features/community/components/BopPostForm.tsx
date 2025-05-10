import { useState } from "react";
import SearchBar from "../../../components/common/SearchBar";
import { Track } from "../types/Track";
import { getSpotifyAccessToken } from "../../../apis/spotify/getSpotifyAccessToken";
import { searchTrack } from "../../../apis/spotify/spotifySearch";
import InputField from "../../../components/common/InputField";

interface BopPostFormProps {
  bopTrack: Track | null;
  bopGenre: string;
  bopText: string;
  setBopTrack: (track: Track | null) => void;
  setBopText: (value: string) => void;
  setBopGenre: (value: string) => void;
}

export default function BopPostForm({
  bopTrack,
  bopText,
  bopGenre,
  setBopTrack,
  setBopText,
  setBopGenre,
}: BopPostFormProps) {
  const genreOptions = [
    { value: 1, label: "Country" },
    { value: 2, label: "Hip-hop" },
    { value: 3, label: "POP" },
    { value: 4, label: "Rock" },
    { value: 5, label: "EDM" },
    { value: 6, label: "Jazz" },
    { value: 7, label: "R&B" },
    { value: 8, label: "Indie" },
    { value: 9, label: "alternative" },
  ];

  const [trackInput, setTrackInput] = useState("");
  const [tracks, setTracks] = useState([]);

  const searchHandler = async (e: React.FormEvent) => {
    if (trackInput.length === 0) {
      setTracks([]);
      return;
    }

    e.preventDefault();

    const accessToken = await getSpotifyAccessToken();
    const results = await searchTrack(trackInput, accessToken);
    setTracks(results);
    console.log(results);
  };

  return (
    <>
      <form className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <label htmlFor="trackInput">나의 숨듣명 *</label>
          <SearchBar
            value={trackInput}
            onChange={(e) => {
              setTrackInput(e.target.value);
              searchHandler(e);
            }}
          />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="trackGenre">숨듣명 장르 *</label>
          <select
            className="border border-[color:var(--white-80)] px-4 rounded-[10px] text-[16px] h-10 focus:outline-none focus:border-[color:var(--primary-200)] w-[100%] appearance-none "
            value={bopGenre}
            onChange={(e) => {
              setBopGenre(e.target.value);
            }}
          >
            {genreOptions.map((option) => (
              <option key={option.value} value={option.label}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <InputField
            label="숨듣명 선정 이유 *"
            type="text"
            //maxLength="40"
            id="bopText"
            name="bopText"
            autoComplete="bopText"
            placeholder="40자 내외로 작성해주세요."
            value={bopText}
            onChange={(e) => {
              setBopText(e.target.value);
            }}
          />
        </div>
      </form>

      <ul className="m-2">
        {tracks.map((track: Track) => (
          <li
            key={track.id}
            className="flex gap-5"
            onClick={() => setBopTrack(track)}
          >
            <img className="h-18px w-18px" src={track.image} />
            {track.name} - {track.artists.join(",")}
          </li>
        ))}
      </ul>
      {bopTrack && (
        <div className="flex">
          <img className="h-18px w-18px" src={bopTrack.image} />
          {bopTrack.name} - {bopTrack.artists.join(",")}
        </div>
      )}
    </>
  );
}
