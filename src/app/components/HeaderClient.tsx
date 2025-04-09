"use client";
import React, { useState, useEffect } from "react";
import { getCurrentScreenSize } from "../constants.js";
import NewMenu from "./NewMenu";

export default function HeaderClient() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(getCurrentScreenSize());
    };

    // Run on mount
    handleResize();

    // Run on resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* <Menu extraStyle="" open={open} toggleMenu={toggleMenu} /> */}

      <button
        title="Menu"
        type="button"
        onClick={toggleMenu}
        className={`group z-50 h-10 w-10 cursor-pointer outline-none transition-all duration-300 max-sm:h-6 max-sm:w-6`}
      >
        <div className="group flex scale-x-125 items-center justify-center transition-all duration-300 ease-in-out hover:scale-125">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="32"
            height="32"
          >
            <line
              x1="4"
              y1="6"
              x2="20"
              y2="6"
              className={`stroke-red-500 stroke-1 transition-all duration-200 ease-linear ${open ? "rotate-12" : ""}`}
            />
            <line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
              className={`stroke-red-500 stroke-1 transition-all duration-200 ease-linear ${open ? "rotate-12" : ""}`}
            />
            <line
              x1="4"
              y1="18"
              x2="20"
              y2="18"
              className={`stroke-red-500 stroke-1 transition-all duration-200 ease-linear ${open ? "rotate-12" : ""}`}
            />
          </svg>
        </div>
      </button>

      <NewMenu open={open} onClose={toggleMenu} />
    </>
  );
}
