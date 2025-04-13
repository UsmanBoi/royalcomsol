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
      className="grid grid-cols-[1fr_2fr] gap-10"
    >
      <div className="">
        {slice.primary.service_data.map((service, id) => (
          <div className="flex flex-col gap-2" key={id}>
            <button onClick={() => toggleContent(id)} key={id} type="button">
              <h1
                key={id}
                className={`font-space text-start font-bold tracking-tight transition-all duration-500 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl max-sm:text-3xl ${
                  currentService === id ? "text-blue-200" : "text-zinc-600"
                } `}
              >
                {service.service_title}
              </h1>
            </button>
          </div>
        ))}
      </div>

      <div className="flex h-full w-screen justify-between gap-6">
        {slice.primary.service_data.map((service, id) => (
          <div
            className={`flex flex-col gap-2 ${
              currentService === id ? "-translate-y-20" : ""
            } transition-all duration-200 ease-linear`}
            key={id}
          >
            <h1>{service.service_title}</h1>
            <div className="relative order-2 h-[20rem] w-fit lg:h-[30rem]">
              <PrismicNextImage
                field={service.service_image}
                alt=""
                className="h-full w-full rounded-2xl object-cover object-center"
              />
            </div>
            <p className="order-1 flex h-full max-w-xs flex-col justify-center gap-2 pr-6 text-xs sm:text-sm md:text-base">
              {service.service_content_1}
            </p>
            <p
              key={id}
              className={`font-saira absolute right-0 block max-w-sm text-sm font-medium tracking-wide transition-all duration-500 ease-in-out sm:text-xl lg:text-2xl xl:max-w-md 2xl:max-w-lg`}
            ></p>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Services;
