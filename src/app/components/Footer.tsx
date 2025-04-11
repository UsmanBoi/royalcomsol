import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
// import { PrismicLink } from "@prismicio/react";

export default async function Footer({ extraStyle }) {
  const client = createClient();
  const footer = await client.getSingle("footer");
  return (
    <footer
      className={`${extraStyle} grid h-40 grid-cols-[1fr_2fr_1fr] items-center justify-end px-4 md:sticky md:top-4 lg:justify-between lg:pl-10`}
    >
      <div className="flex flex-col gap-4">
        <PrismicNextLink field={footer.data.home_link}>
          <h1 className="text-4xl font-semibold">{footer.data.home_title}</h1>
        </PrismicNextLink>
        <div className="font-light">
          <span>{footer.data.phone_number}</span>
          <span>{footer.data.address}</span>
        </div>
      </div>
      <div></div>
      <div></div>
    </footer>
  );
}
