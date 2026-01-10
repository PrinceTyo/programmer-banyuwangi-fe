import type { AdditionalNavigation } from "@/types/strapi/components/footer/additional-navigation";
import type { NavigationGrid } from "@/types/strapi/components/shared/navigation-grid";

export interface Footer {
  navigationGrid: NavigationGrid;
  additionalNavigation: AdditionalNavigation;
}
