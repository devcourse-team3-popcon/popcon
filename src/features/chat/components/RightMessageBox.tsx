export default function RightMessageBox({
  text,
  time,
}: {
  text: string;
  time: string;
}) {
  return (
    <>
      <div className="flex items-end gap-[16px] self-end">
        <span className="text-[12px] text-[var(--grey-400)] font-medium">
          {time}
        </span>
        <div className="flex items-center min-h-[48px] min-w-[400px] bg-[var(--primary-300)] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px] text-[18px] text-black font-medium px-[16px] py-[8px]">
          {text}
        </div>
      </div>
    </>
  );
}
