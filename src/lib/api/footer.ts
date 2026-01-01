import { extendedFetch } from "./base";

import type { StrapiResponse } from "@/types/strapi/contract/response";
import type { Footer } from "@/types/strapi/single-type/footer";

export async function getFooter(): Promise<StrapiResponse<Footer>> {
  const response = await extendedFetch("/footer");

  return await response.json();
}
