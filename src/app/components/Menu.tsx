import React from "react";
import { createClient } from "@/prismicio";
import NewMenu from "./NewMenu";
import { PrismicNextLink } from "@prismicio/next";

export default async function Menu({ extraStyle, pageName }) {
  const client = createClient();
  const menu = await client.getSingle("menu");
  return pageName === "header" ? (
    <menu
      className={`${extraStyle} flex h-24 items-center justify-end px-4 md:sticky md:top-4 lg:justify-between lg:pl-10`}
    >
      <NewMenu menuLinks={menu.data.menu_links} />
    </menu>
  ) : pageName === "footer" ? (
    <menu className={`${extraStyle}`}>
      {menu.data.menu_links?.map((item, index) => (
        <button
          className={`-ml-1 w-fit p-2 opacity-70 transition-all duration-300 ease-in-out`}
          key={index}
          // style={
          //   open
          //     ? { transitionDelay: `${600 + index * 100}ms` }
          //     : { transitionDelay: `${200 + index * 100}ms` }
          // }
        >
          <PrismicNextLink field={item.link_url} className="">
            <span className="text-sm text-mywhite-50 underline lg:text-base">
              {item.link_title}
            </span>
          </PrismicNextLink>
        </button>
      ))}
    </menu>
  ) : (
    ""
  );
}
