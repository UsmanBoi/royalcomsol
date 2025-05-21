import { FC } from "react";
import { Content, ImageField, LinkField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { secHeading } from "@/app/constants";
// import { PrismicNextImage } from "@prismicio/next";
import ServiceCard from "@/app/components/ui/ServiceCard";
import Bounded from "@/app/components/Bounded";
import { ServiceSliceDefault } from "../../../prismicio-types";

/**
 * Props for `Service`.
 */
export type ServiceProps = SliceComponentProps<Content.ServiceSlice>;

/**
 * Component for "Service" Slices.
 */

type Service = {
  service_title: string;
  service_headline: string;
  service_image: ImageField;
  service_link: LinkField;
  serivce_description?: string;
};

const Service: FC<ServiceProps> = ({ slice }) => {
  return slice.variation === "homeService" ? (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className={`relative flex h-[30em] w-screen items-start pt-[4rem] md:h-[35em] lg:h-[44rem] lg:pb-24 2xl:justify-center max-sm:mb-20`}
    >
      <div className="relative flex h-full w-screen max-w-full gap-y-5 sm:justify-between 2xl:max-w-screen-2xl 3xl:max-w-screen-2xl max-sm:h-[30em] max-sm:flex-col">
        <h1
          className={`${secHeading} slide-in-left h-fit max-sm:max-w-[28rem]`}
          style={{ wordSpacing: "0.1em" }}
        >
          {slice.primary.title}
        </h1>
        <ServiceCard
          pagetype="homePage"
          serviceLink={slice.primary.show_all}
          cardData={slice.primary.service_data.map((item) => ({
            service_title: item.service_title ?? "",
            service_headline: item.service_headline ?? "",
            service_image: item.service_image ?? "",
            service_link: item.service_link,
          }))}
          gridClass="absolute min-w-[100vw] bottom-0 left-0 min-w-full"
          cardClass="flex h-full min-h-[25rem] w-full max-w-[355px] flex-shrink-0 snap-start flex-col items-center justify-between gap-y-2 border border-myblack-150/30 transition-all duration-300 ease-in-out sm:max-w-sm xl:max-w-[400px] 2xl:max-w-md 3xl:max-w-lg"
        />
      </div>
    </Bounded>
  ) : slice.variation === "default" ? (
    <Bounded className="flex flex-col gap-5 pb-20">
      <h1 className={`${secHeading} pt-5`}>Our Services</h1>
      {slice.variation === "default" && (
        <ServiceCard
          pagetype="services"
          serviceLink={null}
          cardData={(
            slice.primary as ServiceSliceDefault["primary"]
          ).service_data.map((item) => ({
            service_title: item.service_title ?? "",
            service_headline: item.service_headline ?? "",
            service_image: item.service_image ?? "",
            service_link: item.service_link ?? "",
            service_description: item.service_description ?? "",
          }))}
          gridClass="grid h-full place-items-center gap-x-4 gap-y-6 justify-self-center md:gap-x-6 lg:gap-y-12  xl:gap-x-12 2xl:gap-y-[4.25rem]"
          cardClass=""
        />
      )}
    </Bounded>
  ) : (
    ""
  );
};

export default Service;
