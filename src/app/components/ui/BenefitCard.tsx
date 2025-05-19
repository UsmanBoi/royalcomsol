"use client";

import { PrismicNextImage } from "@prismicio/next";
import React from "react";
import { BenefitCardProps } from "@/app/utils/lib";

const BenefitCard: React.FC<BenefitCardProps> = ({ cardData }) => {
  return (
    <div className="grid max-w-full gap-x-4 gap-y-4 md:grid-cols-2 lg:gap-y-10 xl:grid-cols-3 xl:justify-items-center xl:place-self-center 2xl:max-w-screen-xl 3xl:max-w-screen-2xl">
      {cardData.map((benefit, id) => (
        <div
          key={id}
          style={{
            transitionDelay: `${150 + id * 120}ms`,
            background:
              "linear-gradient(to bottom right, rgba(250, 250, 200, 0.6) -6%, rgba(60, 107, 254, 0.1) 50%, rgba(250, 250, 200, 0.4) 60%, rgba(70, 107, 255, 0.1) 75%, rgba(100, 107, 255, 0.125) 82%)",
          }}
          className="slide-in-up grid min-h-40 max-w-full grid-cols-[1fr_1fr] gap-4 rounded px-3 py-2 shadow-lg sm:p-4 2xl:max-w-xl 2xl:py-5 max-sm:max-w-sm"
        >
          <div className="flex flex-col justify-center gap-2">
            <h1 className="text-lg font-medium xl:text-xl">
              {benefit.benefit_title}
            </h1>
            <span className="min-h-20 w-full text-sm sm:w-60 2xl:text-base">
              {benefit.benefit_headline}
            </span>
          </div>
          <div className="relative h-[8rem] w-fit place-self-end self-center rounded lg:h-[13rem] 2xl:h-[15rem] max-sm:w-32">
            <PrismicNextImage
              field={benefit.benefit_image}
              className="h-full w-full object-contain object-center"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BenefitCard;
