import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
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
    className="relative z-0 flex h-[40rem] w-screen flex-col items-center text-myblack-200 lg:h-[50rem]"
  >
    {/* Content */}
    <div
      // className={`absolute left-2 top-1/3 -z-10 mr-20 flex h-auto w-fit max-w-[30rem] -translate-y-1/2 flex-col justify-center gap-2 rounded-lg bg-gradient-to-br from-red-100/50 via-red-300/10 to-red-300/10 p-6 shadow-lg backdrop-blur-[6px] sm:gap-4 lg:left-16 lg:mr-0 lg:max-w-[36rem] xl:max-w-[45rem] 2xl:max-w-[52rem]`}
      className={`absolute left-2 top-1/3 z-10 mr-20 flex h-auto w-fit max-w-[30rem] -translate-y-1/2 flex-col justify-center gap-2 rounded-lg p-6 shadow-lg backdrop-blur-[4px] sm:gap-4 lg:left-16 lg:mr-0 lg:max-w-[36rem] xl:max-w-[45rem] 2xl:max-w-[52rem]`}
    >
      <div className="flex h-full flex-col justify-center gap-10 self-start px-2 pb-[2.5%]">
        <div className="flex flex-col gap-y-4">
          <h1 className="text-[27px] font-semibold leading-[1.2] lg:text-3xl xl:text-5xl 2xl:text-[66px]">
            {slice.primary.heading}
          </h1>
          <h2 className="w-40 italic text-red-400 sm:w-full xl:text-2xl">
            {slice.primary.tagline}
          </h2>
        </div>
        <div className="flex items-center gap-6">
          {slice.primary.cta_buttons.map((item, index) => (
            <PrismicLink field={item.link_url} key={index}>
              <button
                key={index}
                className={`${index !== 0 ? "bg-blue-400" : "bg-red-400"} h-12 w-[8em] rounded`}
              >
                <span className="px-1">{item.link_title} </span>
              </button>
            </PrismicLink>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute top-0 -z-50 h-[38rem] w-2/3 lg:h-[50rem]">
      {/* <div className="absolute inset-0 z-0 bg-gradient-to-l from-mywhite-200/5 via-mywhite-200/10 to-mywhite-200/20 bg-blend-screen"></div> */}
      {/* Hero Image  */}

      <div className="absolute inset-0 z-0 bg-black/10"></div>
      <PrismicNextImage
        priority
        field={slice.primary.hero_image}
        className="-z-50 h-full w-full object-cover object-center"
      />
    </div>
  </Bounded>
);

export default Hero;
