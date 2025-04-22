"use client";

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { useEffect, useRef, useState } from "react";
import { getCurrentScreenSize } from "../../constants.js";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import { ImageField, LinkField } from "@prismicio/client";

interface ServiceCardData {
  service_title: string;
  service_headline: string;
  service_link: LinkField;
  service_image: ImageField;
}

interface ServiceCardProps {
  cardData: ServiceCardData[];
  gridClass?: string;
  cardClass?: string;
  serviceLink: LinkField | null;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  cardData,
  gridClass = "",
  cardClass = "",
  serviceLink,
}) => {
  const [screenSize, setScreenSize] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);

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
        : cardData.slice(0, 4);

  useEffect(() => {
    const handleResize = () => setScreenSize(getCurrentScreenSize());
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + e.deltaY * 4,
        behavior: "smooth",
      });
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
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
              className={`${isHovered ? "bg-opacity-0" : "bg-lilac-100"} ${cardClass} flex h-full min-h-[25rem] w-full max-w-[355px] flex-shrink-0 snap-start flex-col items-center justify-between gap-y-2 border border-myblack-150/30 transition-all duration-300 ease-in-out dark:border-neutral-700 sm:max-w-sm xl:max-w-[400px] 2xl:max-w-md 3xl:max-w-lg`}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(0)}
            >
              <div className="relative flex min-h-[25rem] w-full items-end">
                <div
                  className={`flex flex-col gap-2.5 px-4 transition-all duration-300 ease-in-out sm:px-5 ${
                    isHovered
                      ? "-translate-y-3"
                      : "translate-y-5 text-myblack-150"
                  }`}
                >
                  <div
                    className={`flex items-center justify-between transition-all duration-300 ease-in-out ${
                      isHovered ? "" : ""
                    }`}
                  >
                    <h1
                      className={`${
                        isHovered ? "font-normal text-mywhite-50" : ""
                      } pointer-events-none text-xl capitalize xl:text-xl 2xl:text-2xl`}
                      style={{
                        scale: isHovered ? "1.105" : "1",
                        transformOrigin: "left",
                        transition: "scale 0.3s ease, text-shadow 0.1s ease",
                      }}
                    >
                      {service.service_title}
                    </h1>
                    <GoArrowRight
                      className={`w-12 text-2xl transition-all duration-300 ease-in-out ${
                        isHovered ? "" : "text-blue-500"
                      }`}
                      style={
                        isHovered
                          ? {
                              transform: "scale(1.3)",
                              transformOrigin: "left",
                              transition: "transform 0.3s ease",
                            }
                          : {
                              transform: "scale(1)",
                              transformOrigin: "left",
                              transition: "transform 0.3s ease",
                            }
                      }
                    />
                  </div>
                  <div
                    className={`h-[1.5px] w-80 outline-0 sm:w-full ${isHovered ? "bg-mywhite-100" : "bg-myblack-100"}`}
                  />
                  <p
                    className={`${
                      isHovered ? "text-mywhite-50" : ""
                    } min-h-20 text-sm 2xl:text-base`}
                    // style={{
                    //   textShadow: isHovered
                    //     ? "1px 1px 3px rgba(255, 255, 255, 0.3)" // subtle white shadow on hover
                    //     : "1px 1px 3px rgba(0, 0, 0, 0.3)", // subtle black shadow normally
                    //   transition: "0.3s ease, text-shadow 0.1s ease",
                    // }}
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
                  className={`absolute left-0 top-0 -z-10 transition-all duration-200 ease-linear ${
                    !isHovered
                      ? "pointer-events-none translate-y-5 opacity-0"
                      : "translate-y-0 opacity-100"
                  } h-[25rem] w-full object-cover object-center`}
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
