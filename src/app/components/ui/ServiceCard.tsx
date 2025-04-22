"use client";

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { useEffect, useRef, useState } from "react";
import { getCurrentScreenSize } from "../../constants.js";

import React from "react";
import { GoArrowRight } from "react-icons/go";

const ServiceCard = ({ cardData, gridClass, cardClass, serviceLink }) => {
  const [screenSize, setScreenSize] = useState(null);
  const scrollContainerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which card is hovered
  const visibleCards =
    screenSize === "xxs" ||
    screenSize === "xs" ||
    screenSize === "sm" ||
    screenSize === "md" ||
    screenSize === "lg" ||
    screenSize === "xl"
      ? cardData.slice(0, 5)
      : screenSize === "2xl" || screenSize === "3xl"
        ? cardData.slice(0, 7)
        : cardData.slice(0, 4); // Show all cards or limit to 3

  useEffect(() => {
    const handleResize = () => setScreenSize(getCurrentScreenSize());
    handleResize(); // initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              className={`${isHovered ? "border-blue-500/70" : ""} ${cardClass} flex h-full min-h-80 w-full max-w-sm flex-shrink-0 snap-start flex-col items-center justify-between gap-y-2 border-2 border-neutral-200/50 transition-all duration-300 ease-in-out dark:border-neutral-700 xl:max-w-[400px] 3xl:h-96 3xl:max-w-md`}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative flex min-h-80 w-full items-end 2xl:h-80 3xl:h-96">
                <div
                  className={`flex flex-col gap-1 px-4 transition-all duration-300 ease-in-out ${
                    isHovered
                      ? "-translate-y-3"
                      : "translate-y-1 text-myblack-150"
                  }`}
                >
                  <div
                    className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
                      isHovered ? "" : ""
                    }`}
                  >
                    <h1
                      style={{
                        textShadow: isHovered
                          ? "1px 1px 3px rgba(255, 255, 255, 0.3)" // subtle white shadow on hover
                          : "1px 1px 3px rgba(0, 0, 0, 0.2)", // subtle black shadow normally
                        scale: isHovered
                          ? "1.15" // subtle white shadow on hover
                          : "1", // subtle black shadow normally

                        transformOrigin: "left",
                        transition: "scale 0.3s ease, text-shadow 0.1s ease",
                      }}
                      className={`${
                        isHovered
                          ? "text-mywhite-50 outline-1 outline-blue-500"
                          : ""
                      } pointer-events-none font-semibold capitalize sm:text-[18px] xl:text-lg`}
                    >
                      {service.service_title}
                    </h1>
                    <GoArrowRight
                      className={`w-12 text-2xl transition-all duration-300 ease-in-out ${
                        isHovered ? "text-blue-500" : ""
                      }`}
                      style={
                        isHovered
                          ? {
                              transform: "scale(1.3)",
                              transformOrigin: "right",
                              transition: "transform 0.3s ease",
                            }
                          : {
                              transform: "scale(1)",
                              transformOrigin: "right",
                              transition: "transform 0.3s ease",
                            }
                      }
                    />
                  </div>

                  <p
                    className={`${
                      isHovered ? "text-mywhite-50" : ""
                    } min-h-20 text-sm 2xl:text-base`}
                    style={{
                      textShadow: isHovered
                        ? "1px 1px 3px rgba(255, 255, 255, 0.3)" // subtle white shadow on hover
                        : "1px 1px 3px rgba(0, 0, 0, 0.3)", // subtle black shadow normally
                      transition: "0.3s ease, text-shadow 0.1s ease",
                    }}
                  >
                    {service.service_headline}
                  </p>
                  <button
                    className={`w-fit text-mywhite-50 transition-all duration-300 ease-in-out hover:text-blue-400 ${
                      isHovered
                        ? "-translate-y-1 opacity-100"
                        : "translate-y-10 opacity-0"
                    } rounded-full bg-myblack-150 px-4 py-0.5`}
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
                  className={`absolute left-0 top-0 -z-10 transition-all duration-300 ease-in-out ${
                    !isHovered
                      ? "pointer-events-none translate-y-5 opacity-0"
                      : "translate-y-0 opacity-100"
                  } h-96 w-full object-cover object-center`}
                />
              </div>
            </div>
          );
        })}

        <div className="flex min-w-96 items-center justify-end text-2xl transition-all duration-300 ease-in-out hover:scale-105 xl:text-3xl">
          <button type="button" className={`w-fit rounded`}>
            <PrismicNextLink field={serviceLink}>
              {/* Button text */}
              <span className="">View All Services</span>
            </PrismicNextLink>
          </button>
          <GoArrowRight
            className={`w-12 transition-all duration-300 ease-in-out`}
          />
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
