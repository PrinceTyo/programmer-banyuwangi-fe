"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { IoChevronDown } from "react-icons/io5";
import gsap from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export default function FooterLink() {
  const scrambleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const links = scrambleRef.current?.querySelectorAll("a[data-text]");

      links?.forEach((link) => {
        const handleMouseEnter = () => {
          const originalText = link.getAttribute("data-text") || link.textContent;

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
      <div className="flex flex-col items-start gap-4 text-white font-jetbrains font-medium">
        <Link
          href="/"
          className="hover:text-[#BABABA] transition-colors"
          data-text="Top"
        >
          Top
        </Link>
        <Link
          href="/"
          className="hover:text-[#BABABA] transition-colors"
          data-text="News"
        >
          News
        </Link>
        <Link
          href="/"
          className="hover:text-[#BABABA] transition-colors"
          data-text="Marks"
        >
          Marks
        </Link>
      </div>

      <div className="flex flex-col items-start gap-4 text-white font-jetbrains font-medium">
        <Link
          href="/"
          className="hover:text-[#BABABA] transition-colors"
          data-text="About"
        >
          About
        </Link>
        <Link
          href="/"
          className="hover:text-[#BABABA] transition-colors"
          data-text="stellia"
        >
          stellia
        </Link>
        <Link
          href="/"
          className="hover:text-[#BABABA] transition-colors"
          data-text="Contact"
        >
          Contact
        </Link>
      </div>

      <div className="flex flex-col items-start gap-4 font-jetbrains font-medium">
        <div className="relative group">
          <div className="text-white flex items-center gap-1">
            Links
            <IoChevronDown size={16} />
          </div>
        </div>

        <Link
          href="/"
          className="hover:text-white text-[#BABABA] transition-colors"
          data-text="TECH BLUE"
        >
          TECH BLUE
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="hover:text-white text-[#BABABA] transition-colors"
            data-text="X"
          >
            X
          </Link>
          <Link
            href="/"
            className="hover:text-white text-[#BABABA] transition-colors"
            data-text="YouTube"
          >
            YouTube
          </Link>
        </div>
      </div>
    </div>
  );
}