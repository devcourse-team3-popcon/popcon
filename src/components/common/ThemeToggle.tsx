import { useState } from "react";
import { applyTheme } from "../../utils/theme";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const toggleTheme = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDark((prev) => !prev);
    const current = document.documentElement.classList.contains("light")
      ? "light"
      : "dark";

    applyTheme(current === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={`w-10 h-[18px] flex items-center rounded-full px-[2px] transition-colors duration-300 ${
        isDark ? "bg-[color:var(--bg-color)]" : "bg-[color:var(--bg-color)] ]"
      }`}
    >
      <div
        className={`w-[14px] h-[14px] rounded-full shadow-sm transform transition-transform duration-300 ${
          isDark
            ? "translate-x-5 bg-[color:var(--white)]"
            : "translate-x-0 bg-[color:var(--white)]"
        }`}
      />
    </button>
  );
};

export default ThemeToggle;
