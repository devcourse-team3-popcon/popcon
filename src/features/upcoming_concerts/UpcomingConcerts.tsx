import ConcertCard from "./components/ConcertCard";
import useConcerts from "./hooks/useConcerts";

export default function UpcomingConcerts() {
  const channelId = "681728150949dd30548aa760"; // Upcoming Concerts channel
  const {concerts, loading} = useConcerts(channelId);

  return (
    // <div className='mt-[10px] md:mt-12 flex flex-col w-full items-center pb-20'>
    //   {/* 공통 컨테이너: 카드 최대 폭 기준 */}
    //   <div className='w-full max-w-[1920px] px-4 md:px-10 flex flex-col items-center'>
    //     {/* 카드 전체 박스를 기준으로 h1의 너비를 동일하게 맞춤 */}
    //     <div className='w-full max-w-[1920px]'>
    //       <h1 className='text-left text-xl md:text-[55px] font-[MonumentExtended] leading-tight ml- md:ml-12'>
    //         <span className='block'>UPCOMING</span>
    //         <span className='text-[var(--primary-300)]'>CONCERTS</span>
    //         <span>&nbsp;in&nbsp;</span>
    //         <span className='text-[var(--primary-300)]'>KOREA</span>
    //       </h1>
    //     </div>

    //     <div className='mt-[36px] flex justify-center w-full'>
    //       {loading ? (
    //         <p>Loading...</p>
    //       ) : (
    //         <div className='flex flex-wrap justify-center gap-x-10 gap-y-10 max-w-[1920px] md:gap-x-20 md:gap-y-20'>
    //           {concerts.map((concert, index) => (
    //             <ConcertCard key={index} data={concert} />
    //           ))}
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>

    <div className='mt-[10px] md:mt-12 flex flex-col w-full justify-center items-center pb-20'>
      <div className='w-full px-4 md:px-10'>
        <h1 className='ml-7 md:ml-14 text-xl md:text-[55px] font-[MonumentExtended] leading-tight'>
          <span className='block'>UPCOMING</span>
          <span className='text-[var(--primary-300)]'>CONCERTS</span>
          <span>&nbsp;in&nbsp;</span>
          <span className='text-[var(--primary-300)]'>KOREA</span>
        </h1>
      </div>
      <div className='flex justify-center mt-9 md:mt-16'>
        {loading ? (
          <p>Loading...</p>
        ) : (
          // <div className='grid grid-cols-4 gap-20'>
          <div className='flex flex-wrap justify-center gap-x-10 gap-y-10 w-full md:gap-x-20 md:gap-y-20'>
            {concerts.map((concert, index) => (
              <ConcertCard key={index} data={concert} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
