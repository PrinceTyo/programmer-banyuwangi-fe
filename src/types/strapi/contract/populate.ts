type PopulateField<T> = IsScalar<T> extends true
  ? never
  : IsArray<T> extends true
  ? { populate: StrapiPopulate<ArrayElement<T>> } | true
  : { populate: StrapiPopulate<T> } | true;

export type StrapiPopulate<T> = {
  [K in keyof T as IsScalar<T[K]> extends true ? never : K]?: PopulateField<
    T[K]
  >;
};
