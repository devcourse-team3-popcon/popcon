import PlayListInput from "./PlayListInput";
import profile from "./profile.png";
import { ChevronRight } from "lucide-react";

export default function UserPlaylistPreview() {
  return (
    <div className="flex flex-col p-[48px] bg-[color:var(--grey-600)] w-[800px] h-[520px] rounded-[30px] gap-[32px]">
      <div className="flex gap-[16px] text-[24px] font-bold px-[32px]">
        <p>다른 유저들의 PlayList 보러가기</p>
        <p>👀</p>
      </div>
      <div>
        <div className="flex flex-col w-[704px] h-[336px] items-center gap-[8px]">
          <PlayListInput placeholder="사용자 검색" />
          <div className="flex justify-between w-[640px] p-[16px] border-b border-[color:var(--grey-300)] cursor-pointer hover:border-[color:var(--primary-300)] group">
            <div className="flex items-center gap-[24px]">
              <img src={profile} alt="유저 프로필" />
              <p className="w-[140px] text-[18px] font-bold">User Name</p>
            </div>
            <div className="flex items-center">
              <p className="w-[140px] text-[14px] text-[color:var(--grey-200)]">
                좋아하는 가수 : Lauv
              </p>
              <ChevronRight className="group-hover:text-[color:var(--primary-300)]" />
            </div>
          </div>
          <div className="flex justify-between w-[640px] p-[16px] border-b border-[color:var(--grey-300)] cursor-pointer hover:border-[color:var(--primary-300)] group">
            <div className="flex items-center gap-[24px]">
              <img src={profile} alt="유저 프로필" />
              <p className="w-[140px] text-[18px] font-bold">User Name</p>
            </div>
            <div className="flex items-center">
              <p className="w-[140px] text-[14px] text-[color:var(--grey-200)]">
                좋아하는 가수 : Lauv
              </p>
              <ChevronRight className="group-hover:text-[color:var(--primary-300)]" />
            </div>
          </div>
          <div className="flex justify-between w-[640px] p-[16px] border-b border-[color:var(--grey-300)] cursor-pointer hover:border-[color:var(--primary-300)] group">
            <div className="flex items-center gap-[24px]">
              <img src={profile} alt="유저 프로필" />
              <p className="w-[140px] text-[18px] font-bold">User Name</p>
            </div>
            <div className="flex items-center">
              <p className="w-[140px] text-[14px] text-[color:var(--grey-200)]">
                좋아하는 가수 : Lauv
              </p>
              <ChevronRight className="group-hover:text-[color:var(--primary-300)]" />
            </div>
          </div>
          <div className="flex justify-between w-[640px] p-[16px] border-b border-[color:var(--grey-300)] cursor-pointer hover:border-[color:var(--primary-300)] group">
            <div className="flex items-center gap-[24px]">
              <img src={profile} alt="유저 프로필" />
              <p className="w-[140px] text-[18px] font-bold">User Name</p>
            </div>
            <div className="flex items-center">
              <p className="w-[140px] text-[14px] text-[color:var(--grey-200)]">
                좋아하는 가수 : Lauv
              </p>
              <ChevronRight className="group-hover:text-[color:var(--primary-300)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
