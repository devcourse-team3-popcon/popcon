import ConcertCard from "../../components/upcoming_concerts/ConcertCard";
import useConcerts from "../../hooks/useConcerts";

export default function UpcomingConcerts() {
  const channelId = "681728150949dd30548aa760"; // Upcoming Concerts channel
  const {concerts, loading} = useConcerts(channelId);

  return (
    <>
      <h1 className='text-2xl mb-4'>
        UPCOMING
        <br /> CONCERTS in KOREA
      </h1>
      <div className='w-[60%]'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='grid gap-4'>
            {concerts.map((concert, index) => (
              <ConcertCard key={index} data={concert} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
