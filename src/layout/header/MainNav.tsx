import {NavLink} from "react-router";

export default function MainNav() {
  return (
    <nav className='flex gap-12 items-center h-[88px]'>
      <NavLink
        to='/upcoming-concerts'
        className={({isActive}) =>
          `text-[18px] ${
            isActive ? "text-[color:var(--primary-300)]" : "text-[color:var(--white)]"
          }`
        }
      >
        UPCOMING CONCERTS
      </NavLink>
      <NavLink
        to='/'
        className={({isActive}) =>
          `text-[18px] ${
            isActive ? "text-[color:var(--primary-300)]" : "text-[color:var(--white)]"
          }`
        }
      >
        PLAYLIST
      </NavLink>
      <NavLink
        to='/'
        className={({isActive}) =>
          `text-[18px] ${
            isActive ? "text-[color:var(--primary-300)]" : "text-[color:var(--white)]"
          }`
        }
      >
        COMMUNITY
      </NavLink>
      <NavLink
        to='/'
        className={({isActive}) =>
          `text-[18px] ${
            isActive ? "text-[color:var(--primary-300)]" : "text-[color:var(--white)]"
          }`
        }
      >
        ABOUT US
      </NavLink>
    </nav>
  );
}
