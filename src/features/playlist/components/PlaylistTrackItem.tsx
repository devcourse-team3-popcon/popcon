import { Ellipsis } from "lucide-react";

export default function PlaylistTrackItem({
  track,
  onClick,
  item,
  showEllipsis,
}: PlaylistTrackItemProps) {
  return (
    <div
      className="flex h-[84px] p-[18px] justify-between items-center hover:bg-[color:var(--grey-500)] rounded-[10px] group cursor-pointer"
      onClick={() => onClick && track && onClick(track)}
    >
      <div className="flex gap-[24px] items-center flex-1 overflow-hidden">
        <img
          src={track ? track.album.images[0].url : item?.imgUrl}
          alt="앨범 사진"
          className="w-[48px] h-[48px] min-w-[48px] rounded-[10px]"
        />
        <div className="overflow-hidden">
          <p className="text-[16px] font-bold truncate">
            {track ? track.name : item?.name}
          </p>
          <p className="text-[16px] truncate">
            {track ? track.artists[0].name : item?.artist}
          </p>
        </div>
      </div>
      {showEllipsis && (
        <div className="hidden group-hover:block ml-2">
          <Ellipsis className="cursor-pointer" />
        </div>
      )}
    </div>
  );
}
