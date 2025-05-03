export default function TrackCard() {
  return (
    <div className="flex flex-col gap-[25px] justify-center items-center w-[160px]">
      <img
        src=""
        alt="앨범 이미지"
        className="w-[108px] h-[108px] rounded-[50%]"
      />
      <div className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[8px] justify-center">
          <p className="text-center">Title</p>
          <p className="text-center">Artist</p>
        </div>
        <div className="flex gap-[8px]">
          <p className="text-[14px]">➕</p>
          <p className="text-[color:var(--grey-400)] text-[14px]">
            Add Playlist
          </p>
        </div>
      </div>
    </div>
  );
}
