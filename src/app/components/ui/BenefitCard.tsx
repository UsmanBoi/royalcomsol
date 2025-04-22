"use client";
import { PrismicNextImage } from "@prismicio/next";
import React, { useState } from "react";

const BenefitCard = ({ cardData }) => {
  {
    const [content, setContent] = useState(false);
    const toggleContent = (id) => setContent((prev) => !prev);
    return (
      <div className="grid max-w-full gap-x-4 gap-y-4 md:grid-cols-2 lg:gap-y-10 xl:grid-cols-3 xl:justify-items-center xl:place-self-center 2xl:max-w-screen-xl 3xl:max-w-screen-2xl">
        {cardData.map((benefit, id) => (
          <div
            className="grid max-w-sm grid-cols-[1fr_1fr] gap-4 rounded bg-[#E9F0FF] px-3 py-2 sm:min-w-full sm:p-4 2xl:max-w-xl 2xl:py-5"
            key={id}
          >
            <div className="flex flex-col justify-center gap-2">
              <h1 className="text-lg font-medium xl:text-xl">
                {benefit.benefit_title}
              </h1>
              <span className="min-h-20 w-full text-sm sm:w-60 2xl:text-base">
                {benefit.benefit_headline}
              </span>
            </div>
            <div className="relative h-[11rem] sm:h-[12rem] lg:h-[13rem] 2xl:h-[15rem]">
              <PrismicNextImage
                field={benefit.benefit_image}
                alt=""
                className="h-full w-full object-contain object-center"
              />
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default BenefitCard;
