import { ImageField, LinkField } from "@prismicio/client";

export type Service = {
  service_title: string;
  service_headline: string;
  service_image: ImageField;
  service_link: LinkField;
  service_description?: string;
};

export interface ServiceCardData {
  service_title: string;
  service_headline: string;
  service_image: ImageField;
  service_link: LinkField;
  service_description?: string;
}

export interface ServiceCardProps {
  cardData: Service[]; // allow flexible input with service__link
  gridClass?: string;
  cardClass?: string;
  pagetype?: string;
  serviceLink: LinkField | null;
}

export type Benefit = {
  benefit_title: string;
  benefit_headline: string;
  benefit_image: ImageField;
};

export type BenefitCardProps = {
  cardData: Benefit[];
};
