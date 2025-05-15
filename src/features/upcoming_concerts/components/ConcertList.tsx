import {Concert} from "../../../types/upcoming_concerts/Concert";
import ConcertCard from "./ConcertCard";

export default function ConcertList({concerts}: {concerts: Concert[]}) {
  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 md:gap-x-20 md:gap-y-20 w-full mx-auto place-items-center'>
        {concerts.map((concert, index) => (
          <ConcertCard key={index} data={concert} />
        ))}
      </div>
    </>
  );
}
