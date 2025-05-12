import { useNavigate } from "react-router";

export default function AuthButtons({
  isLoggedIn,
  toggleMenu,
}: AuthButtonsProps) {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    toggleMenu();
  };

  return (
    <div className="mt-auto flex justify-center">
      {isLoggedIn ? (
        <button className="text-[color:var(--white-80)] text-[12px] font-medium mb-16 cursor-pointer hover:text-[color:var(--primary-300)]">
          Log Out
        </button>
      ) : (
        <div className="flex gap-12 text-[color:var(--white-80)] text-[12px] font-medium mb-16 hover:text-[color:var(--primary-300)]">
          <button
            className="cursor-pointer"
            onClick={() => handleNavigation("/login")}
          >
            Login
          </button>
          <button
            className="cursor-pointer"
            onClick={() => handleNavigation("/signup")}
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
}
