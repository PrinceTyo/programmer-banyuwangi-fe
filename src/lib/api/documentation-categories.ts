import { extendedFetch } from "./base";

import type { StrapiResponse } from "@/types/strapi/contract/response";
import type { DocumentationCategory } from "@/types/strapi/models/documentation-category";

export async function getDocumentationCategories(): Promise<
  StrapiResponse<DocumentationCategory[]>
> {
  const response = await extendedFetch("/documentation-categories");

  return await response.json();
}

export async function getDocumentationCategory(
  slug: string
): Promise<StrapiResponse<DocumentationCategory>> {
  const response = await extendedFetch(`/documentation-categories/${slug}`);

  return await response.json();
}
