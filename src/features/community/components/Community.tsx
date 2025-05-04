import { useEffect } from "react";
import { NavLink, Outlet } from "react-router";
import { twMerge } from "tailwind-merge";
import { axiosInstance } from "../../../apis/axiosInstance";
import { useAuthStore } from "../../../stores/authStore";

export default function Community() {
  const login = useAuthStore((state) => state.login);
  useEffect(() => {
    const loginHandler = async () => {
      const { data } = await axiosInstance.post("/login", {
        email: "test12",
        password: "test1234",
      });
      login(data.accessToken);
    };
    loginHandler();
  });

  return (
    <div className="w-[1080px]">
      <nav className="w-full grid grid-cols-3 mb-12 mt-6 text-center  py-4">
        <NavLink
          to="bops-community"
          className={({ isActive }) =>
            twMerge(
              "border-b py-4 text-[color:var(--white)]",
              isActive &&
                "text-[color:var(--primary-300)] border-[color:var(--primary-300)]"
            )
          }
        >
          숨어서 듣는 명곡
        </NavLink>
        <NavLink
          to="concert-community"
          className={({ isActive }) =>
            twMerge(
              "border-b py-4 text-[color:var(--white)]",
              isActive &&
                "text-[color:var(--primary-300)] border-[color:var(--primary-300)]"
            )
          }
        >
          콘서트 게시판
        </NavLink>
        <NavLink
          to="open-community"
          className={({ isActive }) =>
            twMerge(
              "border-b py-4 text-[color:var(--white)]",
              isActive &&
                "text-[color:var(--primary-300)] border-[color:var(--primary-300)]"
            )
          }
        >
          자유 게시판
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}
