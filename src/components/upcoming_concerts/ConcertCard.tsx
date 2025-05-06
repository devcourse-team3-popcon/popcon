import {Concert} from "../../types/upcoming_concerts/Concert";

export default function ConcertCard({data}: {data: Concert}) {
  const {
    id,
    image,
    title: {title, artist, date, place, url},
  } = data;

  return (
    <a href={url} target='_blank'>
      <div className='w-[320px] h-[580px] rounded border shadow-2xl'>
        <img src={image} className='w-[320px] h-[400px]' />
        <div className='p-4'>
          <h2>{title}</h2>
          <h2>{artist}</h2>
          <p>{date}</p>
          <p>In {place}</p>
        </div>
      </div>
    </a>
  );
}
