import type { Navigation } from "@/types/strapi/components/shared/navigation";
import type { StrapiImage } from "@/types/strapi/media/image";

export interface Navbar {
  brandImage: StrapiImage;
  navigations: Navigation[];
  additionalNavigation: Navigation;
}
