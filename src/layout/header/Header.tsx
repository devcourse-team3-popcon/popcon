import Logo from "./Logo";
import MainNav from "./MainNav";
import UserSection from "./UserSection";

export default function Header() {
  return (
    <>
      <div>
        <div>
          <Logo />
        </div>
      </div>

      <div className="hidden sm-block">
        <div className="flex justify-between px-4">
          <Logo />
          <MainNav />
          <UserSection />
        </div>
      </div>
    </>
  );
}
