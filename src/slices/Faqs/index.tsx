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

type _FaqItem = {
  question: string;
  answer: string;
};

const Faqs: FC<FaqsProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${paddingClass} h-auto w-full py-10 dark:text-myblack-150 max-sm:py-2`}
    >
      <div
        className={`grid gap-y-14 py-10 sm:gap-y-20 md:grid-cols-2 lg:py-20 xl:justify-items-center xl:place-self-center 2xl:max-w-screen-xl 3xl:max-w-screen-2xl max-sm:py-2 max-sm:pb-10`}
      >
        <div className="flex w-full flex-col justify-between gap-y-2 self-start sm:h-full">
          <h1
            className={`h-fit leading-[1.3em] sm:w-[30rem] md:w-[36rem] ${secHeading}`}
            style={{ wordSpacing: "0.1em" }}
          >
            {slice.primary.title}
          </h1>
          <div className="ml-2 flex w-fit items-center text-2xl transition-all duration-300 ease-in-out xl:text-3xl">
            <button type="button" className={`w-fit`}>
              <PrismicNextLink field={slice.primary.view_all}>
                {/* Button text */}
                <span className="text-lg">View All</span>
              </PrismicNextLink>
            </button>
            <GoArrowRight
              className={`w-12 transition-all duration-300 ease-in-out`}
            />
          </div>
        </div>

        <FaqCard
          cardData={slice.primary.faq_data.map((item) => ({
            question: item.question ?? "",
            answer: item.answer ?? "",
          }))}
        />
      </div>
    </Bounded>
  );
};

export default Faqs;
