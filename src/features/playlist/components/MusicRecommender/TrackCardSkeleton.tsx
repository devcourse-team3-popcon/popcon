export default function TrackCardSkeleton() {
  return (
    <div className="md:w-[160px] xl:w-[112px] 2xl:w-[120px]  overflow-hidden flex flex-col justify-center items-center md:gap-4 box-border min-h-32 ">
      <div className="flex h-[80px] w-[80px] justify-center items-center rounded-full overflow-hidden min-w-15  min-h-15">
        <div className="w-full h-full bg-[color:var(--grey-500)] rounded-full animate-pulse" />
      </div>
      <div className="flex flex-col md:gap-2 justify-center items-center w-full h-[40%]">
        <div className="flex flex-col gap-0.5 md:gap-2 xl:gap-1 w-full">
          <div className="w-[80%] h-[10px] md:h-[14px] bg-[color:var(--grey-500)] rounded-sm animate-pulse mx-auto" />
          <div className="w-[60%] h-[8px] md:h-[12px] bg-[color:var(--grey-500)] rounded-sm animate-pulse mx-auto " />
        </div>
        <div className="flex justify-center gap-[8px] items-center md:mt-[8px]">
          <div className="w-[60px] h-[8px] md:h-[10px] xl:h-[12px] bg-[color:var(--grey-500)] rounded-sm animate-pulse" />
        </div>
      </div>
    </div>
  );
}
