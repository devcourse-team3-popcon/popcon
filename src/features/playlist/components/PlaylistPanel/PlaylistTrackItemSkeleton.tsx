export default function PlaylistTrackItemSkeleton() {
  return (
    <div>
      <ul>
        <li className="flex h-auto p-[18px] justify-between items-center rounded-[10px] group">
          <div className="flex gap-[24px]">
            <div className="w-15 h-15 bg-[color:var(--grey-500)] rounded-[10px] animate-pulse" />
            <div className="flex flex-col justify-center">
              <div className="h-[18px] w-[120px] bg-[color:var(--grey-500)] rounded-md mb-2 animate-pulse" />
              <div className="h-[18px] w-[80px] bg-[color:var(--grey-500)] rounded-md animate-pulse mt-2" />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}