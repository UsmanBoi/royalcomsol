import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { RichText } from "@/app/components/ui/RichText";
import Bounded from "@/app/components/Bounded";

/**
 * Props for `About`.
 */
export type AboutProps = SliceComponentProps<Content.AboutSlice>;

/**
 * Component for "About" Slices.
 */

const About: FC<AboutProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex h-auto w-full items-center bg-myblack-150 py-8 text-mywhite-50 xs:justify-center sm:py-16 2xl:min-h-[50rem] 2xl:py-[4.5rem]"
    >
      <div className="relative grid h-full w-full gap-x-32 gap-y-10 lg:grid-cols-[1fr_1fr] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 2xl:gap-x-44 3xl:max-w-screen-2xl max-xs:max-w-[22em]">
        <div className="flex h-full w-full flex-col justify-between gap-7">
          <h1
            className={`fade-up w-fit text-start text-3xl font-light text-mywhite-50/50 lg:text-4xl 2xl:text-5xl`}
            style={{ wordSpacing: "0.1em" }}
          >
            {slice.primary.slice_title}
          </h1>
          <div className="relative flex h-[25rem] w-full items-end sm:h-full max-lg:max-w-96">
            <PrismicNextImage
              field={slice.primary.about_image}
              alt=""
              className="expand-width h-[24em] rounded object-cover object-center xs:max-w-[24em] lg:h-full lg:max-w-full max-xs:w-fit"
            />
          </div>
        </div>
        {/* DIVIDER */}

        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-500 max-lg:hidden"></div>

        <div className="flex h-full w-full flex-col gap-6 text-sm font-light xs:max-w-md xs:pr-16 sm:place-self-end sm:pr-0 md:text-base lg:max-w-3xl lg:place-self-start max-sm:py-6">
          <h2 className="slide-in-left w-fit text-4xl font-light tracking-[-0.025em] text-mywhite-50 xl:text-6xl 2xl:text-7xl">
            {slice.primary.content_title}
          </h2>
          <div className="flex flex-col gap-4">
            <RichText field={slice.primary.about_content} />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default About;
