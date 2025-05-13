import TrackCard from "./TrackCard";
import TrackCardSkeleton from "./TrackCardSkeleton";

export default function RecommendedTrackList({
  recommendations,
  isLoading,
  setCurrentVideo,
  currentVideo,
}: RecommendedTrackListProps) {
  const SKELETON_COUNT = 4;

  return (
    <div className="grid grid-cols-2 2xl:flex 2xl:flex-row gap-[10px] 2xl:gap-[25px] justify-center items-center">
      {isLoading || recommendations.length === 0
        ? Array.from({ length: SKELETON_COUNT }).map((_, index) => (
            <TrackCardSkeleton key={index} />
          ))
        : recommendations.map((track) => (
            <TrackCard
              key={track.id}
              track={track}
              setCurrentVideo={setCurrentVideo}
              currentVideo={currentVideo}
            />
          ))}
    </div>
  );
}
