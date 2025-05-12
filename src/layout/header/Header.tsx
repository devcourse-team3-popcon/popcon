import { useAuthStore } from "../../stores/authStore";
import Logo from "./Logo";
import MainNav from "./MainNav";
import SideMenu from "./SideMenu/SideMenu";
import UserSection from "./UserSection";

export default function Header() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  return (
    <>
      <div className="md:hidden">
        <div>
          <Logo />
          <SideMenu isLoggedIn={isLoggedIn} />
        </div>
      </div>

      <div className="hidden md:block">
        <div className="flex justify-between px-4">
          <Logo />
          <MainNav />
          <UserSection />
        </div>
      </div>
    </>
  );
}
