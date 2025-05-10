export default function PlaylistTrackItemSkeleton() {
  return (
    <div className="flex h-auto p-[18px] justify-between items-center">
      <div className="flex gap-[24px] items-center flex-1 overflow-hidden">
        <div className="w-15 h-15 rounded-[10px] bg-gray-300 animate-pulse" />
        <div className="overflow-hidden flex-1">
          <div className="h-[21px] bg-gray-300 rounded animate-pulse w-3/4" />
          <div className="mt-2 h-[19px] bg-gray-300 rounded animate-pulse w-1/2" />
        </div>
      </div>
    </div>
  );
}
