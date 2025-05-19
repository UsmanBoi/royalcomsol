import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { secHeading } from "@/app/constants";
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
      className={`h-auto w-full py-5 sm:py-10`}
    >
      <div
        className={`grid gap-y-10 py-5 sm:gap-y-14 sm:py-10 lg:grid-cols-2 lg:py-12 xl:justify-items-center xl:place-self-center 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl max-sm:pb-10`}
      >
        <div className="flex w-full flex-col justify-between gap-y-5 self-start sm:h-full sm:gap-y-4">
          <h1
            className={`fade-up h-fit w-[28rem] text-5xl capitalize leading-[120%] md:w-[36rem] md:text-[52px] lg:text-6xl xl:text-7xl`}
            style={{ wordSpacing: "0.1em" }}
          >
            {slice.primary.title}
          </h1>
          <div className="flex max-w-fit items-center pl-1.5 text-2xl transition-all duration-300 ease-in-out xl:text-3xl">
            <PrismicNextLink field={slice.primary.view_all}>
              <button
                type="button"
                className={`flex w-fit min-w-fit items-center`}
              >
                {/* Button text */}
                <span className="text-lg">View All</span>
                <GoArrowRight
                  className={`w-12 transition-all duration-300 ease-in-out`}
                />
              </button>
            </PrismicNextLink>
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
