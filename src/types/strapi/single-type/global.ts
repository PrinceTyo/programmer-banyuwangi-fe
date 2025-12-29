import type { StrapiImage } from "@/types/strapi/media/image";

export interface Global {
  siteName: string;
  siteDescription?: string;
  favicon: StrapiImage;
}
