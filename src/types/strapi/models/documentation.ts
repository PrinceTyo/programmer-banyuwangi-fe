import type { StrapiImage } from "@/types/strapi/media/image";
import type { BaseModel } from "./base-model";
import type { DocumentationCategory } from "./documentation-category";

export interface Documentation extends BaseModel {
  title: string;
  slug: string;
  description?: string;
  date: string;
  photos: StrapiImage[];
  documentation_categories: DocumentationCategory[];
}
