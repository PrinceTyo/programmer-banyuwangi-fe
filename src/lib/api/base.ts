import type { StrapiFilters } from "@/types/strapi/contract/filter";
import type { StrapiPopulate } from "@/types/strapi/contract/populate";
import qs from "qs";

interface StrapiPaginationOptions {
  page?: number;
  pageSize?: number;
  withCount?: boolean;
}

export interface ExtendedParams<T> {
  init?: RequestInit;
  populate?: StrapiPopulate<T>;
  sort?: string[];
  filters?: StrapiFilters<T>;
  pagination?: StrapiPaginationOptions;
  raiseError?: boolean;
}

export async function extendedFetch<T>(
  input: string | URL | Request,
  params: ExtendedParams<T> = {
    raiseError: true,
  }
): Promise<Response> {
  const queryParams: Record<string, any> = {};

  if (params?.populate) {
    queryParams["populate"] = params.populate;
  }

  if (params?.sort) {
    queryParams["sort"] = params.sort;
  }

  if (params?.filters) {
    queryParams["filters"] = params.filters;
  }

  if (params?.pagination) {
    queryParams["pagination"] = params.pagination;
  }

  const query = qs.stringify(queryParams);

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  const response = await fetch(
    `${baseUrl}${input}${query ? `?${query}` : ""}`,
    params?.init
  );

  if (!response.ok && params?.raiseError) {
    throw new Error(
      `Failed to fetch data : ${response.status} ${response.statusText}`
    );
  }

  return response;
}
