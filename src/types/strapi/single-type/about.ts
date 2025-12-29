import type { BlocksContent } from "@strapi/blocks-react-renderer";
import type { StrapiImage } from "@/types/strapi/media/image";

export interface About {
  content: BlocksContent;
  documentations?: StrapiImage[];
}
