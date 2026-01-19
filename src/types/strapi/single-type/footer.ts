import type { AdditionalNavigation } from "@/types/strapi/components/footer/additional-navigation";
import type { NavigationGrid } from "@/types/strapi/components/shared/navigation-grid";
import type { RunningText } from "@/types/strapi/components/shared/running-text";

export interface Footer {
  backgroundText?: string;
  runningText?: RunningText;
  copyrightText: string;
  navigationGrid: NavigationGrid;
  additionalNavigation: AdditionalNavigation;
}
