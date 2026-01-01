import { extendedFetch } from "./base";

import type { StrapiResponse } from "@/types/strapi/contract/response";
import type { Global as GlobalType } from "@/types/strapi/single-type/global";

export async function getGlobal(): Promise<StrapiResponse<GlobalType>> {
  const response = await extendedFetch("/global");

  return await response.json();
}
