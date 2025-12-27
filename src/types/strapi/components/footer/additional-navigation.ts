import type { Navigation } from "@/types/strapi/components/shared/navigation";

export interface AdditionalNavigation {
  primary: Navigation<true>[];
  secondary: Navigation[];
}
