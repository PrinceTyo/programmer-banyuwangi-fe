import type { StrapiImage } from "@/types/strapi/media/image";
import type { BaseModel } from "./base-model";

export interface Snapshot extends BaseModel {
  year: number;
  description: string;
  photos: StrapiImage[];
}
