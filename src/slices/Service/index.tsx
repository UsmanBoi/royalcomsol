import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
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
      className=""
    >
      <div className="flex h-80 flex-col gap-2 bg-pink-50">
        {slice.variation === "homeService" &&
          slice.primary.service_data.map((service, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <h1>{service.service_title}</h1>
              <h2>{service.service_headline}</h2>
            </div>
          ))}
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
