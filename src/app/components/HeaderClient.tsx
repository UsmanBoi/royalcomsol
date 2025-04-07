"use client";
import React, { useState } from "react";
import NewMenu from "./NewMenu";

export default function HeaderClient() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        title="Menu"
        type="button"
        onClick={() => setOpen(!open)}
        className={`group h-10 w-10 cursor-pointer outline-none transition-all duration-300 max-sm:h-6 max-sm:w-6`}
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
              className="stroke-black stroke-1"
            />
            <line
              x1="4"
              y1="12"
              x2="20"
              y2="12"
              className="stroke-black stroke-1"
            />
            <line
              x1="4"
              y1="18"
              x2="20"
              y2="18"
              className="stroke-black stroke-1"
            />
          </svg>
        </div>
      </button>

      <NewMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
