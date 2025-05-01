import bell from "../../assets/images/icon-bell.svg";
import chat from "../../assets/images/icon-chat.svg";
import user from "../../assets/images/icon-user.svg";

export default function UserSection() {
  return (
    <div className="flex h-[88px] items-center gap-6">
      <img src={chat} alt="채팅" className="w-6 h-6 cursor-pointer" />
      <img src={bell} alt="알림함" className="w-6 h-6 cursor-pointer" />
      <img
        src={user}
        alt="유저액션"
        className="w-[28px] h-[28px] cursor-pointer"
      />
    </div>
  );
}
