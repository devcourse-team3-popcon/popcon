import { Bell, Calendar, Globe, Headphones, User, Users } from "lucide-react";
import { useNavigate } from "react-router";
import chat from "../../../assets/images/icon-chat.svg";

export default function NavigationMenu({
  isLoggedIn,
  toggleMenu,
}: NavigationMenuProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    toggleMenu();
  };

  return (
    <div className="flex flex-col gap-6 py-6">
      {isLoggedIn && <UserNavItems handleNavigation={handleNavigation} />}

      <h2 className="text-[14px] font-medium text-[color:var(--white)]">
        Menu
      </h2>

      <MenuItems isLoggedIn={isLoggedIn} handleNavigation={handleNavigation} />
    </div>
  );
}

function UserNavItems({ handleNavigation }: NavItemsProps) {
  return (
    <nav className="flex flex-col gap-2 text-lg">
      <button
        className="text-left flex gap-4 cursor-pointer hover:bg-[color:var(--grey-500)] py-1.5 px-3 rounded-lg items-center"
        onClick={() => handleNavigation("/chat")}
      >
        <img src={chat} alt="메시지" className="w-4" />
        <p className="text-[14px]">Chat</p>
      </button>
      <button className="text-left flex gap-4 cursor-pointer hover:bg-[color:var(--grey-500)] py-1.5 px-3 rounded-lg items-center">
        <Bell className="w-[18px]" strokeWidth={1.5} />
        <p className="text-[14px]">Notification</p>
      </button>
      <button
        className="text-left flex gap-4 cursor-pointer hover:bg-[color:var(--grey-500)] py-1.5 px-3 rounded-lg items-center"
        onClick={() => handleNavigation("/mypage")}
      >
        <User className="w-[18px]" strokeWidth={1.5} />
        <p className="text-[14px]">My Page</p>
      </button>
    </nav>
  );
}

function MenuItems({ isLoggedIn, handleNavigation }: MenuItemsProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <button
          className="text-left flex text-[14px] gap-4 cursor-pointer hover:bg-[color:var(--grey-500)] py-1.5 px-3 rounded-lg items-center"
          onClick={() => handleNavigation("/upcoming-concerts")}
        >
          <Calendar className="w-[18px] " strokeWidth={1.5} />
          <p>Upcoming Concert</p>
        </button>
        {isLoggedIn ? (
          <button
            className="text-left flex text-[14px] gap-4 cursor-pointer hover:bg-[color:var(--grey-500)] py-1.5 px-3 rounded-lg items-center"
            onClick={() => handleNavigation("/playlist")}
          >
            <Headphones className="w-[18px]" strokeWidth={1.5} />
            <p>Playlist</p>
          </button>
        ) : (
          <button
            className="text-left flex text-[14px] gap-4 cursor-pointer hover:bg-[color:var(--grey-500)] py-1.5 px-3 rounded-lg items-center"
            onClick={() => handleNavigation("/login")}
          >
            <Headphones className="w-[18px]" strokeWidth={1.5} />
            <p>Playlist</p>
          </button>
        )}
        <button
          className="text-left flex text-[14px] gap-4 cursor-pointer hover:bg-[color:var(--grey-500)] py-1.5 px-3 rounded-lg items-center"
          onClick={() => handleNavigation("/community")}
        >
          <Globe className="w-[18px]" strokeWidth={1.5} />
          <p>Community</p>
        </button>
        <button
          className="text-left flex text-[14px] gap-4 cursor-pointer hover:bg-[color:var(--grey-500)] py-1.5 px-3 rounded-lg items-center"
          onClick={() => handleNavigation("/aboutus")}
        >
          <Users className="w-[18px]" strokeWidth={1.5} />
          <p>About Us</p>
        </button>
      </div>
    </>
  );
}
