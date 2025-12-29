export type NavItem = {
    href: string;
    label: string;
};

export type SocialLink = {
    name: string;
    href: string;
};

export type NavConfig = {
    mainNav: NavItem[];
    socialLinks: SocialLink[];
    ctaButton: {
        label: string;
        href: string;
    };
};