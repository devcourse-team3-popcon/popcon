import { useNavigate } from "react-router";
import { NavLink } from "react-router";
import bell from "../../assets/images/icon-bell.svg";
import chat from "../../assets/images/icon-chat.svg";
import chatActive from "../../assets/images/icon-chat-active.svg";
import user from "../../assets/images/icon-user.svg";
import { useAuthStore } from "../../stores/authStore";

export default function UserSection() {
  const { isLoggedIn } = useAuthStore();
  const navigate = useNavigate();

  return (
    <>
      {!isLoggedIn ? (
        <div className="flex h-[68px] items-center gap-4">
          <button
            onClick={() => navigate("/SignupAgree")}
            className="px-5 py-1 border border-[color:var(--white)] hover:text-[color:var(--primary-100)] hover:border-[color:var(--primary-100)] rounded-[20px] text-[12px] 2xl:text-[14px] cursor-pointer"
          >
            회원가입
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-1 border border-[color:var(--white)] hover:text-[color:var(--primary-100)] hover:border-[color:var(--primary-100)] rounded-[20px] w-[84px] text-[12px] 2xl:text-[14px] cursor-pointer 2xl:w-[90px]"
          >
            로그인
          </button>
        </div>
      ) : (
        <div className="flex h-[68px] items-center gap-6">
          <NavLink to="/chat">
            {({ isActive }) => (
              <div className="w-4.5 h-4.5 2xl:w-5 2xl:h-5">
                <img
                  src={isActive ? chatActive : chat}
                  alt="채팅"
                  className="w-full h-full cursor-pointer fill-current"
                />
              </div>
            )}
          </NavLink>
          <div className="w-5 h-5 2xl:w-5.5 2xl:h-5.5">
            <img
              src={bell}
              alt="알림함"
              className="w-full h-full cursor-pointer"
            />
          </div>

          <div className="w-5.5 h-5.5 2xl:w-6 2xl:h-6">
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
