"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useNavbar } from "@/context/navbar-provider";
import gsap from "gsap";

import type { HomePage } from "@/types/strapi/single-type/home-page";

export default function HeroSection({
  heroData,
}: {
  heroData: HomePage["heroSection"];
}) {
  const { setTheme } = useNavbar();
  const sectionHeroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionHeroRef) return;

    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      gsap.set(sectionHeroRef.current, {
        backgroundPosition: "50px 17px, 0 0",
      });

      gsap.to(sectionHeroRef.current, {
        backgroundPosition: "50px -250px, 0 0",
        ease: "none",
        scrollTrigger: {
          trigger: sectionHeroRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 4,
        },
      });

      gsap.set(".title", { opacity: 1 });
      gsap.set(".subtitle-first", { opacity: 1 });
      gsap.set(".subtitle-second", { opacity: 1 });
      gsap.set(".paragraph-first", { opacity: 1 });
      gsap.set(".paragraph-second", { opacity: 1 });
    });

    mm.add("(min-width: 768px)", () => {
      gsap.set(sectionHeroRef.current, {
        backgroundPosition: "40px 17px, 0 0",
      });

      gsap.to(sectionHeroRef.current, {
        backgroundPosition: "40px -250px, 0 0",
        ease: "none",
        scrollTrigger: {
          trigger: sectionHeroRef.current,
          start: "top top",
          end: "+=300%",
          scrub: 4,
        },
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionHeroRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 4,
          pinSpacing: false,
          onLeave: () => setTheme("dark"),
          onEnterBack: () => setTheme("light"),
        },
      });

      gsap.set(".title", { opacity: 0, y: 300 });
      gsap.set(".subtitle-first", { opacity: 1, y: 0 });
      gsap.set(".subtitle-second", { opacity: 0, y: 300 });
      gsap.set(".paragraph-first", { opacity: 1, y: 0 });
      gsap.set(".paragraph-second", { opacity: 0, y: 300 });

      timeline.to({}, { duration: 4 });

      timeline.to(".subtitle-first", {
        opacity: 0,
        y: -300,
        ease: "circ.in",
        duration: 1.5,
      });

      timeline.to(
        ".paragraph-first",
        {
          opacity: 0,
          y: -300,
          ease: "circ.in",
          duration: 1.5,
        },
        "-=0.4"
      );

      timeline.to(
        ".title",
        {
          opacity: 1,
          y: 0,
          ease: "circ.in",
          duration: 1.5,
        },
        "-=0.2"
      );

      timeline.to(
        ".subtitle-second",
        {
          opacity: 1,
          y: 0,
          ease: "circ.in",
          duration: 1.5,
        },
        "<0.1"
      );

      timeline.to(
        ".paragraph-second",
        {
          opacity: 1,
          y: 0,
          ease: "circ.in",
          duration: 1.5,
        },
        "<0.1"
      );

      timeline.to({}, { duration: 20 }, "<");
    });
  }, []);

  return (
    <div
      ref={sectionHeroRef}
      className="relative min-h-screen flex items-end md:items-center justify-center bg-[#dee8eb] overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M60 54L60 66M54 60L66 60' stroke='%231F2937' stroke-width='0.5' stroke-opacity='0.7'/%3E%3C/g%3E%3C/svg%3E"), 
        url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M15 15L15 0M15 15L30 15M15 15L15 30M15 15L0 15' stroke='%23A3A3A3' stroke-width='0.5' stroke-opacity='0.6'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="hero-wipe absolute inset-0 bg-[#0a0d14] transform origin-top scale-y-0 z-50" />

      <h1 className="text-[10rem] md:text-[18rem] text-transparent text-outline-hero font-bold fixed top-60 md:top-1/2 md:-translate-y-1/2 ">
        {heroData.backgroundText}
      </h1>

      {/* Mobile */}
      <div className="md:hidden relative w-full h-full">
        {heroData.firstSection && (
          <div className="min-h-screen flex flex-col justify-end p-6 pb-12">
            <div>
              <h1 className="subtitle-first text-2xl font-semibold text-white bg-black inline-bg px-3 leading-relaxed">
                {heroData.firstSection.description}
              </h1>
              <p className="paragraph-first mt-6 max-w-[80%] font-medium text-xs text-gray-600">
                {heroData.firstSection.title}
              </p>
            </div>
          </div>
        )}

        {heroData.secondSection && (
          <div className="min-h-screen flex flex-col justify-end p-6 pb-4">
            <div className="mb-6">
              <h1 className="title text-7xl font-bold text-transparent text-outline-black mb-6">
                {heroData.title}
              </h1>
              <h1 className="subtitle-second text-2xl font-semibold text-white bg-black inline-bg px-3 leading-relaxed">
                {heroData.secondSection.description}
              </h1>
              <p className="paragraph-second mt-6 max-w-[80%] font-medium text-xs text-gray-600">
                {heroData.secondSection.title}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Desktop */}
      <div className="hidden md:grid relative min-w-screen min-h-screen grid-cols-1 md:grid-cols-2 grid-rows-3 gap-4 p-6 md:p-20 lg:p-30">
        <div className="col-span-1 md:col-span-2 grid items-end md:items-center lg:items-start">
          <div className="title">
            <h1 className="text-7xl md:text-7xl lg:text-8xl font-bold text-transparent text-outline-black">
              {heroData.title}
            </h1>
          </div>
        </div>

        <div className="grid md:items-start lg:items-center text-start md:-mr-36 lg:mr-0">
          <div className="subtitle-first">
            <h1 className="text-2xl md:text-4xl font-semibold text-white bg-black inline-bg px-3 leading-relaxed md:leading-14">
              {heroData.firstSection?.title}
            </h1>
          </div>
        </div>

        <div className="grid md:items-start lg:items-center text-start md:text-end md:-ml-36 lg:ml-0">
          <div className="subtitle-second">
            <h1 className="text-2xl md:text-4xl font-semibold text-white bg-black inline-bg px-3 leading-relaxed md:leading-14">
              {heroData.secondSection?.title}
            </h1>
          </div>
        </div>

        <div className="text-start text-gray-500 relative">
          <div className="paragraph-first absolute lg:max-w-1/2">
            <p className="font-medium text-xs">
              {heroData.firstSection?.description}
            </p>
          </div>
          <div className="paragraph-second absolute lg:max-w-1/2">
            <p className="font-medium text-xs">
              {heroData.secondSection?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
