export default function LeftMessageBox({
  text,
  time,
  className,
}: {
  text: string;
  time: string;
  className?: string;
}) {
  let rouned = "rounded-tr-[20px] rounded-br-[20px]";

  switch (className) {
    case "rounded-t":
      rouned = "rounded-tl-[20px] rounded-tr-[20px] rounded-br-[20px]";
      break;

    case "rounded-b":
      rouned = "rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px]";
      break;
  }

  return (
    <>
      <div className="flex items-end gap-[16px]">
        <div
          className={`flex items-center min-h-[48px] max-w-[400px] bg-[var(--grey-500)] ${rouned} text-lg font-regular px-[16px] py-[8px]`}
        >
          {text}
        </div>
        <span className="text-[0.75rem] text-[var(--grey-400)] font-regular">
          {time}
        </span>
      </div>
    </>
  );
}
