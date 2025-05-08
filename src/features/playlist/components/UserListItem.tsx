import { ChevronRight } from "lucide-react";
import defaultProfile from "../../../assets/images/defaultProfile.svg";

export default function UserListItem(user: {
  user: { fullName: string; email: string; coverImage?: string };
}) {
  return (
    <div className="flex justify-between w-[640px] p-[16px] border-b border-[color:var(--grey-300)] cursor-pointer hover:border-[color:var(--primary-300)] group">
      <div className="flex items-center gap-[24px]">
        <img
          src={user.user.coverImage ? user.user.coverImage : defaultProfile}
          alt="유저 프로필"
        />
        <p className="w-[140px] text-[18px] font-bold">{user.user.fullName}</p>
      </div>
      <div className="flex items-center">
        <p className="w-[140px] text-[14px] text-[color:var(--grey-200)]">
          좋아하는 가수 : Lauv
        </p>
        <ChevronRight className="group-hover:text-[color:var(--primary-300)]" />
      </div>
    </div>
  );
}
