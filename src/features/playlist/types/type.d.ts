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

interface Track {
  name: string;
  imgUrl: string;
  artist: string;
}

interface TrackInfo {
  title: Track;
  _id: string;
}

interface PlaylistTrackItemProps {
  track?: SpotifyTrack;
  onClick?: (track: SpotifyTrack) => void;
  item?: TrackInfo;
  showEllipsis?: boolean;
  trackId: string;
}

interface PlaylistState {
  tracks: TrackInfo[];
  setTracks: (tracks: TrackInfo[]) => void;
}

interface TrackPrompt {
  name: string;
  artist: string;
}

interface TrackRecommendation {
  name: string;
  artist: string;
}

interface UserType {
  fullName: string;
  isOnline: boolean;
  _id: string;
}

interface UserListItemProps {
  fullName: string;
  coverImage?: string;
  favoriteArtist?: string;
  isOnline?: boolean;
  id: string;
  setSelectedUserId: (id: string) => void;
}

interface ParsedDataType {
  name: string;
  coverImage?: string;
  favoriteArtist?: string;
  isOnline?: boolean;
  id: string;
}

interface PlaylistTracksProps {
  tracks: TrackInfo[];
  isLoading: boolean;
}
