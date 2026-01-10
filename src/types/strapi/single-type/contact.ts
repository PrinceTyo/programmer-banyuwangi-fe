import type { ContactInformation } from "@/types/strapi/components/contact/contact-information";

export interface Contact {
  heading: string;
  informations: ContactInformation[];
}
