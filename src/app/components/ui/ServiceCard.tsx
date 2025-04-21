"use client";

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { useEffect, useRef, useState } from "react";

import React from "react";

const ServiceCard = ({ cardData, gridClass, cardClass }) => {
  const scrollContainerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which card is hovered
  const visibleCards = cardData.slice(0, 5); // Show all cards or limit to 3
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + e.deltaY * 4,
        behavior: "smooth",
      });
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      el.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <div
        className={`${gridClass} scroll-snap-x mandatory no-scrollbar flex h-full max-w-full snap-start place-items-center justify-self-center overflow-x-auto overflow-y-hidden scroll-smooth`}
        ref={scrollContainerRef}
      >
        {visibleCards.map((service, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              className={`${isHovered ? "border-blue-500/70" : ""} ${cardClass} flex h-full min-h-80 w-full max-w-sm flex-shrink-0 snap-start flex-col items-center justify-between gap-y-2 border-2 border-neutral-200/50 transition-all duration-300 ease-in-out dark:border-neutral-700 xl:max-w-[400px]`}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative flex min-h-80 w-full items-end 2xl:max-h-80">
                <div
                  className={`flex flex-col gap-1 px-2 transition-all duration-300 ease-in-out ${
                    isHovered
                      ? "-translate-y-12"
                      : "translate-y-0 text-myblack-150"
                  }`}
                >
                  <h1
                    style={
                      isHovered
                        ? {
                            transform: "scale(1.15)",
                            transformOrigin: "left",
                            transition: "transform 0.3s ease",
                          }
                        : {
                            transform: "scale(1)",
                            transformOrigin: "left",
                            transition: "transform 0.3s ease",
                          }
                    }
                    className={`${
                      isHovered ? "text-blue-500" : ""
                    } pointer-events-none text-lg font-semibold capitalize sm:text-xl lg:text-2xl`}
                  >
                    {service.service_title}
                  </h1>
                  <hr className="w-80 bg-myblack-150" />
                  <p className={`min-h-20 text-sm lg:text-base 2xl:text-lg`}>
                    {service.service_headline}
                  </p>
                </div>
                <PrismicNextImage
                  field={service?.service_image}
                  className={`absolute left-0 top-0 -z-10 transition-all duration-300 ease-in-out ${
                    !isHovered
                      ? "pointer-events-none translate-y-10 opacity-0"
                      : "translate-y-0 opacity-100"
                  } h-96 w-full object-cover object-center`}
                />

                <button
                  className={`absolute left-2 text-mywhite-50 transition-all duration-300 ease-in-out ${
                    isHovered
                      ? "-translate-y-7 opacity-100"
                      : "pointer-events-none translate-y-10 opacity-0"
                  } rounded-full bg-myblack-150 px-3 py-0.5`}
                >
                  <PrismicNextLink
                    field={service?.service_link}
                    className="text-sm"
                  >
                    Read More
                  </PrismicNextLink>
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {cardData.length > 3 && (
        <div className="my-8 flex items-center justify-center lg:mt-14">
          <button type="button" className="">
            {/* Button text */}
            <span className="relative z-10 transition-all duration-300 ease-[cubic-bezier(0.3,1,0.3,1)] group-hover:text-black">
              Show All
            </span>
          </button>
        </div>
      )}
    </>
  );
};

export default ServiceCard;
