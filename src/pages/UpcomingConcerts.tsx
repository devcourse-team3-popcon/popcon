import ConcertBanner from "../features/upcoming_concerts/components/ConcertBanner";
import ConcertCardSkeleton from "../features/upcoming_concerts/components/ConcertCardSkeleton";
import ConcertList from "../features/upcoming_concerts/components/ConcertList";
import useConcerts from "../features/upcoming_concerts/hooks/useConcerts";

export default function UpcomingConcerts() {
  const channelId = "681728150949dd30548aa760"; // Upcoming Concerts channel
  const {concerts, loading} = useConcerts(channelId);

  return (
    <div className='mt-[10px] md:mt-12 flex flex-col w-full justify-center items-center pb-20'>
      <ConcertBanner />
      <div className='flex justify-center mt-9 md:mt-16'>
        {loading ? <ConcertCardSkeleton /> : <ConcertList concerts={concerts} />}
      </div>
    </div>
  );
}
