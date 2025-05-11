import { NavLink } from "react-router";

export default function MainNav() {
  return (
    <nav className="flex gap-12 items-center h-[88px]">
      <NavLink
        to="/upcoming-concerts"
        className={({ isActive }) =>
          `text-[14px] 2xl:text-[16px] ${
            isActive
              ? "text-[color:var(--primary-300)]"
              : "text-[color:var(--white)]"
          }`
        }
      >
        <span className="hidden xl:inline">UPCOMING CONCERTS</span>
        <span className="xl:hidden">CONCERTS</span>
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-[14px] 2xl:text-[16px] ${
            isActive
              ? "text-[color:var(--primary-300)]"
              : "text-[color:var(--white)]"
          }`
        }
      >
        PLAYLIST
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-[14px] 2xl:text-[16px] ${
            isActive
              ? "text-[color:var(--primary-300)]"
              : "text-[color:var(--white)]"
          }`
        }
      >
        COMMUNITY
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-[14px] 2xl:text-[16px] ${
            isActive
              ? "text-[color:var(--primary-300)]"
              : "text-[color:var(--white)]"
          }`
        }
      >
        ABOUT US
      </NavLink>
    </nav>
  );
}
