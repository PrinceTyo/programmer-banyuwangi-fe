export type NavItem = {
    href: string;
    label: string;
    description?: string;
    disabled?: boolean;
    external?: boolean;
    icon?: React.ComponentType<{ className?: string }>;
};

export type SocialLink = {
    name: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
};

export type NavConfig = {
    mainNav: NavItem[];
    mobileNav: NavItem[];
    socialLinks: SocialLink[];
    ctaButton: {
        label: string;
        href: string;
    };
};