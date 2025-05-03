import { Ellipsis } from "lucide-react";

export interface SpotifyTrack {
  id: string;
  name: string;
  duration_ms: number;
  popularity: number;
  preview_url: string | null;
  external_urls: {
    spotify: string;
  };
  album: {
    id: string;
    name: string;
    images: {
      url: string;
      height: number;
      width: number;
    }[];
  };
  artists: {
    id: string;
    name: string;
  }[];
}

export default function PlaylistTrackItem({ track }: { track: SpotifyTrack }) {
  return (
    <div>
      <ul>
        <li
          key={track.album.id}
          className="flex h-[84px] p-[18px] justify-between items-center hover:bg-[color:var(--grey-500)] rounded-[10px]"
        >
          <div className="flex gap-[24px]">
            <img
              src={track.album.images[0].url}
              alt="앨범 사진"
              className="w-[48px] h-[48px] rounded-none"
            />
            <div>
              <p className="text-[16px] font-bold">{track.name}</p>
              <p className="text-[16px]">{track.artists[0].name}</p>
            </div>
          </div>
          <Ellipsis className="cursor-pointer" />
        </li>
      </ul>
    </div>
  );
}
