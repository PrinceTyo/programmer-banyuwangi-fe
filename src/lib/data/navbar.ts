import { NavConfig } from "@/types/navbar";
import { LuHouse, LuFileText, LuNewspaper, LuUser } from "react-icons/lu";
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from "react-icons/fi";

export const navbarData: NavConfig = {
    mainNav: [
        {
            href: "/",
            label: "Home",
            description: "Back to homepage",
            icon: LuHouse,
        },
        {
            href: "/news",
            label: "News",
            description: "Latest updates and articles",
            icon: LuNewspaper,
        },
        {
            href: "/documentation",
            label: "Documentation",
            description: "Technical guides and API references",
            icon: LuFileText,
        },
        {
            href: "/about", 
            label: "About",
            description: "Learn more about our project",
            icon: LuUser,
        },
    ],

    mobileNav: [
        {
            href: "/",
            label: "Top",
            description: "Scroll to top",
            icon: LuHouse,
        },
        {
            href: "/documentation",
            label: "Documentation",
            description: "Technical guides",
            icon: LuFileText,
        },
        {
            href: "/news", 
            label: "News",
            description: "Latest updates",
            icon: LuNewspaper,
        },
        {
            href: "/about",
            label: "About",
            description: "About us",
            icon: LuUser,
        },
    ],

    socialLinks: [
        {
            name: "INSTAGRAM",
            href: "https://www.instagram.com/",
            icon: FiInstagram,
        },
        {
            name: "FACEBOOK",
            href: "https://www.facebook.com/",
            icon: FiFacebook,
        },
        {
            name: "X",
            href: "https://twitter.com/",
            icon: FiTwitter,
        },
        {
            name: "YOUTUBE",
            href: "https://www.youtube.com/",
            icon: FiYoutube,
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