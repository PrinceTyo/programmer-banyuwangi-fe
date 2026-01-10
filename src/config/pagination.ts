import { createSearchParamsCache, parseAsInteger } from "nuqs/server";

export const perPage = 25;
export const paginationParamsParser = {
  page: parseAsInteger.withDefault(1),
  perPage: parseAsInteger.withDefault(perPage),
};
export const paginationParamsCache = createSearchParamsCache(
  paginationParamsParser
);
