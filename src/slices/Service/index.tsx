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
      <h1 className={`${secHeading}`}>{slice.primary.title}</h1>
      <div className="grid h-full place-items-center gap-x-4 gap-y-6 justify-self-center md:grid-cols-2 md:gap-x-6 lg:gap-y-12 xl:grid-cols-3 xl:gap-x-12 2xl:gap-y-[4.25rem]">
        <ServiceCard cardData={slice.primary.service_data} />
      </div>
    </Bounded>
  ) : slice.variation === "default" ? (
    <div className="flex flex-col gap-2">
      <h1>{slice.primary.service_title}</h1>
      <h2>{slice.primary.service_headline}a</h2>
    </div>
  ) : (
    ""
  );
};

export default Service;
