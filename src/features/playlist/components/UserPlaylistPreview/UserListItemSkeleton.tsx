export function UserListItemSkeleton() {
  return (
    <div className="flex items-center p-4 rounded animate-pulse gap-3">
      <div className="w-10 h-10 bg-[color:var(--grey-400)] rounded-full mr-3" />
      <div className="h-5 bg-[color:var(--grey-400)] rounded w-1/4" />
    </div>
  );
}
