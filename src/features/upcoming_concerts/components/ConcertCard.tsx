import {Concert} from "../../../types/upcoming_concerts/Concert";

export default function ConcertCard({data}: {data: Concert}) {
  const {
    id,
    image,
    title: {title, artist, date, place, url},
  } = data;

  return (
    <a href={url} target='_blank'>
      <div className='w-[320px] h-[580px] border-b border-[var(--white)]'>
        <img src={image} className='w-80 h-[400px]' />
        <div className='mt-10 mb-4'>
          <h2 className='w-[320px] truncate text-[26px] text-[var(--primary-300)] font-bold'>
            {title}
          </h2>
          <h3 className='text-[18px] font-bold'>{artist}</h3>
          <p className='text-[14px]'>{date}</p>
        </div>
        <p className='text-[12px]'>in {place}</p>
      </div>
    </a>
  );
}
