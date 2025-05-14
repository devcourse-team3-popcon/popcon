export default function ConcertBanner() {
  return (
    <div className='flex items-center w-full max-w-[1712px] h-12 md:h-[130px] mt-2.5 md:mt-12 px-13 pt'>
      <div className='font-[MonumentExtended] text-xl md:text-5xl leading-tight'>
        <p>UPCOMING</p>
        <p>
          <span className='text-[var(--primary-300)]'>CONCERTS</span>
          <span className='mx-1'>&nbsp;in&nbsp;</span>
          <span className='text-[var(--primary-300)]'>KOREA</span>
        </p>
      </div>
    </div>
  );
}
