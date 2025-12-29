import type { Documentation } from "@/types/strapi/models/documentation";
import type { Section } from "@/types/strapi/components/shared/section";

export interface HeroSection {
  firstSection?: Section;
  secondSection?: Section;
  documentations: Documentation[];
}
