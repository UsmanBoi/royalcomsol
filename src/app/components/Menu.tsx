import React from "react";
import { createClient } from "@/prismicio";
import { PrismicLink } from "@prismicio/react";
// import { PrismicLink } from "@prismicio/react";

export default async function Menu({ extraStyle }) {
  const client = createClient();
  const menu = await client.getSingle("menu");
  return (
    <menu
      className={`${extraStyle} flex h-24 items-center justify-center px-10 md:sticky md:top-4`}
    >
      <div className="flex gap-4">
        {menu.data.menu_links?.map((item, index) => (
          <button className={`h-10 w-fit rounded-full bg-red-500`} key={index}>
            <PrismicLink field={item.link_url}>
              <span className="px-5">{item.link_title}</span>
            </PrismicLink>
          </button>
        ))}
      </div>
      {/* <NewMenu menuLinks={menu.data.menu_links} /> */}
    </menu>
  );
}
