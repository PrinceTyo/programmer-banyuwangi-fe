"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import Link from "next/link";
import gsap from "gsap";

import Contactlink from "./contact-navbar";

import type { Navbar } from "@/types/strapi/single-type/navbar";

gsap.registerPlugin(ScrambleTextPlugin);

interface NavbarProps {
  data: Navbar;
}

export function DesktopNavbar({ data }: Readonly<NavbarProps>) {
  const [isCTAHovered, setIsCTAHovered] = useState(false);
  const scrambleRef = useRef<HTMLDivElement>(null);

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
    <div className="flex items-center gap-20 transition-colors duration-150">
      <div ref={scrambleRef} className="hidden md:flex space-x-8 items-center">
        {data.navigations.map((item) => (
          <Link
            key={item.url}
            href={item.url}
            className={`text-base font-jetbrains cursor-pointer min-w-15 text-center`}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {data.additionalNavigation ? (
        <div
          className="hidden md:flex items-center group/contact"
        >
          <Contactlink
            data={data.additionalNavigation}
          />
        </div>
      ) : null}
    </div>
  );
}
