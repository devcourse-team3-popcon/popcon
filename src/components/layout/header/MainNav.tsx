import { NavLink } from "react-router";

export default function MainNav() {
  return (
    <nav className="flex gap-12 items-center h-[88px]">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-[18px] ${isActive ? "text-[71EBBE]" : "text-white"}`
        }
      >
        UPCOMING CONCERTS
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-[18px] ${isActive ? "text-[71EBBE]" : "text-white"}`
        }
      >
        PLAYLIST
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-[18px] ${isActive ? "text-[71EBBE]" : "text-white"}`
        }
      >
        COMMUNITY
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-[18px] ${isActive ? "text-[71EBBE]" : "text-white"}`
        }
      >
        ABOUT US
      </NavLink>
    </nav>
  );
}
