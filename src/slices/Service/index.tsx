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
      className={`relative flex h-[36rem] w-screen items-start gap-y-16 py-14 sm:h-[42rem] sm:gap-y-20 lg:py-20 2xl:justify-center`}
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
        pagetype="homePage"
        serviceLink={slice.primary.show_all}
        cardData={slice.primary.service_data.map((item) => ({
          service_title: item.service_title ?? "",
          service_headline: item.service_headline ?? "",
          service_image: item.service_image ?? "",
          service_link: item.service_link,
        }))}
        gridClass="absolute w-screen max-h-[400px] bottom-4 left-[4.5%] 2xl:left-[10%] 3xl:left-[17%] w-full"
        cardClass=""
      />
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
