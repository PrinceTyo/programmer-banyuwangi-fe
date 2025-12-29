"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import Contactlink from "./deskop-navbar/contact-navbar";
import { NavConfig } from "@/types/navbar";

gsap.registerPlugin(ScrambleTextPlugin);

interface NavbarProps {
  navbarData: NavConfig;
  isDark: boolean;
}

export function DesktopNavbar({ navbarData, isDark }: NavbarProps) {
  const scrambleRef = useRef<HTMLDivElement>(null);
  const [isCTAHovered, setIsCTAHovered] = useState(false);
  const textColor = isDark ? "text-black" : "text-white";

  useGSAP(
    () => {
      const links = scrambleRef.current?.querySelectorAll("a[data-text]");

      links?.forEach((link) => {
        const handleMouseEnter = () => {
          const originalText =
            link.getAttribute("data-text") || link.textContent;

          gsap.to(link, {
            duration: 0.6,
            scrambleText: {
              text: originalText,
              chars: "upperCase",
              revealDelay: 0.3,
            },
            ease: "none",
          });
        };

        link.addEventListener("mouseenter", handleMouseEnter);
      });

      return () => {
        links?.forEach((link) => {
          link.removeEventListener("mouseenter", () => {});
        });
      };
    },
    { scope: scrambleRef }
  );

  return (
    <div className="flex items-center gap-20">
      <div ref={scrambleRef} className="hidden md:flex space-x-8 items-center">
        {navbarData.mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            data-text={item.label}
            className={`text-base font-ibm cursor-pointer min-w-15 text-center ${textColor} transition-colors`}
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
    </div>
  );
}
