import type { AdditionalNavigation } from "@/types/strapi/components/footer/additional-navigation";
import type { NavigationGrid } from "@/types/strapi/components/shared/navigation-grid";
import type { StrapiImage } from "@/types/strapi/media";

export interface Footer {
  logo: StrapiImage;
  copyrightText: string;
  navigationGrid: NavigationGrid;
  additionalNavigation: AdditionalNavigation;
}
