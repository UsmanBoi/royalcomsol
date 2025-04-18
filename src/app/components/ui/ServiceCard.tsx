"use client";

import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { useState } from "react";

import React from "react";

const ServiceCard = ({ cardData }) => {
  return (
    <>
      {cardData.map((service, index) => {
        const [content, setContent] = useState(false);
        const toggleContent = (id) => setContent((prev) => !prev);
        return (
          <div
            className={`${
              content ? "border-red-400/70" : ""
            } flex h-full w-full max-w-xl flex-col items-center justify-between gap-y-2 rounded-lg border-2 border-neutral-200/50 p-5 pt-7 transition-all duration-300 ease-in-out dark:border-neutral-700 2xl:gap-y-5`}
            key={index}
            onMouseEnter={toggleContent}
            onMouseLeave={toggleContent}
          >
            <div className="flex min-h-24 flex-col items-center gap-2 text-center xl:gap-2">
              <h1
                className={`transition-all duration-300 ease-in-out ${
                  content ? "text-red-500" : ""
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
                    content
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-10 opacity-0"
                  }`}
                >
                  {service?.service_description}
                </p>
                <button
                  className={`transition-all duration-300 ease-in-out ${
                    content
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
                  content
                    ? "pointer-events-none translate-y-10 opacity-0"
                    : "translate-y-0 opacity-100"
                } h-full min-h-64 w-full rounded-lg object-cover object-center xl:min-h-60 2xl:min-h-80`}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ServiceCard;
