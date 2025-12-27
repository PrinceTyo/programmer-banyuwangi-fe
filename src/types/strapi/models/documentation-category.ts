import type { BaseModel } from "./base-model";
import type { Documentation } from "./documentation";

export interface DocumentationCategory extends BaseModel {
  title: string;
  slug: string;
  documentations: Documentation[];
}
