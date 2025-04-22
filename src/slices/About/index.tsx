import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { RichText } from "@/app/components/ui/RichText";

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
      className="flex min-h-[37rem] max-w-full flex-col items-center justify-center bg-myblack-150 py-8 text-mywhite-50 sm:py-16 2xl:py-24"
    >
      <div className="relative grid h-full w-full place-items-center justify-items-center gap-x-32 gap-y-10 lg:grid-cols-[1fr_1fr] 2xl:max-w-screen-xl 2xl:gap-x-40 3xl:max-w-screen-2xl">
        <div className="flex h-full w-full flex-col gap-8">
          <h1
            className={`w-fit text-start text-3xl font-extralight opacity-40 lg:text-4xl 2xl:text-5xl`}
            style={{ wordSpacing: "0.1em" }}
          >
            About Us
          </h1>
          <div className="relative h-[25rem] w-full sm:h-full max-lg:max-w-96">
            <PrismicNextImage
              field={slice.primary.about_image}
              alt=""
              className="h-[25rem] rounded object-cover object-center sm:h-[28rem]"
            />
          </div>
        </div>
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-500 max-lg:hidden"></div>

        <div className="flex h-full max-w-lg flex-col gap-3 pl-4 text-sm font-light sm:place-self-end md:text-base lg:place-self-start max-sm:py-6">
          <RichText field={slice.primary.about_content} />
        </div>
      </div>
    </Bounded>
  );
};

export default About;
