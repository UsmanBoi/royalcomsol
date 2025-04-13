import React from "react";
import { createClient } from "@/prismicio";
import { PrismicLink } from "@prismicio/react";
import Menu from "./Menu";

export default async function Header() {
  const client = createClient();
  const header = await client.getSingle("header");
  return (
    <header className="z-50 grid h-24 grid-cols-[1fr_1fr] items-center justify-between border-b-2 border-gray-100 bg-neutral-50 px-3 sm:px-4 md:sticky lg:grid-cols-[2fr_3fr] lg:px-12 xl:px-16 2xl:px-20">
      <Menu extraStyle="order-2" pageName="header" />
      <PrismicLink
        field={header.data.homelink}
        aria-label="Home Button"
        className="order-1 text-lg font-semibold text-myblack-50"
      >
        <span>{header.data.home}</span>
      </PrismicLink>
    </header>
  );
}
