export default function ConcertCardSkeleton() {
  return (
    <div className='w-[140px] h-[285px] md:w-[240px] md:h-[480px] animate-pulse border-b'>
      <div className='w-[140px] h-[175px] md:w-60 md:h-[300px] bg-[color:var(--grey-500)] rounded-md' />
      <div className='mt-2 md:mt-10 md:mb-4'>
        <div className='h-7  bg-[color:var(--grey-500)] rounded w-[90%] mb-2.5' />
        <div className='h-4 md:h-[22px] bg-[color:var(--grey-500)] rounded w-[70%] mb-2 md:mb-2.5' />
        <div className='h-3 md:h-5 bg-[color:var(--grey-500)] rounded w-[70%] mb-2' />
      </div>
      <div className='h-3 md:h-4 bg-[color:var(--grey-500)] rounded w-[70%]' />
    </div>
  );
}
