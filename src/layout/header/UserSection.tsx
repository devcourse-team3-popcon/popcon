import { useLocation, useMatch, useNavigate, NavLink } from "react-router";

import bell from "../../assets/images/icon-bell.svg";
import bellLight from "../../assets/images/icon-bell-light.svg";
import bellActive from "../../assets/images/icon-bell-active.svg";
import chat from "../../assets/images/icon-chat.svg";
import chatActive from "../../assets/images/icon-chat-active.svg";
import chatLight from "../../assets/images/icon-chat-light.svg";
import user from "../../assets/images/icon-user.svg";
import { useAuthStore } from "../../stores/authStore";
import DropdownMenu from "../../components/common/DropdownMenu";
import { useState } from "react";
import { useNotificationModal } from "../../features/notification/hooks/useNotificationModal";
import NotificationList from "../../features/notification/components/NotificationList";
import { getCurrentTheme } from "../../utils/theme";

export default function UserSection() {
  const { isShowNotifications, showNotifications, closeNotifications } =
    useNotificationModal();
  const { isLoggedIn } = useAuthStore();
  const { logout } = useAuthStore();
  const navigate = useNavigate();
  const location = useLocation();
  const matchChat = useMatch("/chat");
  const matchChatUser = useMatch("/chat/:userId");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const theme = getCurrentTheme();
  const menuItems = [
    {
      label: "마이페이지",
      onClick: () => {
        setIsOpen(false);
        navigate("/mypage");
      },
    },
    {
      label: "로그아웃",
      onClick: () => {
        setIsOpen(false);
        navigate("/");
        logout();
      },
      danger: true,
    },
  ];

  const isActive = Boolean(matchChat || matchChatUser);

  const getImageSrc = (
    darkImage: string,
    lightImage: string,
    activeImage: string,
    isActive: boolean
  ) => {
    if (isActive) return activeImage;
    return theme === "light" ? lightImage : darkImage;
  };

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
        // relative 지우면 알림창이 안보입니다..!! 머지할 때 꼭 살려주세요
        <div className="relative flex h-[68px] items-center gap-6">

<!--           <div
            className="w-4.5 h-4.5 2xl:w-5 2xl:h-5"
            onClick={() =>
              navigate("/chat", { state: { from: location.pathname } })
            }
          >
            <img
              src={isActive ? chatActive : chat}
              alt="채팅"
              className="w-full h-full cursor-pointer fill-current"
            />
          </div> -->


          <NavLink to="/chat">
            {({ isActive }) => (
              <div className="w-4.5 h-4.5 2xl:w-5 2xl:h-5">
                <img
                  src={getImageSrc(chat, chatLight, chatActive, isActive)}
                  alt="채팅"
                  className="w-full h-full cursor-pointer"
                />
              </div>
            )}
          </NavLink>

          <div
            className="w-4.5 h-4.5 2xl:w-5 2xl:h-5"
            onClick={(e) => {
              e.stopPropagation();
              if (isShowNotifications) {
                closeNotifications();
              } else {
                showNotifications();
              }
            }}
          >
            <img
              src={getImageSrc(
                bell,
                bellLight,
                bellActive,
                isShowNotifications
              )}
              alt="알림함"
              className="w-6 h-6 cursor-pointer"
            />
            {isShowNotifications && (
              <NotificationList closeNotifications={closeNotifications} />
            )}
          </div>

          <div
            className="w-5.5 h-5.5 2xl:w-6 2xl:h-6"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative">
              <img
                src={user}
                alt="유저액션"
                className={`w-full h-full cursor-pointer ${
                  theme === "light" ? "invert" : ""
                }`}

              />
              <div className="mt-2">
                <DropdownMenu
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  menuItems={menuItems}
                  isToggle={true}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
