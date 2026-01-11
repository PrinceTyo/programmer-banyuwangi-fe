import type { BaseModel } from "./base-model";
import type { Documentation } from "./documentation";

export interface DocumentationCategory<T extends boolean = false>
  extends BaseModel {
  title: string;
  slug: string;
  documentations: T extends true
    ? {
        count: number;
      }
    : Documentation[];
}
