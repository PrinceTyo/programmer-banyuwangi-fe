import { NavConfig } from "@/types/navbar";

export const navbarData: NavConfig = {
    mainNav: [
        {
            href: "/blogs",
            label: "Update",
        },
        {
            href: "/documentation",
            label: "Works",
        },
        {
            href: "/about", 
            label: "About",
        },
        {
            href: "/snapshots",
            label: "Snapsots",
        },
    ],

    socialLinks: [
        {
            name: "INSTAGRAM",
            href: "https://www.instagram.com/",
        },
        {
            name: "FACEBOOK",
            href: "https://www.facebook.com/",
        },
        {
            name: "X",
            href: "https://twitter.com/",
        },
        {
            name: "YOUTUBE",
            href: "https://www.youtube.com/",
        },
    ],

    ctaButton: {
        label: "Contact / Join",
        href: "/contact", 
    },
};

export const isActivePath = (pathname: string, href: string): boolean => {
    if (href === "/") {
        return pathname === "/";
    }
    return pathname.startsWith(href);
};

export const getCurrentSection = (): string | null => {
    if (typeof window === 'undefined') return null;

    const elements = document.querySelectorAll("[id]");

    for (const el of elements) {
        const box = el.getBoundingClientRect();
        if (box.top <= 100 && box.bottom >= 100) {
            return el.getAttribute("id");
        }
    }

    return null;
};