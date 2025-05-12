import {
  Bell,
  Calendar,
  Globe,
  Hamburger,
  Headphones,
  User,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import popcon from "../../assets/images/icon_sidemenu.svg";
import chat from "../../assets/images/icon-chat.svg";

interface SideMenuProps {
  isLoggedIn: boolean;
}

export default function SideMenu({ isLoggedIn }: SideMenuProps) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {open ? (
        <X
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden fixed top-12 right-5 z-50 text-white "
        />
      ) : (
        <Hamburger
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden fixed top-12 right-5 z-50 text-white "
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-[320px] bg-[color:var(--grey-600)] shadow-lg z-40 transition-transform duration-300 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0 md:static md:w-[20%] md:right-0`}
      >
        <div className="flex flex-col h-full px-5 pt-23">
          {isLoggedIn ? (
            <div className="flex flex-col gap-4 pb-10 border-b border-[color:var(--white)]">
              <img src={popcon} alt="팝콘 아이콘" className="w-[25px]" />
              <p className="text-2xl font-medium">Hi 👋🏻</p>
              <p className="font-[MonumentExtended] text-[18px] text-[color:var(--primary-300)]">
                POPCON
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4 pb-10 border-b border-[color:var(--white)]">
              <img src={popcon} alt="팝콘 아이콘" className="w-[25px]" />
              <p className="text-2xl font-medium">Welcome</p>
              <p className="font-[MonumentExtended] text-[18px] text-[color:var(--primary-300)]">
                POPCON
              </p>
            </div>
          )}

          <div className="flex flex-col gap-6 py-10">
            {isLoggedIn && (
              <nav className=" flex flex-col gap-4 text-lg">
                <button
                  className="text-left flex gap-4"
                  onClick={() => {
                    navigate("/chat");
                    setOpen((prev) => !prev);
                  }}
                >
                  <img src={chat} alt="메시지" className="w-4" />
                  <p>Chat</p>
                </button>
                <button className="text-left flex gap-4">
                  <Bell />
                  <p>Notification</p>
                </button>
                <button
                  className="text-left flex gap-4"
                  onClick={() => {
                    navigate("/mypage");
                    setOpen((prev) => !prev);
                  }}
                >
                  <User />
                  <p>My Page</p>
                </button>
              </nav>
            )}
            <h2 className="text-[18px] font-medium text-[color:var(--white)]">
              Menu
            </h2>
            <button
              className="text-left flex text-[14px] gap-4"
              onClick={() => {
                navigate("/upcoming-concerts");
                setOpen((prev) => !prev);
              }}
            >
              <Calendar />
              <p>Upcoming Concert</p>
            </button>
            {isLoggedIn && (
              <button
                className="text-left flex text-[14px] gap-4"
                onClick={() => {
                  navigate("/playlist");
                  setOpen((prev) => !prev);
                }}
              >
                <Headphones />
                <p>Playlist</p>
              </button>
            )}
            <button
              className="text-left flex text-[14px] gap-4"
              onClick={() => {
                navigate("/community");
                setOpen((prev) => !prev);
              }}
            >
              <Globe />
              <p>Community</p>
            </button>
            <button
              className="text-left flex text-[14px] gap-4"
              onClick={() => {
                navigate("/aboutus");
                setOpen((prev) => !prev);
              }}
            >
              <Users />
              <p>About Us</p>
            </button>
          </div>

          <div className="mt-auto flex justify-center">
            {isLoggedIn ? (
              <button className="text-[color:var(--white-80)] text-[12px] font-medium mb-16">
                Log Out
              </button>
            ) : (
              <div className="flex gap-12 text-[color:var(--white-80)] text-[12px] font-medium mb-16">
                <button
                  onClick={() => {
                    navigate("/login");
                    setOpen((prev) => !prev);
                  }}
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    navigate("/signup");
                    setOpen((prev) => !prev);
                  }}
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
