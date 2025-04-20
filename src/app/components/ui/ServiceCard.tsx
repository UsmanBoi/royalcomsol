"use client";

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { useState } from "react";

import React from "react";

const ServiceCard = ({ cardData }) => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which card is hovered
  const visibleCards = showAll ? cardData : cardData.slice(0, 3); // Show all cards or limit to 3

  return (
    <>
      <div className="grid h-full place-items-center gap-x-4 gap-y-6 justify-self-center md:grid-cols-2 md:gap-x-6 lg:gap-y-12 xl:grid-cols-3 xl:gap-x-12 2xl:gap-y-[4.25rem]">
        {visibleCards.map((service, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              className={`${
                isHovered ? "border-red-400/10" : ""
              } flex h-full w-full max-w-xl flex-col items-center justify-between gap-y-2 rounded-lg border-2 border-neutral-200/50 p-5 pt-7 transition-all duration-300 ease-in-out dark:border-neutral-700 2xl:gap-y-5`}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex min-h-24 flex-col items-center gap-2 text-center xl:gap-2">
                <h1
                  className={`transition-all duration-300 ease-in-out ${
                    isHovered ? "text-red-500" : ""
                  } pointer-events-none min-h-10 text-lg font-semibold capitalize sm:text-xl lg:text-2xl`}
                >
                  {service.service_title}
                </h1>
                <h2 className="min-h-10 text-sm 2xl:text-base">
                  {service.service_headline}
                </h2>
              </div>
              <div className="relative flex max-h-64 w-full 2xl:max-h-80">
                <div
                  className={`absolute bottom-0 left-0 flex h-full w-full flex-col items-center justify-end gap-8`}
                >
                  <p
                    className={`w-full text-center text-xs font-light transition-all duration-300 ease-in-out sm:text-sm xl:text-base ${
                      isHovered
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-10 opacity-0"
                    }`}
                  >
                    {service?.service_description}
                  </p>
                  <button
                    className={`transition-all duration-300 ease-in-out ${
                      isHovered
                        ? "translate-y-0 opacity-100 delay-75"
                        : "pointer-events-none translate-y-12 opacity-0"
                    } rounded bg-red-500 px-4 py-2`}
                  >
                    <PrismicNextLink
                      field={service?.service_link}
                      className="text-sm"
                    >
                      Read More
                    </PrismicNextLink>
                  </button>
                </div>

                <PrismicNextImage
                  field={service?.service_image}
                  className={`transition-all duration-300 ease-in-out ${
                    isHovered
                      ? "pointer-events-none translate-y-10 opacity-0"
                      : "translate-y-0 opacity-100"
                  } h-full min-h-64 w-full rounded-lg object-cover object-center xl:min-h-60 2xl:min-h-80`}
                />
              </div>
            </div>
          );
        })}
      </div>
      {cardData.length > 3 && (
        <div className="my-8 flex items-center justify-center lg:mt-14">
          {!showAll ? (
            <button
              type="button"
              className="group relative inline-block cursor-pointer overflow-hidden border-2 border-blue-200 bg-black px-8 py-3 text-base font-bold text-white sm:px-10 sm:py-4 sm:text-lg lg:text-xl 2xl:px-14 2xl:py-5"
              onClick={() => setShowAll((prev) => !prev)}
            >
              {/* Button text */}
              <span className="relative z-10 transition-all duration-300 ease-[cubic-bezier(0.3,1,0.3,1)] group-hover:text-black">
                Show All
              </span>
              {/* Background effect */}
              <span className="absolute inset-0 translate-y-full bg-blue-200 transition-all duration-500 ease-[cubic-bezier(0.3,1,0.3,1)] group-hover:translate-y-0" />
            </button>
          ) : (
            <button>Talk Now</button>
          )}
        </div>
      )}
    </>
  );
};

export default ServiceCard;
