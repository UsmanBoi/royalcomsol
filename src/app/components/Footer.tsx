import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Menu from "./Menu";
// import { PrismicLink } from "@prismicio/react";

export default async function Footer({ extraStyle }) {
  const client = createClient();
  const footer = await client.getSingle("footer");
  return (
    <footer
      className={`${extraStyle} grid h-full grid-cols-[1fr_1fr] items-center justify-end gap-x-6 px-4 py-10 sm:grid-cols-[2fr_2fr_3fr] md:sticky md:top-4 lg:justify-between lg:pl-10`}
    >
      <div className="flex flex-col gap-4">
        <PrismicNextLink field={footer.data.home_link}>
          <h1 className="text-4xl font-semibold">{footer.data.home_title}</h1>
        </PrismicNextLink>
        <div className="flex flex-col gap-1 text-xs font-light sm:text-sm 2xl:text-base">
          <span>{footer.data.phone_number}</span>
          <span className="sm:w-60">{footer.data.address}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 max-sm:hidden">
        <h2 className="text-2xl font-semibold uppercase">Company</h2>
        <Menu extraStyle="flex flex-col " pageName="footer" />
      </div>
      <div className="flex flex-col gap-2 max-sm:hidden">
        <h2 className="text-2xl font-semibold uppercase">Services</h2>
        <Menu extraStyle="flex flex-col " pageName="footer" />
      </div>

      {/* <div></div> */}
    </footer>
  );
}
