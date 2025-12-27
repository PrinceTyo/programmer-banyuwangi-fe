import { extendedFetch } from "./base";

import type { DocumentationCategory } from "@/types/strapi/models/documentation-category";

export async function getDocumentationCategories(): Promise<
  DocumentationCategory[]
> {
  const response = await extendedFetch("/documentation-categories");

  return await response.json();
}

export async function getDocumentationCategory(
  slug: string
): Promise<DocumentationCategory> {
  const response = await extendedFetch(`/documentation-categories/${slug}`);

  return await response.json();
}
