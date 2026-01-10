import type { HeroSection } from "@/types/strapi/components/home-page/hero-section";
import type { Event as EventType } from "@/types/strapi/models/event";

export interface HomePage {
  heading: string;
  heroSection: HeroSection;
  eventSection: EventType[];
}
