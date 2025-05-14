import {Concert} from "../../../types/upcoming_concerts/Concert";
import ConcertCard from "./ConcertCard";

export default function ConcertList({concerts}: {concerts: Concert[]}) {
  return (
    <>
      <div className='flex flex-wrap justify-center gap-x-10 gap-y-10 w-full md:gap-x-20 md:gap-y-20'>
        {concerts.map((concert, index) => (
          <ConcertCard key={index} data={concert} />
        ))}
      </div>
    </>
  );
}
