export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

type StrapiMeta = {
  pagination?: StrapiPagination;
};

export type StrapiResponse<
  T,
  WithMeta extends boolean = true
> = WithMeta extends true
  ? {
      data: T;
      meta: StrapiMeta;
    }
  : {
      data: T;
      meta: null;
    };
