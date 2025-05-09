export default function LeftMessageBox({
  text,
  time,
}: {
  text: string;
  time: string;
}) {
  return (
    <>
      <div className="flex items-end gap-[16px]">
        <div className="flex items-center min-h-[48px] min-w-[400px] bg-[var(--grey-500)] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px] text-[18px] font-medium px-[16px] py-[8px]">
          {text}
        </div>
        <span className="text-[12px] text-[var(--grey-400)] font-medium">
          {time}
        </span>
      </div>
    </>
  );
}
