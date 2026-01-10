import { extendedFetch } from "./base";

import type { StrapiResponse } from "@/types/strapi/contract/response";
import type { Documentation } from "@/types/strapi/models/documentation";

export async function getDocumentations(): Promise<
  StrapiResponse<Documentation[]>
> {
  const response = await extendedFetch("/documentations");

  return await response.json();
}

export async function getDocumentationsByCategory(
  category: string
): Promise<StrapiResponse<Documentation[]>> {
  const response = await extendedFetch(
    `/documentation-categories/${category}/items`
  );

  return await response.json();
}

export async function getDocumentationsCount(): Promise<
  StrapiResponse<{ count: number }>
> {
  const response = await extendedFetch("/documentations/count");

  return await response.json();
}

export async function getDocumentation(
  slug: string
): Promise<StrapiResponse<Documentation>> {
  const response = await extendedFetch(`/documentations/${slug}`);

  return await response.json();
}
