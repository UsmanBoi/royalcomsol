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
        <span>{header.data.home}</span>
      </PrismicLink>
      <Menu />
    </header>
  );
}
