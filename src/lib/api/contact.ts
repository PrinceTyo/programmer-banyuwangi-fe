import { extendedFetch, type ExtendedParams } from "./base";

import type { StrapiResponse } from "@/types/strapi/contract/response";
import type { Contact } from "@/types/strapi/single-type/contact";

export async function getContact<T>(
  params?: ExtendedParams<T>
): Promise<StrapiResponse<Contact>> {
  const response = await extendedFetch("/contact", params);

  return await response.json();
}
