export default function TrackCardSkeleton() {
  return (
    <div className="w-[160px] h-[220px] overflow-hidden flex flex-col justify-center items-center gap-[25px] animate-pulse">
      <div className="flex w-[108px] h-[108px] justify-center items-center">
        <div className="w-full h-full bg-[color:var(--grey-500)] rounded-[100%]" />
      </div>
      <div className="flex flex-col gap-[8px] justify-center items-center">
        <div className="w-[100px] h-[14px] bg-[color:var(--grey-500)] rounded-sm" />
        <div className="w-[80px] h-[14px] bg-[color:var(--grey-500)] rounded-sm" />
        <div className="flex justify-center gap-[8px] items-center mt-[8px]">
          <div className="w-[80px] h-[14px] bg-[color:var(--grey-500)] rounded-sm" />
        </div>
      </div>
    </div>
  );
}
