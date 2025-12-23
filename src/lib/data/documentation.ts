import { Documentation, DocumentationCategory, CategoryInfo } from "@/types/documentation";

export const documents: Documentation[] = [
    {
        id: "1",
        slug: "yuru-camp-website",
        title: "キャンプに行く時が来た - Yuru Camp。",
        date: "2025-12-23",
        categories: ["figma", "website", "desktop", "mobile"],
        thumbnail: "/assets/images/image1.jpg",
        description: `A comprehensive camping website design inspired by Yuru Camp anime series, capturing the serene essence of outdoor adventures. This design emphasizes minimalistic aesthetics blended with functional user interfaces that evoke feelings of warmth and comfort. The website features responsive layouts that adapt seamlessly from desktop to mobile, with intuitive navigation systems that guide users through campsite information, booking systems, and community features. The color palette draws inspiration from natural landscapes—soft greens, earthy browns, and sky blues—creating a visually harmonious experience that resonates with camping enthusiasts and anime fans alike. Interactive elements include weather integration, gear checklists, and virtual campfire storytelling sections.`,
    },
    {
        id: "2",
        slug: "game-dashboard-unity",
        title: "Adventure Quest - Game Dashboard",
        date: "2025-11-15",
        categories: ["unity", "ui-ux", "desktop"],
        thumbnail: "/assets/images/image1.jpg",
        description: `An interactive game dashboard built with Unity engine, designed to enhance player engagement through data visualization and real-time statistics tracking. The dashboard features a dynamic interface that displays character progression, quest completion rates, inventory management, and social connectivity metrics. Designed with RPG enthusiasts in mind, the system incorporates customizable widgets, achievement trackers, and guild management tools. The visual design combines medieval fantasy aesthetics with modern UI principles, utilizing rich textures, animated transitions, and contextual tooltips. Performance optimization ensures smooth operation even during intensive gaming sessions, with backend integration for cloud saves and cross-platform synchronization.`,
    },
    {
        id: "3",
        slug: "mobile-banking-app",
        title: "Modern Banking Experience",
        date: "2025-10-08",
        categories: ["figma", "mobile", "ui-ux"],
        thumbnail: "/assets/images/image1.jpg",
        description: `A clean and intuitive mobile banking application design that transforms complex financial operations into simple, user-friendly interactions. This design focuses on security, accessibility, and speed, featuring biometric authentication, real-time transaction monitoring, and AI-powered financial insights. The interface utilizes a sophisticated color scheme of deep blues and clean whites, with subtle gradients and micro-interactions that guide users through transactions, bill payments, savings goals, and investment tracking. Accessibility features include high-contrast modes, voice navigation support, and customizable text sizes. The design system ensures consistency across all banking modules while maintaining regulatory compliance and building user trust through transparent information architecture.`,
    },
    {
        id: "4",
        slug: "ecommerce-platform",
        title: "E-Commerce Platform Redesign",
        date: "2025-09-20",
        categories: ["website", "figma", "desktop", "mobile"],
        thumbnail: "/assets/images/image1.jpg",
        description: `A complete redesign of an e-commerce platform with meticulous focus on user experience and conversion optimization. This comprehensive design system includes product discovery enhancements, streamlined checkout processes, and personalized recommendation engines. The platform features advanced filtering systems, 360-degree product views, augmented reality try-on functionality, and social proof integration. Designed for scalability, the interface maintains visual consistency across thousands of product categories while loading efficiently on all devices. Key innovations include a progressive cart system that follows users throughout their journey, intelligent search with visual recognition, and a customer service chatbot integrated directly into the shopping experience. Analytics dashboards provide merchants with insights into customer behavior and sales performance.`,
    },
    {
        id: "5",
        slug: "vr-showroom-unreal",
        title: "Virtual Reality Showroom",
        date: "2025-08-12",
        categories: ["unreal-engine", "desktop"],
        thumbnail: "/assets/images/image1.jpg",
        description: `An immersive VR showroom experience built with Unreal Engine, revolutionizing how products are presented and experienced in virtual spaces. This photorealistic environment allows users to interact with products in life-like settings, with dynamic lighting, physics-based interactions, and spatial audio that creates a truly immersive experience. Features include customizable environments (from minimalist studios to elaborate themed settings), real-time product configuration, multi-user collaboration spaces, and detailed inspection tools with measurement capabilities. The system supports various input methods including VR controllers, hand tracking, and traditional navigation for accessibility. Optimized for high-performance rendering, the showroom maintains stable frame rates while displaying complex materials and textures with ray-traced lighting effects.`,
    },
    {
        id: "6",
        slug: "brand-identity-tech",
        title: "Tech Startup Branding",
        date: "2025-07-05",
        categories: ["branding", "figma"],
        thumbnail: "/assets/images/image1.jpg",
        description: `A complete brand identity system for an innovative tech startup, establishing visual cohesion across all touchpoints from digital platforms to physical collateral. The branding encompasses logo design with multiple lockups, a comprehensive color palette balancing technical blue tones with energetic accents, and a custom typography system combining geometric sans-serifs for headlines with highly readable body fonts. Brand applications include website design, mobile app interfaces, presentation templates, stationery systems, packaging, and environmental graphics. The identity system is built with scalability in mind, featuring modular design elements that can adapt to future product launches and market expansions. Brand guidelines document usage rules, animation principles, voice and tone recommendations, and implementation examples across various media.`,
    },
    {
        id: "7",
        slug: "fitness-mobile-app",
        title: "Fitness Tracking Application",
        date: "2025-06-18",
        categories: ["mobile", "ui-ux", "figma"],
        thumbnail: "/assets/images/image1.jpg",
        description: `A comprehensive fitness tracking application with integrated social features, designed to motivate users through community engagement and personalized goal setting. The app combines workout planning, nutrition tracking, progress monitoring, and social connectivity in a seamless interface. Key features include AI-generated workout routines based on fitness levels and goals, integration with wearable devices for real-time biometric tracking, video demonstration libraries with proper form guidance, and challenge systems that encourage friendly competition. The social platform allows users to share achievements, join interest-based groups, and participate in virtual events. Visual design utilizes vibrant, energetic colors with clear data visualization through charts and graphs that make progress tracking intuitive and rewarding.`,
    },
    {
        id: "8",
        slug: "portfolio-website-creative",
        title: "Creative Portfolio Website",
        date: "2025-05-22",
        categories: ["website", "desktop", "mobile"],
        thumbnail: "/assets/images/image1.jpg",
        description: `An elegant portfolio website designed specifically for creative professionals, showcasing work in an immersive, narrative-driven format. The design emphasizes visual storytelling with full-screen project presentations, smooth scroll-triggered animations, and dynamic content loading that creates a cinematic browsing experience. Features include customizable project galleries with filtering by medium and technique, case study presentations that detail creative processes, client testimonial integrations, and a blog system for sharing industry insights. The responsive design ensures optimal viewing on all devices, with attention to loading performance for image-heavy content. Interactive elements like hover states, parallax scrolling, and micro-interactions engage visitors while maintaining focus on the creative work itself. Contact systems include project inquiry forms with file upload capabilities and integration with calendar scheduling.`,
    },
    {
        id: "9",
        slug: "game-ui-unity",
        title: "RPG Game Interface Design",
        date: "2025-04-10",
        categories: ["unity", "ui-ux", "desktop"],
        thumbnail: "/assets/images/image1.jpg",
        description: `A fantasy RPG game interface with medieval aesthetics, designed to immerse players in a rich narrative world while providing intuitive access to complex game systems. The UI combines hand-crafted textures, ornate borders, and parchment-like backgrounds with modern interaction patterns. Key interface components include a dynamic health and mana orb system, skill trees with interconnected node visuals, inventory management with drag-and-drop functionality, quest journals with animated maps, and dialogue systems with character portraits and mood indicators. The design maintains readability during fast-paced combat through strategic use of color coding, iconography, and spatial organization. All elements are built as reusable Unity components with animation controllers for state transitions, supporting localization for global distribution and accessibility options for color-blind players.`,
    },
    {
        id: "10",
        slug: "restaurant-booking-app",
        title: "Restaurant Reservation System",
        date: "2025-03-15",
        categories: ["mobile", "website", "figma"],
        thumbnail: "/assets/images/image1.jpg",
        description: `A seamless restaurant booking experience across multiple platforms, designed to simplify reservation management for both customers and restaurant staff. The system features intelligent table management with real-time availability visualization, waitlist functionality with estimated seating times, and special occasion recognition for birthdays and anniversaries. For customers, the interface provides restaurant discovery with advanced filtering by cuisine, ambiance, price range, and dietary accommodations, along with menu previews and photo galleries. The restaurant dashboard includes reservation analytics, customer preference tracking, and integration with point-of-sale systems. Design considerations prioritize accessibility with clear typography, high contrast elements for low-light restaurant viewing, and multi-language support for international tourists.`,
    },
    {
        id: "11",
        slug: "architectural-viz-unreal",
        title: "Architectural Visualization",
        date: "2025-02-28",
        categories: ["unreal-engine", "desktop"],
        thumbnail: "/assets/images/image1.jpg",
        description: `Photorealistic architectural visualization in Unreal Engine, creating immersive walkthroughs of architectural designs before construction begins. This system leverages advanced rendering techniques including ray tracing, global illumination, and dynamic weather systems to simulate realistic lighting conditions throughout the day and across seasons. Interactive features allow clients to customize materials, furniture layouts, and lighting scenarios in real-time. The visualization includes both interior and exterior environments with accurate scale, material properties, and acoustical simulations. Navigation options range from free exploration to guided tours with narrative voiceovers. Integration with BIM data ensures architectural accuracy while maintaining artistic control over visual presentation, making it an invaluable tool for client presentations, marketing materials, and design validation.`,
    },
    {
        id: "12",
        slug: "saas-dashboard-design",
        title: "SaaS Analytics Dashboard",
        date: "2025-01-20",
        categories: ["website", "figma", "ui-ux", "desktop"],
        thumbnail: "/assets/images/image1.jpg",
        description: `A data-driven dashboard for SaaS analytics platforms, transforming complex datasets into actionable insights through elegant visualization and intuitive interaction design. The dashboard features modular widgets that users can customize based on their role and priorities, with drag-and-drop reorganization and resizing capabilities. Key visualization components include interactive time-series graphs, heat maps for user engagement patterns, funnel analysis for conversion tracking, and cohort comparisons. The design system prioritizes information hierarchy with consistent typographic scale, strategic color usage for data differentiation, and progressive disclosure of detailed metrics. Real-time data streaming is indicated through subtle animations without distracting from core information. Accessibility features include keyboard navigation, screen reader compatibility, and export options for all visualizations in multiple formats.`,
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
        { slug: "figma", label: "Figma", count: categoryCounts["figma"] || 0 },
        { slug: "website", label: "Website", count: categoryCounts["website"] || 0 },
        { slug: "desktop", label: "Desktop", count: categoryCounts["desktop"] || 0 },
        { slug: "mobile", label: "Mobile", count: categoryCounts["mobile"] || 0 },
        { slug: "unreal-engine", label: "Unreal Engine", count: categoryCounts["unreal-engine"] || 0 },
        { slug: "unity", label: "Unity", count: categoryCounts["unity"] || 0 },
        { slug: "branding", label: "Branding", count: categoryCounts["branding"] || 0 },
        { slug: "ui-ux", label: "UI/UX", count: categoryCounts["ui-ux"] || 0 },
    ];

    return categories.filter((cat) => cat.count > 0 || cat.slug === "all");
}

export function getDocumentBySlug(slug: string): Documentation | undefined {
    return documents.find((project) => project.slug === slug);
}