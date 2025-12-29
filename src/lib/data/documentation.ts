import { Documentation, DocumentationCategory, CategoryInfo } from "@/types/documentation";

export const documents: Documentation[] = [
    {
        id: "1",
        slug: "digital-identity-web",
        title: "Digital Identity Web",
        date: "2025-09-12",
        categories: ["community-project", "ui-web", "learning"],
        thumbnail: "/assets/images/documentation/image1.jpg",
        description: `A comprehensive camping website design inspired by Yuru Camp anime series, capturing the serene essence of outdoor adventures. This design emphasizes minimalistic aesthetics blended with functional user interfaces that evoke feelings of warmth and comfort. The website features responsive layouts that adapt seamlessly from desktop to mobile, with intuitive navigation systems that guide users through campsite information, booking systems, and community features. The color palette draws inspiration from natural landscapes—soft greens, earthy browns, and sky blues—creating a visually harmonious experience that resonates with camping enthusiasts and anime fans alike. Interactive elements include weather integration, gear checklists, and virtual campfire storytelling sections.`,
    },
    {
        id: "2",
        slug: "community-event",
        title: "Community Event",
        date: "2025-09-12",
        categories: ["community-project", "ui-web", "collaboration"],
        thumbnail: "/assets/images/documentation/image1.jpg",
        description: `A comprehensive camping website design inspired by Yuru Camp anime series, capturing the serene essence of outdoor adventures. This design emphasizes minimalistic aesthetics blended with functional user interfaces that evoke feelings of warmth and comfort. The website features responsive layouts that adapt seamlessly from desktop to mobile, with intuitive navigation systems that guide users through campsite information, booking systems, and community features. The color palette draws inspiration from natural landscapes—soft greens, earthy browns, and sky blues—creating a visually harmonious experience that resonates with camping enthusiasts and anime fans alike. Interactive elements include weather integration, gear checklists, and virtual campfire storytelling sections.`,
    },
    {
        id: "3",
        slug: "community-event",
        title: "Community Event",
        date: "2025-09-12",
        categories: ["community-project", "ui-web", "collaboration"],
        thumbnail: "/assets/images/documentation/image1.jpg",
        description: `A comprehensive camping website design inspired by Yuru Camp anime series, capturing the serene essence of outdoor adventures. This design emphasizes minimalistic aesthetics blended with functional user interfaces that evoke feelings of warmth and comfort. The website features responsive layouts that adapt seamlessly from desktop to mobile, with intuitive navigation systems that guide users through campsite information, booking systems, and community features. The color palette draws inspiration from natural landscapes—soft greens, earthy browns, and sky blues—creating a visually harmonious experience that resonates with camping enthusiasts and anime fans alike. Interactive elements include weather integration, gear checklists, and virtual campfire storytelling sections.`,
    },
    {
        id: "4",
        slug: "community-event",
        title: "Community Event",
        date: "2025-09-12",
        categories: ["community-project", "ui-web", "collaboration"],
        thumbnail: "/assets/images/documentation/image1.jpg",
        description: `A comprehensive camping website design inspired by Yuru Camp anime series, capturing the serene essence of outdoor adventures. This design emphasizes minimalistic aesthetics blended with functional user interfaces that evoke feelings of warmth and comfort. The website features responsive layouts that adapt seamlessly from desktop to mobile, with intuitive navigation systems that guide users through campsite information, booking systems, and community features. The color palette draws inspiration from natural landscapes—soft greens, earthy browns, and sky blues—creating a visually harmonious experience that resonates with camping enthusiasts and anime fans alike. Interactive elements include weather integration, gear checklists, and virtual campfire storytelling sections.`,
    },
    {
        id: "5",
        slug: "digital-identity-web",
        title: "Digital Identity Web",
        date: "2025-09-12",
        categories: ["community-project", "ui-web", "learning"],
        thumbnail: "/assets/images/documentation/image1.jpg",
        description: `A comprehensive camping website design inspired by Yuru Camp anime series, capturing the serene essence of outdoor adventures. This design emphasizes minimalistic aesthetics blended with functional user interfaces that evoke feelings of warmth and comfort. The website features responsive layouts that adapt seamlessly from desktop to mobile, with intuitive navigation systems that guide users through campsite information, booking systems, and community features. The color palette draws inspiration from natural landscapes—soft greens, earthy browns, and sky blues—creating a visually harmonious experience that resonates with camping enthusiasts and anime fans alike. Interactive elements include weather integration, gear checklists, and virtual campfire storytelling sections.`,
    },
    {
        id: "6",
        slug: "digital-identity-web",
        title: "Digital Identity Web",
        date: "2025-09-12",
        categories: ["community-project", "ui-web", "learning"],
        thumbnail: "/assets/images/documentation/image1.jpg",
        description: `A comprehensive camping website design inspired by Yuru Camp anime series, capturing the serene essence of outdoor adventures. This design emphasizes minimalistic aesthetics blended with functional user interfaces that evoke feelings of warmth and comfort. The website features responsive layouts that adapt seamlessly from desktop to mobile, with intuitive navigation systems that guide users through campsite information, booking systems, and community features. The color palette draws inspiration from natural landscapes—soft greens, earthy browns, and sky blues—creating a visually harmonious experience that resonates with camping enthusiasts and anime fans alike. Interactive elements include weather integration, gear checklists, and virtual campfire storytelling sections.`,
    },
];

export function getDocumentsByCategory(category?: string): Documentation[] {
    if (!category || category === "all") {
        return documents;
    }

    return documents.filter((project) =>
        project.categories.includes(category as DocumentationCategory)
    );
}

export function getCategoryInfo(): CategoryInfo[] {
    const categoryCounts: Record<string, number> = {};

    documents.forEach((project) => {
        project.categories.forEach((category) => {
            categoryCounts[category] = (categoryCounts[category] || 0) + 1;
        });
    });

    const categories: CategoryInfo[] = [
        { slug: "all", label: "ALL", count: documents.length },
        { slug: "ui-web", label: "Ui / Web", count: categoryCounts["ui-web"] || 0 },
        { slug: "learning", label: "Learning", count: categoryCounts["learning"] || 0 },
        { slug: "collaboration", label: "Collaboration", count: categoryCounts["collaboration"] || 0 },
        { slug: "community-project", label: "Community Project", count: categoryCounts["community-project"] || 0 },
    ];

    return categories.filter((cat) => cat.count > 0 || cat.slug === "all");
}

export function getDocumentBySlug(slug: string): Documentation | undefined {
    return documents.find((project) => project.slug === slug);
}