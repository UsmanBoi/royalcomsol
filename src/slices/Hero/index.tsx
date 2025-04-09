import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/app/components/Bounded";
// import { PrismicNextImage } from "@prismicio/next";

// type HeroImgProps = {
//   image: ImageField;
//   className?: string;
// };
/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slicesa.
 */
const Hero: FC<HeroProps> = ({ slice }) => (
  <Bounded
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    className="relative flex h-screen w-screen flex-col items-center"
  >
    <div className="absolute top-0 -z-10 h-fit">
      <PrismicNextImage
        priority
        field={slice.primary.hero_image}
        className="h-full w-screen object-cover object-center"
      />
    </div>

    <div className="absolute inset-0 z-0 bg-black/25"></div>
    {/* <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-transparent/10 to-mywhite-200/50"></div> */}

    {/* Content */}

    <div
      className={`absolute left-10 top-1/2 z-20 mr-20 flex h-auto w-fit max-w-[30rem] -translate-y-1/2 transform flex-col justify-center gap-2 rounded-lg bg-gradient-to-br from-transparent/15 via-transparent/25 to-black/30 p-6 shadow-lg backdrop-blur-[6px] sm:gap-4 lg:left-16 lg:mr-0 lg:max-w-[36rem] xl:max-w-[45rem] 2xl:max-w-[52rem]`}
    >
      <div className="flex h-full flex-col justify-center gap-10 self-start px-2 pb-[2.5%]">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-2xl font-semibold leading-[1.2] lg:text-3xl xl:text-5xl 2xl:text-[66px]">
            {slice.primary.heading}
          </h1>
          <h2 className="text-xl font-extralight italic xl:text-2xl">
            {slice.primary.tagline}
          </h2>
        </div>
        <div className="flex items-center gap-6">
          {slice.primary.cta_buttons.map((item, index) => (
            <button
              className={`${index !== 0 ? "bg-blue-400" : "bg-red-400"} h-12 w-[8em] rounded`}
              key={index}
            >
              <span className="px-1">{item.cta.text}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  </Bounded>
);

export default Hero;
