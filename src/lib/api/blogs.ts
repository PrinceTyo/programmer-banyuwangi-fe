import { extendedFetch, type ExtendedParams } from "./base";

import type { StrapiResponse } from "@/types/strapi/contract/response";
import type { Blog } from "@/types/strapi/models/blog";

export async function getBlogs<T>(
  params?: ExtendedParams<T>
): Promise<StrapiResponse<Blog[]>> {
  const response = await extendedFetch("/blogs", params);

  return await response.json();
}
