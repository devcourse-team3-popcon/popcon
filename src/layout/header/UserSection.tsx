import bell from "../../assets/images/icon-bell.svg";
import chat from "../../assets/images/icon-chat.svg";
import user from "../../assets/images/icon-user.svg";

export default function UserSection() {
  return (
    <div className="flex h-[88px] items-center gap-6">
      <div className="w-4.5 h-4.5 2xl:w-5 2xl:h-5">
        <img src={chat} alt="채팅" className="w-full h-full cursor-pointer" />
      </div>

      <div className="w-4.5 h-4.5 2xl:w-5 2xl:h-5">
        <img src={bell} alt="알림함" className="w-full h-full cursor-pointer" />
      </div>

      <div className="w-5 h-5 2xl:w-[22px] 2xl:h-[22px]">
        <img
          src={user}
          alt="유저액션"
          className="w-full h-full cursor-pointer"
        />
      </div>
    </div>
  );
}
