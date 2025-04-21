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
              className={`${isHovered ? "border-blue-500/10" : ""} ${cardClass} snap-start`}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex min-h-24 flex-col items-center gap-2 text-center xl:gap-2">
                <h1
                  className={`transition-all duration-300 ease-in-out ${
                    isHovered ? "text-blue-500" : ""
                  } pointer-events-none min-h-10 text-lg font-semibold capitalize sm:text-xl lg:text-2xl`}
                >
                  {service.service_title}
                </h1>
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
                    } rounded bg-blue-500 px-4 py-2`}
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
                  } h-full w-full rounded-lg object-cover object-center`}
                />
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
