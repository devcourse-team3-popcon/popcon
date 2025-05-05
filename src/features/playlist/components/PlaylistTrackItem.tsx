import { Ellipsis } from "lucide-react";
import { useEffect } from "react";

export default function PlaylistTrackItem({
  track,
  onClick,
  item,
  showEllipsis,
}: PlaylistTrackItemProps) {
  useEffect(() => {
    console.log(item);
  }, []);
  return (
    <div>
      <ul>
        <li
          key={track ? track.album.id : 1}
          className="flex h-[84px] p-[18px] justify-between items-center hover:bg-[color:var(--grey-500)] rounded-[10px] group"
          onClick={() => onClick && track && onClick(track)}
        >
          <div className="flex gap-[24px]">
            <img
              src={track ? track.album.images[0].url : item?.imgUrl}
              alt="앨범 사진"
              className="w-[48px] h-[48px] rounded-none"
            />
            <div>
              <p className="text-[16px] font-bold">
                {track ? track.name : item?.name}
              </p>
              <p className="text-[16px]">
                {track ? track.artists[0].name : item?.artist}
              </p>
            </div>
          </div>
          {showEllipsis && (
            <div className="hidden group-hover:block">
              <Ellipsis className="cursor-pointer" />
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
