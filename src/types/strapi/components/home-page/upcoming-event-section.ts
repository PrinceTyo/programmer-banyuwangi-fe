import type { StrapiImage } from "@/types/strapi/media";
import type { LinkButton } from "@/types/strapi/components/shared/link-button";

export interface UpcomingEventSection {
  heading: string;
  description?: string;
  poster: StrapiImage;
  linkButton?: LinkButton;
}
