import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `LogoSlider`.
 */
export type LogoSliderProps = SliceComponentProps<Content.LogoSliderSlice>;

/**
 * Component for "LogoSlider" Slices.
 */
const LogoSlider: FC<LogoSliderProps> = ({ slice }) => {
  const logos = slice.primary.slider_data;

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="my-16 flex h-32 flex-col justify-center gap-8 border-y-2"
    >
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-28 whitespace-nowrap px-4">
          {[...logos, ...logos].map((logo, id) => (
            <div className="flex items-center gap-20 rounded-md" key={id}>
              <span className="text-3xl text-gray-200">|</span>
              <div className="relative h-16 w-40 flex-shrink-0">
                <PrismicNextImage
                  field={logo.logo_image}
                  alt=""
                  className="h-full w-full object-contain object-center transition-all"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default LogoSlider;
