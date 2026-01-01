"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { usePathname } from "next/navigation";
import { MobileNavbar } from "./mobile-navbar";
import { DesktopNavbar } from "./desktop-navbar";
import { StrapiImage } from "@/components/global/strapi-image";
import Link from "next/link";

import type { Navbar } from "@/types/strapi/single-type/navbar";

export default function Navbar({ data }: Readonly<{ data: Navbar }>) {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const rafId = useRef<number | null>(null);
  const isHome = pathname === "/";

  const checkSection = useCallback(() => {
    if (!isHome) return;

    const elements = document.querySelectorAll("[id]");
    let found = null;

    for (const el of elements) {
      const box = el.getBoundingClientRect();
      if (box.top <= 50 && box.bottom >= 100) {
        found = el.getAttribute("id");
        break;
      }
    }

    setIsDark(found === "black");
  }, [isHome]);

  const handleScroll = useCallback(() => {
    if (rafId.current) return;

    rafId.current = requestAnimationFrame(() => {
      checkSection();
      rafId.current = null;
    });
  }, [checkSection]);

  useEffect(() => {
    if (!isHome) {
      setIsDark(false);
      return;
    }

    checkSection();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isHome, handleScroll, checkSection]);

  const navStyle = isDark ? "text-black" : "text-white";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent ${navStyle} transition-colors duration-300`}
    >
      <div className="mx-auto py-6 px-6 md:px-20 flex justify-between items-center">
        <Link href="/" className="h-16">
          <StrapiImage
            src={data.brandImage}
            size="small"
            className="w-full h-full object-contain"
          />
        </Link>

        <DesktopNavbar data={data} isDark={isDark} />

        <div className="md:hidden cursor-pointer">
          <MobileNavbar data={data} />
        </div>
      </div>
    </nav>
  );
}
