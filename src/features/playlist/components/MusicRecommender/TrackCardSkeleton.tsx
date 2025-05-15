export default function TrackCardSkeleton() {
  return (
    <div className="md:w-[160px] xl:w-[112px] 2xl:w-[160px] h-full overflow-hidden flex flex-col justify-center items-center gap-4 md:gap-[25px] xl:gap-4 2xl:gap-[25px] box-border">
      <div className="flex w-15 h-15 md:w-[108px] md:h-[108px] xl:w-20 xl:h-20 2xl:w-[108px] 2xl:h-[108px] justify-center items-center rounded-full overflow-hidden">
        <div className="w-full h-full bg-[color:var(--grey-500)] rounded-full animate-pulse" />
      </div>
      <div className="flex flex-col gap-2 justify-center items-center w-full">
        <div className="flex flex-col gap-1 md:gap-2 xl:gap-2 w-full">
          <div className="w-[80%] h-[14px] bg-[color:var(--grey-500)] rounded-sm animate-pulse mx-auto" />
          <div className="w-[60%] h-[12px] bg-[color:var(--grey-500)] rounded-sm animate-pulse mx-auto" />
        </div>
        <div className="flex justify-center gap-[8px] items-center md:mt-[8px] xl:mt-2 2xl:mt-[8px]">
          <div className="w-[60px] h-[10px] md:h-[14px] xl:h-[12px] 2xl:h-[14px] bg-[color:var(--grey-500)] rounded-sm animate-pulse" />
        </div>
      </div>
    </div>
  );
}
