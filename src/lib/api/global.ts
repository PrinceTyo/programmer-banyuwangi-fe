import { extendedFetch } from "./base";

import type { Global as GlobalType } from "@/types/strapi/single-type/global";

export async function getGlobal(): Promise<GlobalType> {
  const response = await extendedFetch("/global");

  return await response.json();
}
