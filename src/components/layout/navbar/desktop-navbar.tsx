"use client";

import { useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Contactlink from "./deskop-navbar/contact-navbar";

interface DesktopNavbarProps {
  navbarData: any;
  isDark: boolean;
}

export function DesktopNavbar({ navbarData, isDark }: DesktopNavbarProps) {
  const CHARS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

  const [isCTAHovered, setIsCTAHovered] = useState(false);
  const textColor = isDark ? "text-black" : "text-white";

  useGSAP(() => {
    const navLinks = gsap.utils.toArray(".nav-link") as HTMLAnchorElement[];

    navLinks.forEach((link) => {
      const originalText = link.textContent || "";

      link.addEventListener("mouseenter", () => {
        gsap.killTweensOf(link);

        const tl = gsap.timeline();

        tl.to(link, {
          duration: 0.8,
          onUpdate: function () {
            const progress = this.progress();
            let result = "";
            for (let i = 0; i < originalText.length; i++) {
              if (Math.random() < progress) {
                result += originalText[i];
              } else {
                result += CHARS[Math.floor(Math.random() * CHARS.length)];
              }
            }
            link.textContent = result;
          },
          ease: "power3.out",
          onComplete: () => {
            link.textContent = originalText;
          },
        });
      });
    });
  }, []);

  return (
    <>
      <div className="hidden md:flex space-x-8 items-center">
        {navbarData.mainNav.map((item: any) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-base font-ibm cursor-pointer min-w-15 text-center nav-link ${textColor}`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div
        className="hidden md:flex items-center"
        onMouseEnter={() => setIsCTAHovered(true)}
        onMouseLeave={() => setIsCTAHovered(false)}
      >
        <Contactlink
          navbarData={navbarData}
          isDark={isDark}
          isHovered={isCTAHovered}
        />
      </div>
    </>
  );
}
