import { extendedFetch } from "./base";

import type { StrapiResponse } from "@/types/strapi/contract/response";
import type { HomePage } from "@/types/strapi/single-type/home-page";

export async function getHomePage(): Promise<StrapiResponse<HomePage>> {
  const response = await extendedFetch("/home-page");

  return await response.json();
}
