import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { secHeading } from "@/app/constants";
// import { PrismicNextImage } from "@prismicio/next";
import ServiceCard from "@/app/components/ui/ServiceCard";
import Bounded from "@/app/components/Bounded";

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
      className={`relative flex h-[36rem] w-screen items-start gap-y-16 px-0 py-14 sm:h-[42rem] sm:gap-y-20 lg:py-20 2xl:justify-center`}
    >
      <div className="flex h-[5rem] w-screen max-w-full 2xl:max-w-screen-xl 3xl:max-w-screen-2xl">
        <h1
          className={`${secHeading} h-fit pt-4 sm:pt-12`}
          style={{ wordSpacing: "0.1em" }}
        >
          {slice.primary.title}
        </h1>
      </div>
      <ServiceCard
        serviceLink={slice.primary.show_all}
        cardData={slice.primary.service_data}
        gridClass="absolute w-screen max-h-[400px] bottom-4 left-0 w-full"
        cardClass=""
      />
    </Bounded>
  ) : slice.variation === "default" ? (
    <div className="flex flex-col gap-2">
      <ServiceCard
        serviceLink={null}
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
