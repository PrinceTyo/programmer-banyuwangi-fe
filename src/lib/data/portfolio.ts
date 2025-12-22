import { PortfolioItem } from "@/types/portfolio";

export const portfolioData: PortfolioItem[] = [
    {
        id: "1",
        slug: "yuru-camp-project",
        title: "キャンプに行く時が来た - Yuru Camp",
        description: "Projek camping website dengan animasi interaktif",
        date: "2025-12-23",
        category: "website", 
        tags: ["Figma", "Website", "Desktop", "Mobile"],
        imageUrl: "/assets/images/image1.jpg",
        content: "Detail lengkap projek camping..."
    },
    {
        id: "2",
        slug: "mobile-ecommerce-app",
        title: "E-Commerce Mobile App",
        description: "Aplikasi e-commerce untuk platform retail",
        date: "2025-11-15",
        category: "mobile",
        tags: ["Figma", "Mobile", "React Native"],
        imageUrl: "/assets/images/image2.jpg",
    },
    {
        id: "3",
        slug: "game-development-unity",
        title: "2D Platformer Game",
        description: "Game platformer 2D dengan Unity",
        date: "2025-10-10",
        category: "game",
        tags: ["Unity", "Game", "C#"],
        imageUrl: "/assets/images/image3.jpg",
    },
];

// Kategori yang tersedia
export const categories = [
    { slug: "all", name: "ALL", count: 12 },
    { slug: "website", name: "Website", count: 5 },
    { slug: "mobile", name: "Mobile", count: 4 },
    { slug: "ui-ux", name: "UI/UX", count: 3 },
    { slug: "game", name: "Game", count: 2 },
    { slug: "branding", name: "Branding", count: 3 },
];

