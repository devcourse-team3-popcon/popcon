import Logo from "./Logo";
import MainNav from "./MainNav";
import SideMenu from "./SideMenu";
import UserSection from "./UserSection";

export default function Header() {
  return (
    <>
      <div className="md:hidden">
        <div>
          <Logo />
          <SideMenu isLoggedIn={false} />
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
