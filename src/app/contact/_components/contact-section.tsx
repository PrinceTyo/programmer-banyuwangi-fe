"use client";

import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { IoIosArrowForward } from "react-icons/io";
import gsap from "gsap";
import Link from "next/link";
import SplitTextTitle from "@/components/split-text/split-text-title";

import type { Contact } from "@/types/strapi/single-type/contact";

export default function ContactSection({ data }: Readonly<{ data: Contact }>) {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const elements = gsap.utils.selector(sectionRef.current)("contact-link");

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 30,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: {
          each: 0.08,
          from: "start",
        },
      }
    );
  });

  return (
    <div ref={sectionRef} className="w-full pb-40">
      <div className="mb-20 md:mb-32">
        <SplitTextTitle
          text={data.heading}
          className="text-white font-geologica font-bold text-5xl lg:text-7xl leading-tight max-w-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-9 gap-14 md:gap-24">
        <div className="hidden md:block md:col-span-3"></div>

        <div className="md:col-span-6 flex flex-col gap-20">
          {data.informations.map((information) => (
            <div
              key={information.id}
              className="contact-link flex flex-col gap-6 font-jetbrains"
            >
              <BlocksRenderer content={information.information} />

              {information.linkButton && (
                <Link
                  href={information.linkButton.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-white/20 hover:border-white/40 transition-colors pt-10 pb-4 w-1/2"
                >
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-bold font-jetbrains text-2xl">
                      {information.linkButton.label}
                    </span>
                    {information.linkButton.description && (
                      <span className="text-[#BABABA] font-jetbrains text-sm">
                        {information.linkButton.description}
                      </span>
                    )}
                  </div>
                  <div className="w-10 h-10 rounded-full border border-[#BABABA] flex items-center justify-center group-hover:bg-white transition-colors">
                    <IoIosArrowForward className="text-white group-hover:text-black" />
                  </div>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
