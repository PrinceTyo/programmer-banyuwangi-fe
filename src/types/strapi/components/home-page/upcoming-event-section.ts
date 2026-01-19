import type { StrapiImage } from "@/types/strapi/media";

export interface UpcomingEventSection {
  heading: string;
  description?: string;
  poster: StrapiImage;
}
