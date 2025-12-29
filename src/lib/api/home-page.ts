import { extendedFetch } from "./base";

import type { HomePage } from "@/types/strapi/single-type/home-page";

export async function getHomePage(): Promise<HomePage> {
  const response = await extendedFetch("/home-page");

  return await response.json();
}
