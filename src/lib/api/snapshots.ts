import { extendedFetch, type ExtendedParams } from "./base";

import type { StrapiResponse } from "@/types/strapi/contract/response";
import type { Snapshot } from "@/types/strapi/models/snapshot";

export async function getSnapshots<T>(
  params?: ExtendedParams<T>
): Promise<StrapiResponse<Snapshot[]>> {
  const response = await extendedFetch("/snapshots", params);

  return await response.json();
}
