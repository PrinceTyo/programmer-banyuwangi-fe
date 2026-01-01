import { extendedFetch } from "./base";

import type { StrapiResponse } from "@/types/strapi/contract/response";
import type { Documentation } from "@/types/strapi/models/documentation";

export async function getDocumentations(): Promise<
  StrapiResponse<Documentation[]>
> {
  const response = await extendedFetch("/documentations");

  return await response.json();
}

export async function getDocumentation(
  slug: string
): Promise<StrapiResponse<Documentation>> {
  const response = await extendedFetch(`/documentations/${slug}`);

  return await response.json();
}
