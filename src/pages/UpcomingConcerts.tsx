import ConcertBanner from "../features/upcoming_concerts/components/ConcertBanner";
import ConcertList from "../features/upcoming_concerts/components/ConcertList";
import ConcertListSkeleton from "../features/upcoming_concerts/components/ConcertListSkeleton";
import useConcerts from "../features/upcoming_concerts/hooks/useConcerts";

export default function UpcomingConcerts() {
  const channelId = "681728150949dd30548aa760"; // Upcoming Concerts channel
  const {concerts, loading} = useConcerts(channelId);

  return (
    <div className='grid justify-center items-center'>
      <ConcertBanner />

      <div className='mt-9 md:mt-16'>
        {loading ? <ConcertListSkeleton /> : <ConcertList concerts={concerts} />}
      </div>
    </div>
  );
}
