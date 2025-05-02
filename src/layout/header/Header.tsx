import Logo from "./Logo";
import MainNav from "./MainNav";
import UserSection from "./UserSection";

export default function Header() {
  return (
    <div className="flex justify-between px-4">
      <Logo />
      <MainNav />
      <UserSection />
    </div>
  );
}
