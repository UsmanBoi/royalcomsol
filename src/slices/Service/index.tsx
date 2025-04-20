import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/app/components/Bounded";
import { paddingClass, secHeading } from "@/app/constants";
// import { PrismicNextImage } from "@prismicio/next";
import ServiceCard from "@/app/components/ui/ServiceCard";

/**
 * Props for `Service`.
 */
export type ServiceProps = SliceComponentProps<Content.ServiceSlice>;

/**
 * Component for "Service" Slices.
 */
const Service: FC<ServiceProps> = ({ slice }) => {
  return slice.variation === "homeService" ? (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`flex h-auto flex-col items-center gap-y-16 py-14 sm:gap-y-20 lg:py-20 ${paddingClass}`}
    >
      <h1 className={`${secHeading}`} style={{ wordSpacing: "0.125em" }}>
        {slice.primary.title}
      </h1>
      <ServiceCard
        cardData={slice.primary.service_data}
        gridClass="grid h-full place-items-center gap-x-4 gap-y-6 justify-self-center md:grid-cols-2 md:gap-x-6 lg:gap-y-12 xl:grid-cols-3 xl:gap-x-12 2xl:gap-y-[4.25rem]"
        cardClass="flex h-full w-full max-w-xl flex-col items-center justify-between gap-y-2 rounded-lg border-2 border-neutral-200/50 p-5 pt-7 transition-all duration-300 ease-in-out dark:border-neutral-700 2xl:gap-y-5"
      />
    </Bounded>
  ) : slice.variation === "default" ? (
    <div className="flex flex-col gap-2">
      <ServiceCard
        cardData={slice.primary.service_data}
        gridClass="grid h-full place-items-center gap-x-4 gap-y-6 justify-self-center md:gap-x-6 lg:gap-y-12  xl:gap-x-12 2xl:gap-y-[4.25rem]"
        cardClass="flex h-full w-full max-w-xl flex-col items-center justify-between gap-y-2 rounded-lg border-2 border-neutral-200/50 p-5 pt-7 transition-all duration-300 ease-in-out dark:border-neutral-700 2xl:gap-y-5"
      />
    </div>
  ) : (
    ""
  );
};

export default Service;
