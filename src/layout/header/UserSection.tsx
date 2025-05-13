import { useNavigate } from "react-router";
import bell from "../../assets/images/icon-bell.svg";
import chat from "../../assets/images/icon-chat.svg";
import user from "../../assets/images/icon-user.svg";
import { useAuthStore } from "../../stores/authStore";

export default function UserSection() {
  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();

  return (
    <>
      {!isLoggedIn ? (
        <div className="flex h-[88px] items-center gap-4">
          <button
            onClick={() => navigate("/SignupAgree")}
            className="px-6 py-2 border border-[color:var(--primary-100)] rounded-[10px] text-[14px] 2xl:text-[16px] cursor-pointer"
          >
            회원가입
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-6 py-2 border border-[color:var(--white)] rounded-[10px] text-[14px] 2xl:text-[16px] cursor-pointer"
          >
            로그인
          </button>
        </div>
      ) : (
        <div className="flex h-[88px] items-center gap-6">
          <div className="w-4.5 h-4.5 2xl:w-5 2xl:h-5">
            <img
              src={chat}
              alt="채팅"
              className="w-full h-full cursor-pointer"
            />
          </div>
          <div className="w-4.5 h-4.5 2xl:w-5 2xl:h-5">
            <img
              src={bell}
              alt="알림함"
              className="w-full h-full cursor-pointer"
            />
          </div>
          <div className="w-5 h-5 2xl:w-[22px] 2xl:h-[22px]">
            <img
              src={user}
              alt="유저액션"
              className="w-full h-full cursor-pointer"
            />
          </div>
        </div>
      )}
    </>
  );
}
