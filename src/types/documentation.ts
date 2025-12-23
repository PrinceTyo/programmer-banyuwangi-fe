export type DocumentationCategory =
    | "figma"
    | "website"
    | "desktop"
    | "mobile"
    | "unreal-engine"
    | "unity"
    | "branding"
    | "ui-ux";

export interface Documentation {
    id: string;
    slug: string;
    title: string;
    date: string;
    categories: DocumentationCategory[];
    thumbnail: string;
    description?: string;
    images?: string[];
    client?: string;
}

export interface CategoryInfo {
    slug: string;
    label: string;
    count: number;
}