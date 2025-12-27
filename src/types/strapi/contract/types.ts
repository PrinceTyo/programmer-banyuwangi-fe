type ScalarTypes = string | number | boolean | Date | null | undefined;
type IsScalar<T> = T extends ScalarTypes ? true : false;
type IsArray<T> = T extends Array<any> ? true : false;
type ArrayElement<T> = T extends Array<infer U> ? U : never;
