import TrackCard from "./TrackCard";
import TrackCardSkeleton from "./TrackCardSkeleton";

interface RecommendedTrackListProps {
  recommendations: SpotifyTrack[];
  isLoading: boolean;
}

export default function RecommendedTrackList({
  recommendations,
  isLoading,
}: RecommendedTrackListProps) {
  const SKELETON_COUNT = 4;

  return (
    <div className="flex gap-[25px] justify-center items-center">
      {isLoading || recommendations.length === 0
        ? Array.from({ length: SKELETON_COUNT }).map((_, index) => (
            <TrackCardSkeleton key={index} />
          ))
        : recommendations.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
    </div>
  );
}
