import React from "react";
import { createClient } from "@/prismicio";
import NewMenu from "./NewMenu";
import { PrismicNextLink } from "@prismicio/next";
import { Content } from "@prismicio/client";

type MenuDocument = Content.MenuDocument;
type MenuLink = MenuDocument["data"]["menu_links"][number];

type Props = {
  extraStyle?: string;
  pageName: "header" | "footer";
};

export default async function Menu({ extraStyle = "", pageName }: Props) {
  const client = createClient();
  const menu = await client.getSingle("menu");
  const menuLinks: MenuLink[] = menu.data.menu_links;

  if (pageName === "header") {
    return (
      <menu
        className={`${extraStyle} flex h-24 items-center justify-end px-4 md:sticky md:top-4 lg:justify-between lg:pl-10`}
      >
        <NewMenu menuLinks={menuLinks} />
      </menu>
    );
  }

  if (pageName === "footer") {
    return (
      <nav className={`${extraStyle}`}>
        {menuLinks.map((item, index) => (
          <button
            className={`-ml-1 w-fit p-2 opacity-70 transition-all duration-300 ease-in-out`}
            key={index}
          >
            <PrismicNextLink field={item.link_url}>
              <span className="text-sm text-mywhite-50 underline lg:text-base">
                {item.link_title}
              </span>
            </PrismicNextLink>
          </button>
        ))}
      </nav>
    );
  }

  return null;
}
