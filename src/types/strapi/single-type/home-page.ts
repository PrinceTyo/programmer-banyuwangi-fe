import type { HeroSection } from "@/types/strapi/components/home-page/hero-section";
import type { Event as EventType } from "@/types/strapi/models/event";
import type { UpcomingEventSection } from "@/types/strapi/components/home-page/upcoming-event-section";

export interface HomePage {
  upcomingEventSection?: UpcomingEventSection;
  heroSection: HeroSection;
  eventSection: EventType[];
}
