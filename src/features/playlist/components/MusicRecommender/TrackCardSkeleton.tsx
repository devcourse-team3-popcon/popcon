export default function TrackCardSkeleton() {
  return (
    <div className="md:w-[160px] xl:w-[112px] 2xl:w-[120px] h-auto overflow-visible flex flex-col justify-start items-center gap-2 md:gap-3 box-border">
      <div className="flex justify-center items-center rounded-full overflow-hidden w-16 h-16 md:w-20 md:h-20 xl:w-[72px] xl:h-[72px] 2xl:w-20 2xl:h-20 flex-shrink-0">
        <div className="w-full h-full bg-[color:var(--grey-500)] rounded-full animate-pulse" />
      </div>

      <div className="flex flex-col gap-1 md:gap-2 justify-start items-center w-full">
        <div className="flex flex-col gap-0.5 md:gap-2 xl:gap-1 w-full">
          <div className="w-[80%] h-3 md:h-[14px] bg-[color:var(--grey-500)] rounded-sm animate-pulse mx-auto" />
          <div className="w-[60%] h-[17px] bg-[color:var(--grey-500)] rounded-sm animate-pulse mx-auto" />
        </div>

        <div className="flex justify-center gap-[8px] items-center md:mt-1">
          <div className="w-2 h-2 md:w-3 md:h-3 bg-[color:var(--grey-500)] rounded-sm animate-pulse" />
          <div className="w-12 h-2 md:w-[50px] md:h-[10px] xl:h-[12px] bg-[color:var(--grey-500)] rounded-sm animate-pulse" />
        </div>
      </div>
    </div>
  );
}