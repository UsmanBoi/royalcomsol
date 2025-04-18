"use client";
import { PrismicNextImage } from "@prismicio/next";
import React, { useState } from "react";

const BenefitCard = ({ cardData }) => {
  {
    const [content, setContent] = useState(false);
    const toggleContent = (id) => setContent((prev) => !prev);
    return (
      <>
        {cardData.map((benefit, id) => (
          <div className="flex flex-col items-center gap-4" key={id}>
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-xl font-bold">{benefit.benefit_title}</h1>
              <span className="px-6 text-sm">{benefit.benefit_headline}</span>
            </div>
            <div className="relative h-[10rem] w-fit lg:h-[12rem] 2xl:h-[18rem]">
              <PrismicNextImage
                field={benefit.benefit_image}
                alt=""
                className="h-full w-full rounded-2xl object-cover object-center"
              />
            </div>
          </div>
        ))}
      </>
    );
  }
};

export default BenefitCard;
