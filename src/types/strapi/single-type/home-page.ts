import type { EventSection } from "@/types/strapi/components/home-page/event-section";
import type { HeroSection } from "@/types/strapi/components/home-page/hero-section";

export interface HomePage {
  heroSection: HeroSection;
  eventSection: EventSection;
}
