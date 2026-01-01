import { extendedFetch } from "./base";

import type { StrapiResponse } from "@/types/strapi/contract/response";
import type { Navbar } from "@/types/strapi/single-type/navbar";

export async function getNavbar(): Promise<StrapiResponse<Navbar>> {
  const response = await extendedFetch("/navbar");

  return await response.json();
}
