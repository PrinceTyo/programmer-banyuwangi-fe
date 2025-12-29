type StringOperators = {
  $eq?: string;
  $eqi?: string;
  $ne?: string;
  $nei?: string;
  $lt?: string;
  $lte?: string;
  $gt?: string;
  $gte?: string;
  $in?: string[];
  $notIn?: string[];
  $contains?: string;
  $notContains?: string;
  $containsi?: string;
  $notContainsi?: string;
  $startsWith?: string;
  $startsWithi?: string;
  $endsWith?: string;
  $endsWithi?: string;
  $null?: boolean;
  $notNull?: boolean;
};

type NumberOperators = {
  $eq?: number;
  $ne?: number;
  $lt?: number;
  $lte?: number;
  $gt?: number;
  $gte?: number;
  $in?: number[];
  $notIn?: number[];
  $between?: [number, number];
  $null?: boolean;
  $notNull?: boolean;
};

type BooleanOperators = {
  $eq?: boolean;
  $ne?: boolean;
  $null?: boolean;
  $notNull?: boolean;
};

type DateOperators = {
  $eq?: Date | string;
  $ne?: Date | string;
  $lt?: Date | string;
  $lte?: Date | string;
  $gt?: Date | string;
  $gte?: Date | string;
  $in?: (Date | string)[];
  $notIn?: (Date | string)[];
  $between?: [Date | string, Date | string];
  $null?: boolean;
  $notNull?: boolean;
};

type OperatorsForType<T> = T extends string
  ? StringOperators
  : T extends number
  ? NumberOperators
  : T extends boolean
  ? BooleanOperators
  : T extends Date
  ? DateOperators
  : never;

type LogicalOperators<T> = {
  $and?: StrapiFilters<T>[];
  $or?: StrapiFilters<T>[];
  $not?: StrapiFilters<T>;
};

type FieldFilter<T> = IsScalar<T> extends true
  ? T | OperatorsForType<T>
  : IsArray<T> extends true
  ? StrapiFilters<ArrayElement<T>>
  : StrapiFilters<T>;

export type StrapiFilters<T> = {
  [K in keyof T]?: FieldFilter<T[K]>;
} & LogicalOperators<T>;
