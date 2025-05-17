import ConcertCardSkeleton from "./ConcertCardSkeleton";

export default function ConcertListSkeleton() {
  const dummyArray = Array.from({length: 12});

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 md:gap-y-20 gap-x-10 w-full mx-auto place-items-center'>
      {dummyArray.map((_, index) => (
        <ConcertCardSkeleton key={index} />
      ))}
    </div>
  );
}
