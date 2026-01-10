import type { BlocksContent } from "@strapi/blocks-react-renderer";
import type { LinkButton } from "@/types/strapi/components/shared/link-button";

export interface ContactInformation {
  id: number;
  information: BlocksContent;
  linkButton?: LinkButton;
}
