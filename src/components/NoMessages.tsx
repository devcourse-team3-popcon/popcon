import frown from "../assets/images/icon-frown.svg";

export default function NoMessages() {
  return (
    <>
      <div className="flex flex-col items-center text-[var(--grey-300)]">
        <img src={frown} alt="아이콘" className="size-[48px] mb-[24px] color" />
        <span>No Messages Yet</span>
      </div>
    </>
  );
}
