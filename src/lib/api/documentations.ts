import { extendedFetch, type ExtendedParams } from "./base";

import type { StrapiResponse } from "@/types/strapi/contract/response";
import type { Documentation } from "@/types/strapi/models/documentation";

export async function getDocumentations<T>(
  params?: ExtendedParams<T>
): Promise<StrapiResponse<Documentation[]>> {
  const response = await extendedFetch("/documentations", params);

  return await response.json();
}

export async function getDocumentationsByCategory<T>(
  category: string,
  params?: ExtendedParams<T>
): Promise<StrapiResponse<Documentation[]>> {
  const response = await extendedFetch(
    `/documentation-categories/${category}/documentations`,
    params
  );

  return await response.json();
}

export async function getDocumentationsCount(): Promise<
  StrapiResponse<{ total: number }>
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
