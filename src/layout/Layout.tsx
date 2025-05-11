import { Outlet } from "react-router";
import Header from "./header/Header";

export default function Layout() {
  return (
    <div className="py-4 px-6 2xl:px-26">
      <Header />
      <div className="flex justify-center items-center h-auto">
        <Outlet />
      </div>
    </div>
  );
}
