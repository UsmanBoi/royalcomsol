"use client";
import { FC } from "react";
import { useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import { paddingClass, secHeading } from "@/app/constants";
import { GoDotFill } from "react-icons/go";
import BenefitCard from "@/app/components/ui/BenefitCard";
/**
 * Props for `Benefits`.
 */
export type BenefitsProps = SliceComponentProps<Content.BenefitsSlice>;

/**
 * Component for "Benefits" Slices.
 */
const Benefits: FC<BenefitsProps> = ({ slice }) => {
  const [currentBenefit, setCurrentBenefit] = useState(0);
  const toggleContent = (id) => setCurrentBenefit(id);
  return slice.variation === "homeBenefits" ? (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${paddingClass} h-auto w-full bg-red-50 py-10 dark:text-myblack-50`}
    >
      <div
        className={`flex flex-col items-center gap-y-16 py-10 sm:gap-y-20 lg:py-20`}
      >
        <h1 className={`${secHeading}`} style={{ wordSpacing: "0.125em" }}>
          {slice.primary.title}
        </h1>

        <BenefitCard cardData={slice.primary.benefit_data} />
      </div>
    </Bounded>
  ) : slice.variation === "default" ? (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`${paddingClass} grid h-auto w-full grid-rows-[8em_1fr] gap-2 sm:grid-cols-[1fr_3fr] lg:grid-cols-[1fr_4fr]`}
    >
      <div className="mt-2 flex h-fit max-w-sm flex-col gap-1.5">
        {slice.primary.benefit_data.map((benefit, id) => (
          <button
            onClick={() => toggleContent(id)}
            key={id}
            type="button"
            className="flex items-center gap-1 lg:gap-2"
          >
            <span>
              <GoDotFill
                className={`w-4 text-[10px] sm:text-sm ${
                  currentBenefit === id ? "text-red-500" : "opacity-80"
                }`}
              />
            </span>
            <h1
              key={id}
              className={`text-start text-xs font-bold tracking-tight transition-all duration-500 sm:text-base xl:text-xl 2xl:text-2xl ${
                currentBenefit === id
                  ? "font-bold text-red-500"
                  : "font-semibold opacity-80"
              } `}
            >
              {benefit.benefit_title}
            </h1>
          </button>
        ))}
      </div>

      <div className="relative min-h-full w-full">
        {slice.primary.benefit_data.map((benefit, id) => (
          <div
            className={`absolute left-0 top-0 grid max-w-5xl sm:grid-cols-[2fr_1fr] max-sm:grid-rows-2 ${
              currentBenefit === id ? "" : "-translate-y-80 scale-0 opacity-0"
            } transition-all duration-200 ease-linear`}
            key={id}
          >
            <div className={`flex flex-col gap-4`}>
              <h1 className="text-xl font-bold text-red-500 lg:text-2xl xl:text-3xl 2xl:text-4xl">
                {currentBenefit === id ? benefit.benefit_title : ""}
              </h1>
              <div className="flex flex-col gap-2.5 text-xs sm:text-sm md:text-base 2xl:text-lg">
                <p className="flex h-full max-w-sm flex-col justify-center gap-2 pr-6 xl:max-w-lg 2xl:max-w-xl">
                  {currentBenefit === id ? benefit.benefit_content_1 : ""}
                </p>
                <p
                  className={`max-w-sm transition-all duration-300 ease-in-out xl:max-w-lg 2xl:max-w-xl`}
                >
                  {currentBenefit === id ? benefit.benefit_content_2 : ""}
                </p>

                {slice.primary.benefits_points.map((point, pointid) =>
                  point.benefit_point_id === benefit.benefit_id ? (
                    <div key={pointid} className="max-w-md py-2 2xl:text-base">
                      <li>{point.benefit_point_1}</li>
                      <li>{point.benefit_point_2}</li>
                      <li>{point.benefit_point_3}</li>
                    </div>
                  ) : (
                    ""
                  ),
                )}
                <p
                  className={`max-w-sm transition-all duration-300 ease-in-out xl:max-w-lg 2xl:max-w-xl`}
                >
                  {currentBenefit === id ? benefit.benefit_content_3 : ""}
                </p>
              </div>
            </div>
            <div className="relative h-[14rem] w-fit lg:h-[18rem] 2xl:h-[22rem]">
              <PrismicNextImage
                field={currentBenefit === id ? benefit.benefit_image : {}}
                alt=""
                className="h-full w-full rounded-2xl object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  ) : (
    ""
  );
};

export default Benefits;
