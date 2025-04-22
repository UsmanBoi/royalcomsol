"use client";

import { useTheme } from "../../context/themecontext";

const ThemeToggle = ({ extraStyle }: { extraStyle?: string }) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      title="switch theme"
      className={`${extraStyle} group z-50 w-fit min-w-[4rem] rounded-full border-2 border-blue-200 bg-myblack-50 py-1.5 text-xs font-medium tracking-wider text-white shadow-inner transition-all duration-300 ease-in-out hover:bg-myblack-100 hover:font-semibold hover:tracking-tight hover:shadow-current dark:bg-gray-200 dark:text-black`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <span className="w-fit">{theme === "dark" ? "LIGHT" : "DARK"}</span>
    </button>
  );
};

export default ThemeToggle;
