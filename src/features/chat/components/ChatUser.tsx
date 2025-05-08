export default function ChatUser() {
  const islogined: boolean = true;

  return (
    <>
      <div className="w-[320px] h-[64px] px-[9px] py-[8px] flex gap-[16px] rounded-[10px] hover:bg-[var(--grey-500)]">
        <div className="size-[48px] rounded-[50px] bg-[var(--grey-200)]"></div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-[16px] items-center">
            <div className="text-[18px] font-medium">User</div>
            {islogined && (
              <div className="rounded-[50px] size-[8px] bg-[var(--primary-300)]"></div>
            )}
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="text-[14px] font-medium text-[var(--grey-100)]">
              Content
            </div>
            <div className="text-[12px] font-medium text-[#D9D9D9]">
              00:00 PM
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
