import type { EventSection } from "@/types/strapi/components/home-page/event-section";
import type { HeroSection } from "@/types/strapi/components/home-page/hero-section";
import type { SubHeroSection } from "@/types/strapi/components/home-page/sub-hero-section";

export interface HomePage {
  heroSection: HeroSection;
  subHeroSection: SubHeroSection;
  eventSection: EventSection;
}
