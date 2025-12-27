import type { AdditionalNavigation } from "@/types/strapi/components/footer/additional-navigation";
import type { NavigationGroup } from "@/types/strapi/components/shared/navigation-group";

export interface Footer {
  navigationGroups: NavigationGroup[];
  additionalNavigation: AdditionalNavigation;
}
