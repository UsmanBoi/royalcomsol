import React from "react";
import { createClient } from "@/prismicio";
import { PrismicLink } from "@prismicio/react";
import Menu from "./Menu";
import ThemeToggle from "./ui/ThemeToggle";
import { paddingClass } from "../constants";

export default async function Header() {
  const client = createClient();
  const header = await client.getSingle("header");
  return (
    <header
      className={`${paddingClass} fixed z-50 grid h-24 min-w-full grid-cols-[1fr_1fr] items-center justify-between border-b-2 border-gray-200/80 bg-mywhite-100 bg-opacity-90 backdrop-blur-[5px] dark:border-myblack-100 dark:bg-myblack-200 lg:grid-cols-[2fr_3fr]`}
    >
      <PrismicLink
        field={header.data.home_link}
        aria-label="Home Button"
        className="text-lg font-semibold text-blue-500 dark:text-mywhite-50"
      >
        <span>{header.data.home}</span>
      </PrismicLink>
      <Menu extraStyle="" pageName="header" />
    </header>
  );
}
