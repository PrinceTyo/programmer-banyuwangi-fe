"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import gsap from "gsap";

import type { Footer } from "@/types/strapi/single-type/footer";

function splitEvenly<T>(arr: T[], n: number): T[][] {
  const result: T[][] = Array.from({ length: n }, () => []);

  arr.forEach((item, index) => {
    result[index % n].push(item);
  });

  return result;
}

export default function MainNavigation({
  navigation,
}: {
  navigation: Footer["navigationGrid"];
}) {
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
    <div
      ref={scrambleRef}
      className="grid grid-cols-3 gap-x-10 gap-y-4 w-full md:w-auto md:flex md:items-center md:justify-start"
    >
      {splitEvenly(navigation.navigations, 3).map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start gap-4 text-white font-jetbrains font-medium"
        >
          {item.map((nav) => (
            <Link
              key={nav.id
                
              }
              href={nav.url}
              className="hover:text-[#BABABA] transition-colors"
              data-text={nav.title}
            >
              {nav.title}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
