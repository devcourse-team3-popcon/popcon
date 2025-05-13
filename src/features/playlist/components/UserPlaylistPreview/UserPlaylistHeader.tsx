export default function UserPlaylistHeader() {
  return (
    <>
      <div className="hidden md:flex gap-[16px] text-[16px] 2xl:text-[24px] font-bold 2xl:px-[32px]">
        <h2>
          다른 유저들의 PlayList{" "}
          <span className="hidden 2xl:inline">보러가기</span>
        </h2>
        <span role="img" aria-label="eyes">
          👀
        </span>
      </div>
      <div className="md:hidden flex gap-[16px] text-[14px] font-bold items-center">
        <h2>
          다른 유저들의
          <span className="text-[color:var(--primary-300)]">PlayList</span>
          보러가기
        </h2>
        <span role="img" aria-label="eyes">
          👀
        </span>
      </div>
    </>
  );
}
