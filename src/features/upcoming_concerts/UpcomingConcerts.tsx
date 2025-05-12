import ConcertCard from "../../components/upcoming_concerts/ConcertCard";
import useConcerts from "../../hooks/useConcerts";

export default function UpcomingConcerts() {
  const channelId = "681728150949dd30548aa760"; // Upcoming Concerts channel
  const {concerts, loading} = useConcerts(channelId);

  return (
    <div className='mt-12 flex flex-col justify-center items-center'>
      <div className='w-full  gap-20'>
        <h1 className='text-[55px] font-[MonumentExtended] leading-17'>
          <span className='block'>UPCOMING</span>
          <span className='text-[var(--primary-300)]'>CONCERTS</span>
          <span>&nbsp;in&nbsp;</span>
          <span className='text-[var(--primary-300)]'>KOREA</span>
        </h1>
      </div>
      <div className='flex justify-center mt-16'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='grid grid-cols-4 gap-20'>
            {concerts.map((concert, index) => (
              <ConcertCard key={index} data={concert} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
