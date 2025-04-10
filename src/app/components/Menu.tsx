import React from "react";
import { createClient } from "@/prismicio";
import NewMenu from "./NewMenu";
// import { PrismicLink } from "@prismicio/react";

export default async function Menu({ extraStyle }) {
  const client = createClient();
  const menu = await client.getSingle("menu");
  return (
    <menu
      className={`${extraStyle} flex h-24 items-center justify-end px-4 md:sticky md:top-4 lg:justify-between lg:pl-10`}
    >
      <NewMenu menuLinks={menu.data.menu_links} />
    </menu>
  );
}
