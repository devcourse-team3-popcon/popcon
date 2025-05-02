export default function UserPlaylistPreview() {
  return (
    <div className="flex flex-col p-[48px] bg-[color:var(--grey-600)] w-[800px] rounded-[30px] gap-[32px]">
      <div className="flex gap-[16px] text-[24px] font-bold">
        <p>다른 유저들의 PlayList 보러가기</p>
        <p>👀</p>
      </div>
      <div>
        <input
          type="text"
          className="border border-[#fbfbfb80] px-[54px] rounded-[10px] text-[16px] font-bold h-[40px]"
          placeholder=" 사용자 검색"
        />
      </div>
    </div>
  );
}
