export default function RightMessageBox({
  text,
  time,
  className,
}: {
  text: string;
  time: string;
  className?: string;
}) {
  let rouned = "rounded-tl-[20px] rounded-bl-[20px]";

  switch (className) {
    case "rounded-t":
      rouned = "rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[20px]";
      break;

    case "rounded-b":
      rouned = "rounded-tl-[20px] rounded-bl-[20px] rounded-br-[20px]";
      break;
  }

  return (
    <>
      <div className="flex items-end gap-[16px] self-end">
        <span className="text-[12px] text-[var(--grey-400)] font-regular">
          {time}
        </span>
        <div
          className={`flex items-center min-h-[48px] max-w-[400px] bg-[var(--primary-300)] ${rouned} text-[18px] text-black font-regular px-[16px] py-[8px]`}
        >
          {text}
        </div>
      </div>
    </>
  );
}
