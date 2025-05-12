export default function UserPlaylistHeader() {
  return (
    <div className="flex gap-[16px] text-[24px] font-bold px-[32px]">
      <h2>다른 유저들의 PlayList 보러가기</h2>
      <span role="img" aria-label="eyes">
        👀
      </span>
    </div>
  );
}
