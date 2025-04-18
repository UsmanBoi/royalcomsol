import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { secHeading } from "@/app/constants";

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
      className="flex h-full min-h-[60rem] flex-col items-center gap-10 py-8 sm:py-16 lg:h-[50rem]"
    >
      <h1 className={`${secHeading}`} style={{ wordSpacing: "0.125em" }}>
        About Us
      </h1>
      <div className="grid h-full w-full max-w-6xl place-items-center justify-items-center gap-x-2 gap-y-4 lg:grid-cols-[1fr_1fr]">
        <div className="relative order-2 h-[30rem] w-full lg:h-[40rem] lg:w-[30rem]">
          <PrismicNextImage
            field={slice.primary.about_image}
            alt=""
            className="h-[26rem] rounded-2xl object-cover object-center lg:h-[40rem]"
          />
        </div>
        <div className="order-1 flex h-full max-w-sm flex-col justify-center gap-2 self-start text-sm md:text-base lg:pr-6">
          <PrismicRichText field={slice.primary.about_content} />
        </div>
      </div>
    </Bounded>
  );
};

export default About;
