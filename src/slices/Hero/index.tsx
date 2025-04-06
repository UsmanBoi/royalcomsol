import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
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
  <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    className="border-2 border-red-500"
  >
    <div>
      {/* <PrismicNextImage
        priority
        field={}
        className="h-full w-full object-cover object-center"
      /> */}
    </div>
    <h1 className="font-extrabold">{slice.primary.heading}</h1>
    <h2>{slice.primary.tagline}</h2>
    <h2>{slice.primary.tagline}</h2>
    <div className="flex items-center justify-center gap-4">
      {slice.primary.cta_buttons.map((item, i) => (
        <span className="" key={i}>
          a
        </span>
      ))}
    </div>
  </section>
);

export default Hero;
