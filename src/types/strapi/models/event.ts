import type { BaseModel } from "./base-model";
import type { StrapiImage } from "@/types/strapi/media/image";

export interface Event extends BaseModel {
  title: string;
  description?: string;
  speaker: string;
  photo: StrapiImage;
}
