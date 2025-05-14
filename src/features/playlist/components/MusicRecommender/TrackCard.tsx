import { Pause, Play, Plus } from "lucide-react";
import TrackCardSkeleton from "./TrackCardSkeleton";
import { useAddTrackToPlaylist } from "../../hooks/useAddTrackToPlaylist";
import { useState } from "react";
import { searchYoutubeVideo } from "../../../../apis/youtube/youtubeSearch";

export default function TrackCard({
  track,
  setCurrentVideo,
  currentVideo,
}: TrackCardProps) {
  const handleAddToPlaylist = useAddTrackToPlaylist();
  const [videoId, setVideoId] = useState<string | null>(null);

  if (!track) {
    return <TrackCardSkeleton />;
  }

  const onAddClick = () => {
    handleAddToPlaylist(track);
  };

  const isPlaying =
    currentVideo?.postId === track.id && currentVideo?.videoId === videoId;

  const togglePlayTrack = async () => {
    if (isPlaying) {
      setCurrentVideo(null);
      return;
    }

    const query = `${track.artists} - ${track.name} official audio topic`;
    const foundVideoId = await searchYoutubeVideo(query);

    if (foundVideoId) {
      setVideoId(foundVideoId);
      setCurrentVideo({ postId: track.id, videoId: foundVideoId });
    }
  };

  return (
    <div className="md:w-[160px] xl:w-[112px] 2xl:w-[160px] h-full overflow-hidden flex flex-col justify-center items-center gap-4 md:gap-[25px] xl:gap-4  2xl:gap-[25px] box-border">
      <div className="flex w-15 h-15 md:w-[108px] md:h-[108px] xl:w-20 xl:h-20 2xl:w-[108px] 2xl:h-[108px] justify-center items-center rounded-full relative group overflow-hidden">
        <img
          src={track.album.images[0]?.url || ""}
          alt={`${track.name} 앨범 커버`}
          className="w-full h-full object-cover cursor-pointer"
          onClick={togglePlayTrack}
        />
        <div
          className={`absolute flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 group-hover:bg-black/50 w-full h-full z-10 ${
            isPlaying ? "opacity-100 bg-black/50" : ""
          }`}
        >
          {isPlaying ? (
            <Pause onClick={togglePlayTrack} className="z-50" />
          ) : (
            <Play onClick={togglePlayTrack} className="z-50" />
          )}
        </div>
      </div>

      {isPlaying && currentVideo?.videoId && (
        <iframe
          className="w-0 h-0 hidden"
          src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1&mute=0&controls=0&modestbranding=1&rel=0&showinfo=0`}
          allow="autoplay"
          allowFullScreen
        />
      )}

      <div className="flex flex-col gap-2 justify-center items-center w-full">
        <div className="flex flex-col gap-1 md:gap-2 xl:gap-2 w-full">
          <p
            className="text-[14px] font-bold text-[color:var(--white)] truncate w-full text-center"
            title={track.name}
          >
            {track.name}
          </p>
          <div
            className="text-[12px] text-[color:var(--white-80)] truncate w-full text-center h-[17px]"
            title={track.artists[0].name}
          >
            {track.artists[0].name}
          </div>
        </div>

        <div
          className="flex justify-center gap-[8px] items-center md:mt-[8px] xl:mt-2 2xl:mt-[8px] group"
          onClick={onAddClick}
        >
          <Plus className="w-4 h-4 text-[color:var(--grey-400)] group-hover:text-[color:var(--primary-100)] cursor-pointer" />
          <p className="text-[10px] md:text-[14px] xl:text-[12px] 2xl:text-[14px] text-[color:var(--grey-400)] group-hover:text-[color:var(--primary-100)] cursor-pointer">
            Add Playlist
          </p>
        </div>
      </div>
    </div>
  );
}
