import { extendedFetch } from "./base";

import type { Footer } from "@/types/strapi/single-type/footer";

export async function getFooter(): Promise<Footer> {
  const response = await extendedFetch("/footer");

  return await response.json();
}
