import { Outlet } from "react-router";
import Header from "./header/Header";

export default function Layout() {
  return (
    <div className="py-4 px-[104px]">
      <Header />
      <Outlet />
    </div>
  );
}
