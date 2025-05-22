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
      className={`relative flex h-auto min-w-fit items-center bg-myblack-150 py-10 text-mywhite-50 lg:py-20 2xl:justify-center`}
    >
      <div
        className={`z-10 flex w-screen max-w-full flex-col gap-y-8 py-10 lg:py-20 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl`}
      >
        <h1
          className={`fade-up h-fit w-96 text-3xl text-mywhite-50 sm:w-[38rem] lg:text-4xl 2xl:text-5xl 3xl:text-6xl max-sm:pr-6`}
          style={{ wordSpacing: "0.1em" }}
        >
          {slice.primary.cta_title}
        </h1>

        <div className="text-2xl transition-all duration-300 ease-in-out xl:text-3xl">
          <PrismicNextLink field={slice.primary.cta_link}>
            <button
              type="button"
              className={`flex w-fit min-w-96 items-center`}
            >
              {/* Button text */}
              <span className="text-lg">Get Started</span>
              <GoArrowRight
                className={`w-12 transition-all duration-300 ease-in-out`}
              />
            </button>
          </PrismicNextLink>
        </div>
      </div>
      <div className="slide-in-down absolute left-0 top-0 h-full w-full">
        <div className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent/60 via-transparent/50 to-transparent/50 bg-blend-multiply" />
        <PrismicNextImage
          field={slice.primary.cta_image}
          alt=""
          className="-z-10 h-full w-full object-cover object-top"
        />
      </div>
    </Bounded>
  );
};

export default CtaSection;
