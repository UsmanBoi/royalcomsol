import React from "react";
import { createClient } from "@/prismicio";
import Menu from "./Menu";
import { paddingClass } from "../constants";
import { PrismicNextLink } from "@prismicio/next";

export default async function Header() {
  const client = createClient();
  const header = await client.getSingle("header");
  return (
    <header
      className={`${paddingClass} fixed z-50 grid h-[4.5rem] min-w-full grid-cols-[1fr_1fr] items-center justify-between border-b-2 border-gray-200/80 bg-mywhite-100 bg-opacity-90 backdrop-blur-[5px] lg:grid-cols-[2fr_3fr]`}
    >
      <PrismicNextLink
        field={header.data.home_link}
        aria-label="Home Button"
        className="text-lg font-semibold text-blue-500"
      >
        <span>{header.data.home}</span>
      </PrismicNextLink>
      <Menu extraClass="" pageName="header" />
    </header>
  );
}
