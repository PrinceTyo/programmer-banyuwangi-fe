export type DocumentationCategory =
    | "ui-web"
    | "learning"
    | "collaboration"
    | "community-project";

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