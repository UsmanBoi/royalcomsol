import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { GoArrowRight } from "react-icons/go";

/**
 * Props for `CtaSection`.
 */
export type CtaSectionProps = SliceComponentProps<Content.CtaSectionSlice>;

/**
 * Component for "CtaSection" Slices.
 */
const CtaSection: FC<CtaSectionProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`relative flex h-auto min-w-fit items-center py-10 text-mywhite-50 dark:text-myblack-150 lg:py-20`}
    >
      <div className={`flex flex-col gap-y-8 py-10 lg:py-20`}>
        <h1
          className={`h-fit w-96 text-3xl sm:w-[38rem] lg:text-4xl 2xl:text-5xl 3xl:text-6xl max-sm:pr-6`}
          style={{ wordSpacing: "0.1em" }}
        >
          {slice.primary.cta_title}
        </h1>

        <div className="flex min-w-96 items-center text-2xl transition-all duration-300 ease-in-out hover:scale-105 xl:text-3xl">
          <button type="button" className={`w-fit`}>
            <PrismicNextLink field={slice.primary.cta_link}>
              {/* Button text */}
              <span className="text-lg">Get Started</span>
            </PrismicNextLink>
          </button>
          <GoArrowRight
            className={`w-12 transition-all duration-300 ease-in-out`}
          />
        </div>
      </div>
      <div className="absolute left-0 top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 z-0 bg-gradient-to-l from-transparent/30 via-transparent/50 to-transparent/30 bg-blend-screen"></div>

        <PrismicNextImage
          field={slice.primary.cta_image}
          alt=""
          className="h-full w-full object-cover object-top"
        />
      </div>
    </Bounded>
  );
};

export default CtaSection;
