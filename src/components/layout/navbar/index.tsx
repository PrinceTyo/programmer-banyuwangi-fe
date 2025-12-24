"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNavbar } from "./mobile-navbar";
import { navbarData } from "@/lib/data/navbar";

export default function Navbar() {
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
      if (box.top <= 0 && box.bottom >= 100) {
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
  const btnBorder = isDark ? "border-black" : "border-white";
  const btnHover = isDark
    ? "hover:bg-black hover:text-white"
    : "hover:bg-white hover:text-black";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-transparent ${navStyle} transition-colors duration-300`}
    >
      <div className="mx-auto py-6 px-6 md:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold font-ibm">
            <Link href="/">CProgammer</Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {navbarData.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base transition font-ibm"
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <div
              className={`border ${btnBorder} ${btnHover} transition-colors duration-300 px-4 py-2 rounded-full`}
            >
              <Link
                href={navbarData.ctaButton.href}
                className="text-sm font-light transition font-ibm"
              >
                {navbarData.ctaButton.label}
              </Link>
            </div>
          </div>

          <div className="md:hidden cursor-pointer">
            <MobileNavbar />
          </div>
        </div>
      </div>
    </nav>
  );
}
