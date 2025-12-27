import type { StrapiImage } from "@/types/strapi/media/image";

export interface Event {
  title: string;
  description?: string;
  speaker: string;
  photo: StrapiImage;
}
