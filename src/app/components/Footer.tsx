import React from "react";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { paddingClass } from "../constants";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

// import { PrismicLink } from "@prismicio/react";

export default async function Footer({ extraClass }: { extraClass?: string }) {
  const client = createClient();
  const footer = await client.getSingle("footer");
  return (
    <footer
      className={`${extraClass} ${paddingClass} flex min-w-fit flex-col items-center px-4 pb-20 pt-8 font-light sm:py-8 2xl:justify-center`}
    >
      <div className="grid min-h-80 w-full max-w-full gap-x-10 gap-y-10 md:grid-cols-[1fr_2fr] md:gap-x-20 lg:h-52 lg:grid-cols-[2fr_3fr] lg:justify-between xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 2xl:py-10 3xl:max-w-screen-2xl">
        <div className="flex flex-col gap-5 place-self-start">
          <PrismicNextLink field={footer.data.home_link}>
            <h1 className="fade-up text-3xl font-semibold -tracking-[0.05em] text-myblue-50 sm:text-4xl">
              {footer.data.home_title}
            </h1>
          </PrismicNextLink>
          <span className="fade-up max-w-80 text-sm sm:max-w-96 xl:text-base">
            We provide comprehensive front and back office solutions tailored
            for the healthcare industry across the United States. Our team
            combines precision with efficiency to deliver exceptional results.
            We&apos;re here to support your growth and streamline your practice
            operations for long-term success.
          </span>
        </div>
        <div className="flex w-full max-w-4xl lg:justify-between lg:gap-x-8 max-xs:flex-col max-xs:gap-y-10 max-lg:gap-x-6">
          <div className="flex max-w-full flex-1 flex-col gap-5 lg:max-w-60">
            <SliceZone slices={footer.data.slices} components={components} />
          </div>
          <div className="flex max-w-56 flex-1 flex-col gap-y-5 lg:max-w-72 xl:min-w-60 max-md:hidden">
            <h2 className="fade-up text-xl font-medium md:text-2xl 2xl:text-3xl">
              Contact
            </h2>
            <span className="fade-up text-sm delay-100 xl:text-base">
              {footer.data.email_address}
            </span>
            <span className="fade-up text-sm delay-200 xl:text-base">
              {footer.data.address}
            </span>
          </div>
        </div>
        <div className="flex max-w-56 flex-1 flex-col gap-y-5 md:hidden lg:max-w-72">
          <h2 className="text-xl font-medium opacity-50 md:text-2xl 2xl:text-3xl">
            Contact
          </h2>
          <div className="flex flex-col gap-4">
            <span className="fade-up text-sm delay-100 xl:text-base">
              {footer.data.email_address}
            </span>
            {/* <span className="text-sm xl:text-base">+92 313 8764508</span> */}
            <span className="fade-up text-sm delay-200 xl:text-base">
              Office-207, 2nd Floor, Al-Sehat Centre, Shahra-e-Faisal, Karachi,
              Pakistan.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
