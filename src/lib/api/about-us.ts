import { extendedFetch, type ExtendedParams } from "./base";

import type { StrapiResponse } from "@/types/strapi/contract/response";
import type { AboutUs } from "@/types/strapi/single-type/about-us";

export async function getAboutUs<T>(
  params?: ExtendedParams<T>
): Promise<StrapiResponse<AboutUs>> {
  const response = await extendedFetch("/about-us", params);

  return await response.json();
}
