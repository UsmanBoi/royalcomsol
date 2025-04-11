import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

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
      className="my-10 flex h-[42rem] flex-col items-center gap-4 lg:h-[50rem]"
    >
      <h1 className="text-center text-7xl font-bold text-red-600">About Us</h1>
      <div className="grid h-full w-full max-w-6xl grid-cols-[1fr_1fr] place-items-center justify-items-center py-14">
        <div className="relative order-2 h-[30rem] w-[12rem] md:w-[22rem] lg:h-[40rem] lg:w-[30rem]">
          <PrismicNextImage
            field={slice.primary.about_image}
            alt=""
            className="h-[26rem] rounded-2xl object-cover object-center lg:h-[40rem]"
          />
        </div>
        <div className="order-1 flex h-full max-w-xs flex-col justify-center gap-2 pr-6 text-xs sm:text-sm md:text-base">
          <PrismicRichText field={slice.primary.about_content} />
        </div>
      </div>
    </Bounded>
  );
};

export default About;
