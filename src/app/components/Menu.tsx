import React from "react";
import { createClient } from "@/prismicio";
import { PrismicLink } from "@prismicio/react";
// import { PrismicLink } from "@prismicio/react";

export default async function Menu() {
  const client = createClient();
  const menu = await client.getSingle("menu");
  return (
    <menu className="flex h-24 items-center justify-center px-10 md:sticky md:top-4">
      <div className="flex gap-4">
        {menu.data.menu_links.map((item, index) => (
          <button className={`h-10 w-fit rounded-full bg-red-500`} key={index}>
            <PrismicLink field={item.link_url}>
              <span className="px-5">{item.link_title}</span>
            </PrismicLink>
          </button>
        ))}
      </div>

      {/* Menu Button for all devices */}

      {/* main header button */}
      <button
        title="Menu"
        type="button"
        // onClick={toggleMenu}
        className={`group absolute right-[1%] h-10 w-10 cursor-pointer outline-none transition-all duration-300 max-sm:h-6 max-sm:w-6`}
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
      </button>
    </menu>
  );
}
