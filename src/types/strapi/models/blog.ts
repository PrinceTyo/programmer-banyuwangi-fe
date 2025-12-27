import type { BlocksContent } from "@strapi/blocks-react-renderer";
import type { StrapiImage } from "@/types/strapi/media/image";
import type { BaseModel } from "./base-model";

export interface Blog extends BaseModel {
  title: string;
  slug: string;
  content: BlocksContent;
  cover: StrapiImage;
}
