import {Concert} from "../../../types/upcoming_concerts/Concert";

export default function ConcertCard({data}: {data: Concert}) {
  const {
    id,
    image,
    title: {title, artist, date, place, url},
  } = data;

  return (
    <a href={url} target='_blank'>
      <div className='w-[140px] h-[285px] border-b border-[var(--white)] md:w-[320px] md:h-[580px]'>
        <img src={image} className='w-[140px] h-[175px] md:w-80 md:h-[400px]' />
        <div className='mt-2 md:mt-10 md:mb-4'>
          <h2 className='h-[30px] overflow-hidden w-[140px]md:w-[320px] md:truncate text-xs md:text-[26px] text-[var(--primary-300)] font-bold mb-2'>
            {title}
          </h2>
          <h3 className='text-xs md:text-lg font-bold mb-1'>{artist}</h3>
          <p className='text-[8px] md:text-sm mb-2'>{date}</p>
        </div>
        <p className='text-[8px] md:text-xs'>in {place}</p>
      </div>
    </a>
  );
}
