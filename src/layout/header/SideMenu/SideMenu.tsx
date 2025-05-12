import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getUserInfo } from "../../../apis/playlist/userService";
import UserProfile from "./UserProfile";
import WelcomeSection from "./WelcomeSection";
import NavigationMenu from "./NavigationMenu";
import AuthButtons from "./AuthButtons";

export default function SideMenu({ isLoggedIn }: SideMenuProps) {
  const [open, setOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserType>();
  const [parsedData, setParsedData] = useState<ParsedDataType>();

  useEffect(() => {
    const getUserData = async () => {
      const data = await getUserInfo();
      setUserInfo(data);
      setParsedData(JSON.parse(data.fullName));
    };
    getUserData();
  }, []);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <>
      {open ? (
        <X
          onClick={toggleMenu}
          className="md:hidden fixed top-12 right-5 z-50 text-white cursor-pointer"
        />
      ) : (
        <Menu
          onClick={toggleMenu}
          className="md:hidden fixed top-12 right-5 z-50 text-white cursor-pointer"
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-[320px] bg-[color:var(--grey-600)] shadow-lg z-40 transition-transform duration-300 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0 md:static md:w-[20%] md:right-0`}
      >
        <div className="flex flex-col h-full px-5 pt-23">
          {isLoggedIn ? (
            <UserProfile userInfo={userInfo} parsedData={parsedData} />
          ) : (
            <WelcomeSection />
          )}

          <NavigationMenu isLoggedIn={isLoggedIn} toggleMenu={toggleMenu} />

          <AuthButtons isLoggedIn={isLoggedIn} toggleMenu={toggleMenu} />
        </div>
      </aside>
    </>
  );
}
