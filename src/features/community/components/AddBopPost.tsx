import { useState } from "react";
import { getSpotifyAccessToken } from "../../../apis/spotify/getSpotifyAccessToken";
import { searchTrack } from "../../../apis/spotify/spotifySearch";
import InputField from "../../../components/common/InputField";
import SearchBar from "../../../components/common/SearchBar";
import { Track } from "../types/Track";
import { useChannelId } from "../../../hooks/useChannelId";
import { ChannelName } from "../types/ChannelName";
import { useNavigate } from "react-router";
import { createPost } from "../../../utils/post";
import BackButton from "../../../components/common/BackButton";

export default function AddBopPost({ channelName }: ChannelName) {
  const navigate = useNavigate();
  const { channelId } = useChannelId(channelName);
  const [bopTrack, setBopTrack] = useState<Track | null>(null);
  const [bopGenre, setBopGenre] = useState("");
  const [bopText, setBopText] = useState("");

  const [trackInput, setTrackInput] = useState("");
  const [tracks, setTracks] = useState([]);

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

  const createBopHandler = async () => {
    if (!bopTrack || !bopGenre || !bopText || !channelId) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    const jsonTitle = {
      track: {
        id: bopTrack.id,
        name: bopTrack.name,
        artists: bopTrack.artists.map((artist) => artist.name),
        image: bopTrack.album.images[0]?.url || "",
      },
      genre: bopGenre,
      text: bopText,
    };

    try {
      const response = await createPost({
        title: jsonTitle,
        channelId,
      });
      if (response.status === 201 || response.status === 200) {
        navigate(-1);
      }
    } catch (e) {
      console.log("Error during Bop Post creation:", e);
    }
  };

  return (
    <>
      <BackButton />
      <div className="flex flex-col w-full h-auto border border-(--white) border-opacity-50 rounded-lg p-[48px] box-border gap-8">
        <span className="w-full text-center text-2xl">숨듣명 추가하기</span>
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
              <img className="h-18px w-18px" src={track.album.images[2]?.url} />
              {track.name} - {track.artists[0].name}
            </li>
          ))}
        </ul>
        {bopTrack && (
          <div className="flex">
            <img
              className="h-18px w-18px"
              src={bopTrack.album.images[2]?.url}
            />
            {bopTrack.name} - {bopTrack.artists[0].name}
          </div>
        )}
        <div className="w-[100%] flex justify-center items-center">
          <button
            type="button"
            className="cursor-pointer text-[14px] px-8 py-3 bg-(--primary-300)  text-(--bg-color) w-fit rounded-4xl font-semibold"
            onClick={createBopHandler}
          >
            저장하기
          </button>
        </div>
      </div>
    </>
  );
}
