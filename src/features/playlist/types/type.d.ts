type PlayListInputProps = {
  className?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

interface SpotifyTrack {
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

interface TrackInfo {
  name: string;
  imgUrl: string;
  artist: string;
}

interface PlaylistTrackItemProps {
  track?: SpotifyTrack;
  onClick?: (track: SpotifyTrack) => void;
  item?: TrackInfo;
  showEllipsis?: boolean;
}

interface PlaylistState {
  tracks: TrackInfo[];
  setTracks: (tracks: TrackInfo[]) => void;
  addTrack: (track: TrackInfo) => void;
}

type ServerPost = {
  title: string;
};
