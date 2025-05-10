import { Frown } from "lucide-react";

export default function NoMessages() {
  return (
    <>
      <div className="flex flex-col items-center text-[var(--grey-300)]">
        {/* <img src={frown} alt="아이콘" className="size-[48px] mb-[24px] color" /> */}
        <Frown size={48} strokeWidth={1.5} className="mb-[24px]" />
        <span className="text-[24px] font-medium">No Messages Yet</span>
      </div>
    </>
  );
}
