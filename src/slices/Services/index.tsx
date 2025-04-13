"use client";
import { useState } from "react";
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "@/app/components/Bounded";

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>;

/**
 * Component for "Services" Slices.
 */
const Services: FC<ServicesProps> = ({ slice }) => {
  const [currentService, setCurrentService] = useState(0);
  const toggleContent = (id) => setCurrentService(id);
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="grid min-h-screen w-full grid-cols-[8em_1fr] gap-5 sm:grid-cols-[11em_1fr] lg:px-11"
    >
      <div className="flex flex-col gap-1">
        {slice.primary.service_data.map((service, id) => (
          <button onClick={() => toggleContent(id)} key={id} type="button">
            <h1
              key={id}
              className={`text-start text-lg font-bold tracking-tight transition-all duration-500 xl:text-xl 2xl:text-2xl ${
                currentService === id ? "text-red-500" : "text-myblack-200"
              } `}
            >
              {service.service_title}
            </h1>
          </button>
        ))}
      </div>

      <div className="relative min-h-full w-screen">
        {slice.primary.service_data.map((service, id) => (
          <div
            className={`absolute left-0 top-0 grid w-screen grid-rows-2 sm:grid-cols-[1fr_1fr] ${
              currentService === id ? "" : "-translate-y-80 scale-0 opacity-0"
            } transition-all duration-200 ease-linear`}
            key={id}
          >
            <div className={`flex flex-col gap-4`}>
              <h1 className="text-xl font-bold text-red-500 lg:text-2xl xl:text-3xl 2xl:text-4xl">
                {currentService === id ? service.service_title : ""}
              </h1>
              <div className="flex flex-col gap-2.5">
                <p className="flex h-full max-w-sm flex-col justify-center gap-2 pr-6 text-xs sm:text-sm md:text-base xl:max-w-lg 2xl:max-w-xl">
                  {currentService === id ? service.service_content_1 : ""}
                </p>
                <p
                  className={`max-w-sm text-xs transition-all duration-300 ease-in-out sm:text-sm md:text-base lg:text-base xl:max-w-lg 2xl:max-w-xl`}
                >
                  {currentService === id ? service.service_content_2 : ""}
                </p>
                <p
                  className={`max-w-sm text-xs transition-all duration-300 ease-in-out sm:text-sm md:text-base lg:text-base xl:max-w-lg 2xl:max-w-xl`}
                >
                  {currentService === id ? service.service_content_3 : ""}
                </p>
              </div>
            </div>
            <div className="relative h-[14rem] w-fit lg:h-[18rem] 2xl:h-[22rem]">
              <PrismicNextImage
                field={currentService === id ? service.service_image : {}}
                alt=""
                className="h-full w-full rounded-2xl object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Services;
