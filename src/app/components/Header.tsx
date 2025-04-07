import React from "react";
import { createClient } from "@/prismicio";
import { PrismicLink } from "@prismicio/react";
import Menu from "./Menu";

export default async function Header() {
  const client = createClient();
  const header = await client.getSingle("header");
  return (
    <header className="flex h-24 items-center justify-between bg-neutral-50 px-3 sm:px-4 md:sticky md:top-4 lg:px-12 xl:px-16 2xl:px-20">
      <PrismicLink
        field={header.data.homelink}
        aria-label="Home Button"
        className="text-lg font-semibold text-myblack-50"
      >
        <span>{header.data.home}aa</span>
      </PrismicLink>
      <Menu extraStyle="flex-shrink-0" />

      {/* main header button */}
      {/* <button
        title="Menu"
        type="button"
        // onClick={toggleMenu}
        className={`group h-10 w-10 cursor-pointer outline-none transition-all duration-300 max-sm:h-6 max-sm:w-6`}
      >
        <div
          className={`group flex scale-x-125 items-center justify-center transition-all duration-300 ease-in-out hover:scale-125`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="transition-all duration-500 ease-in-out"
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
      </button> */}
    </header>
  );
}
