
export interface PortfolioItem {
    id: string;
    slug: string; 
    title: string;
    description: string;
    date: string;
    category: string;
    tags: string[];
    imageUrl: string;
    content?: string;
}
