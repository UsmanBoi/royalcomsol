import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicLink, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/app/components/Bounded";
import { GoArrowRight } from "react-icons/go";
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

{
  /* <Bounded ">
<div className=">
  <div
    className={`}
  >
    <div className="flex w-fit items-center">
      <h1 className="">
        Increase your medical practice revenue by
        <span className="text-[#236BFE] tracking-tighter"> 30% </span>in 3
        months
      </h1>
    </div>
    
    <div className="">
      <h2 className="">
        Royal Com Solutions is a leading organization that offers custom BPO
        strategies and services including clean billing, claim denial managament and accurate reimbursements that enhance patient interactions, boost efficiency, and drive revenue growth.
      </h2>

      <Link href="/contact">
        <button >
          <span className="">Get Started Today</span>
          <GoArrowRight className="w-8 text-2xl" />
        </button>
      </Link>
    </div>
  </div>

  <div className="">

    <div className="relative max-lg:min-h-full lg:max-h-[27rem] 2xl:max-h-[30rem] w-full max-w-[320px] xs:max-w-sm 2xl:max-w-md">
      <StaticImg
        alt="hero Image describing business environment"
        width={300}
        height={300}
        src="/building2.jpg"
        className="
      />
      <StaticImg
        alt="hero Image describing telesupport services"
        width={300}
        height={300}
        src="/group.jpg"
        className="
      />
    </div>
  </div>
</div>
</Bounded> */
}

const Hero: FC<HeroProps> = ({ slice }) => (
  <Bounded
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    className="flex w-screen flex-col justify-center pb-16 pt-7 sm:pt-10 md:min-h-[30em] md:flex-row md:items-center lg:min-h-[35em]"
  >
    <div className="relative grid h-full w-full gap-y-6 md:min-h-[26em] md:grid-cols-[2fr_22rem] lg:grid-cols-[2fr_1fr] xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 2xl:pb-20 2xl:pt-4 3xl:max-w-screen-2xl max-md:grid-rows-[1fr_1fr] max-lg:gap-x-4">
      {/* Content */}
      <div
        className={`relative flex h-auto w-fit flex-col justify-center gap-y-9 place-self-start rounded-lg md:gap-y-20 max-sm:w-96`}
      >
        <div className="flex w-fit items-center">
          <h1 className="fade-up -ml-0.5 text-[36px] leading-[120%] tracking-[-4%] sm:max-w-[26rem] sm:text-[40px] md:max-w-[26rem] lg:-ml-[0.8%] lg:max-w-[36rem] lg:text-[56px] lg:font-light xl:max-w-[40rem] xl:text-[62px] 2xl:max-w-[52rem] 3xl:text-[80px] max-xs:pr-12 max-sm:w-[22rem]">
            {slice.primary.heading}
          </h1>
        </div>
        <div className="flex flex-col gap-y-2.5">
          <h2 className="fade-up w-full text-sm font-normal sm:max-w-md lg:max-w-xl lg:text-base 2xl:text-lg max-sm:max-w-80">
            {slice.primary.tagline}
          </h2>

          <PrismicLink field={slice.primary.ctabutton_link}>
            <button
              className={`slide-in-left flex h-10 w-fit items-center gap-1 font-bold`}
            >
              <span className="pl-0.5">{slice.primary.ctabutton_title}</span>
              <GoArrowRight className="w-8 text-2xl" />
            </button>
          </PrismicLink>
        </div>
      </div>

      {/* Hero Images  */}
      <div className="relative flex min-h-80 w-full justify-center xs:justify-end max-sm:min-h-[24rem] max-sm:items-end">
        <div className="relative w-full max-w-[320px] xs:max-w-sm lg:max-h-[27rem] 2xl:max-h-[30rem] 2xl:max-w-md max-lg:min-h-full">
          <PrismicNextImage
            priority
            field={slice.primary.hero_image}
            className="slide-in-right absolute right-0 top-8 h-56 w-44 rounded object-cover object-center xs:top-0 xs:h-[19rem] xs:w-[14.25rem] lg:top-3 lg:w-[14.25rem] 2xl:h-[23.5rem] 2xl:w-[17.5rem]"
          />

          <PrismicNextImage
            priority
            field={slice.primary.hero_image2}
            className="slide-in-left absolute bottom-12 left-4 h-44 w-44 rounded object-cover object-center xs:bottom-4 xs:left-0 xs:h-[14.25rem] xs:w-52 lg:left-2 lg:w-[14.25rem] 2xl:-bottom-[20%] 2xl:h-[17.5rem] 2xl:w-[17.5rem]"
          />
        </div>
      </div>
    </div>
  </Bounded>
);

export default Hero;
