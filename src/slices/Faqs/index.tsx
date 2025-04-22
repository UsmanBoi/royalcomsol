import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { paddingClass, secHeading } from "@/app/constants";
import { PrismicNextLink } from "@prismicio/next";
import { GoArrowRight } from "react-icons/go";
import FaqCard from "@/app/components/ui/FaqCard";

/**
 * Props for `Faqs`.
 */
export type FaqsProps = SliceComponentProps<Content.FaqsSlice>;

/**
 * Component for "Faqs" Slices.
 */
const Faqs: FC<FaqsProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${paddingClass} h-auto w-full py-10 dark:text-myblack-150`}
    >
      <div
        className={`grid gap-y-16 py-10 sm:gap-y-20 md:grid-cols-2 lg:py-20 xl:justify-items-center xl:place-self-center 2xl:max-w-screen-xl 3xl:max-w-screen-2xl`}
      >
        <div className="flex max-h-52 w-full flex-col justify-between self-start">
          <h1
            className={`h-fit sm:w-[30rem] md:w-[36rem] ${secHeading}`}
            style={{ wordSpacing: "0.125em" }}
          >
            {slice.primary.title}
          </h1>
          <div className="flex min-w-96 items-center text-2xl transition-all duration-300 ease-in-out xl:text-3xl">
            <button type="button" className={`w-fit`}>
              <PrismicNextLink field={slice.primary.view_all}>
                {/* Button text */}
                <span className="">View All</span>
              </PrismicNextLink>
            </button>
            <GoArrowRight
              className={`w-12 transition-all duration-300 ease-in-out`}
            />
          </div>
        </div>

        <FaqCard cardData={slice.primary.faq_data} />
      </div>
    </Bounded>
  );
};

export default Faqs;
