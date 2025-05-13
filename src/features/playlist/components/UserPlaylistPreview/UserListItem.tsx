import { ChevronRight } from "lucide-react";
import defaultProfile from "../../../../assets/images/defaultProfile.svg";
import onlineIcon from "../../../../assets/images/icon_online.svg";

export default function UserListItem({
  fullName,
  coverImage,
  favoriteArtist,
  isOnline,
  id,
  setSelectedUserId,
}: UserListItemProps) {
  return (
    <div
      className="flex justify-between w-full p-[16px] border-b border-[color:var(--grey-300)] cursor-pointer hover:border-[color:var(--primary-300)] group"
      onClick={() => {
        setSelectedUserId(id);
      }}
    >
      <div className="flex items-center gap-[24px]">
        <div className="relative">
          <img
            src={coverImage ? coverImage : defaultProfile}
            alt={`${fullName} 유저 프로필`}
            className="w-6 2xl:w-full"
          />
          {isOnline && (
            <img
              src={onlineIcon}
              alt="온라인 표시"
              className="absolute right-0 bottom-0"
            />
          )}
        </div>
        <p className="w-[140px] text-[12px] 2xl:text-[18px] font-bold">{fullName}</p>
      </div>
      <div className="flex items-center">
        <p className="w-full text-[10px] 2xl:text-[14px] text-[color:var(--grey-200)] truncate">
          {favoriteArtist ? `좋아하는 가수 : ${favoriteArtist}` : ""}
        </p>
        <ChevronRight className="group-hover:text-[color:var(--primary-300)]" />
      </div>
    </div>
  );
}
