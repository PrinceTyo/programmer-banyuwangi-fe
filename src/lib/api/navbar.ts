import { extendedFetch } from "./base";

import type { Navbar } from "@/types/strapi/single-type/navbar";

export async function getNavbar(): Promise<Navbar> {
  const response = await extendedFetch("/navbar");

  return await response.json();
}
