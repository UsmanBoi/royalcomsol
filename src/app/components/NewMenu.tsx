import React, { useState } from "react";

export const NewMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div
      className={`via-current/30 fixed z-40 bg-gradient-to-t tracking-wide bg-blend-difference backdrop-blur-[6px] transition-all duration-500 ease-in-out md:left-0 md:top-0 md:h-16 max-md:backdrop-blur-[10px] ${
        isMenuOpen
          ? "h-full w-full translate-y-0 from-myblack-100/0 via-myblack-100/0 to-myblack-100/0 md:rounded-b-lg lg:my-0 max-md:left-0 max-md:top-0 dark:from-myblack-100/15 dark:to-myblack-100/35 dark:max-md:from-transparent/80"
          : "h-full w-full from-transparent/20 to-transparent/20 md:-translate-y-full max-md:left-0 max-md:top-0 max-md:-translate-x-full dark:from-transparent/10 dark:to-black/20"
        // ? 'h-full w-full translate-y-0 from-transparent/40 via-transparent/60 to-transparent/80 dark:from-transparent/15 dark:to-transparent/35 md:rounded-b-lg lg:my-0 max-md:left-0 max-md:top-0 dark:max-md:from-transparent/80'
        // : 'h-full w-full from-transparent/20 to-transparent/20 dark:from-transparent/10 dark:to-black/20 md:-translate-y-full max-md:left-0 max-md:top-0 max-md:-translate-x-full'
      } `}
    >
      <div className="grid h-full w-full grid-cols-[1fr] items-center px-4 text-white md:px-2 max-lg:text-lg">
        {/* Close Button for small screens */}
        {isMenuOpen && (
          <button
            type="button"
            onClick={toggleMenu}
            className="absolute right-[6%] top-[4%] md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              className="fill-none stroke-current"
            >
              <line
                x1="6"
                y1="6"
                x2="18"
                y2="18"
                className="stroke-current stroke-2"
              />
              <line
                x1="6"
                y1="18"
                x2="18"
                y2="6"
                className="stroke-current stroke-2"
              />
            </svg>
          </button>
        )}

        <div className="flex items-center justify-center gap-2 px-4 md:justify-between max-md:flex-col max-md:gap-1">
          {/* <Headerlinks toggleMenu={() => setIsMenuOpen(false)} /> */}
        </div>
      </div>
    </div>
  );
};
