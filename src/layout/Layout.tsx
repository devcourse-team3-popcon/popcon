import { Outlet } from "react-router";
import Header from "./header/Header";
import { ToastContainer } from "react-toastify";

export default function Layout() {
  return (
    <div className="md:py-4 md:px-6 2xl:px-26">
      <Header />
      <div className="py-25 md:py-[0] flex justify-center items-center h-auto">
        <Outlet />
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        pauseOnHover
        draggable
      />
    </div>
  );
}
