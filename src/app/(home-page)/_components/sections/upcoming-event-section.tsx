"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useIsMobile, MOBILE_BREAKPOINT } from "@/hooks/use_mobile";
import { Button } from "@/components/ui/button";
import { StrapiImage } from "@/components/global/strapi-image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import gsap from "gsap";

import type { UpcomingEventSection } from "@/types/strapi/components/home-page/upcoming-event-section";

export default function UpcomingEventSection({
  data,
}: {
  data: UpcomingEventSection;
}) {
  const isMobile = useIsMobile();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const sectionHeroRef = useRef<HTMLDivElement>(null);
  const posterRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`, () => {
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
    });

    mm.add(`(min-width: ${MOBILE_BREAKPOINT}px)`, () => {
      gsap.set(sectionHeroRef.current, {
        backgroundPosition: "40px 17px, 0 0",
      });
      gsap
        .timeline()
        .fromTo(titleRef.current, { y: -100 }, { y: 0, ease: "power1.inOut" })
        .fromTo(
          subtitleRef.current,
          { x: -100 },
          { x: 0, ease: "power1.inOut" }
        )
        .fromTo(
          paragraphRef.current,
          { x: -100 },
          { x: 0, ease: "power1.inOut" },
          "<"
        )
        .fromTo(
          posterRef.current,
          { xPercent: 100 },
          { xPercent: 0, ease: "power1.inOut" }
        );

      ScrollTrigger.create({
        trigger: sectionHeroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 4,
        pin: true,
        animation: gsap.timeline().to(sectionHeroRef.current, {
          backgroundPosition: "40px -250px, 0 0",
          ease: "none",
          scrollTrigger: {
            trigger: sectionHeroRef.current,
            start: "top top",
            end: "+=200%",
            scrub: 4,
          },
        }),
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionHeroRef.current,
          start: "top top",
          end: "80% top",
          scrub: true,
        },
      });

      timeline.to(titleRef.current, {
        opacity: 0,
        y: -300,
        ease: "circ.in",
        duration: 1.5,
      });

      timeline.to(
        subtitleRef.current,
        {
          opacity: 0,
          y: -300,
          ease: "circ.in",
          duration: 1.5,
        },
        "<"
      );

      timeline.to(
        paragraphRef.current,
        {
          opacity: 0,
          y: -300,
          ease: "circ.in",
          duration: 1.5,
        },
        "<"
      );

      timeline.to(
        posterRef.current,
        { opacity: 0, x: 300, ease: "circ.in", duration: 1.5 },
        "<"
      );
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

      {isMobile ? (
        <div className="min-h-screen relative w-full flex flex-col space-y-6 pt-16 p-6 z-10">
          <h2
            ref={titleRef}
            className="text-4xl font-bold text-transparent text-outline-black"
          >
            Upcoming Event
          </h2>
          <StrapiImage
            ref={posterRef}
            src={data.poster}
            className="w-96 h-full object-contain"
            alt="Upcoming Event Poster"
            size="medium"
          />
          <h3
            ref={subtitleRef}
            className="text-2xl font-semibold text-white bg-black inline-bg px-3 leading-relaxed"
          >
            {data.heading}
          </h3>
          <p
            ref={paragraphRef}
            className="font-medium text-xs text-gray-600"
          >
            {data.description}
          </p>
          {data.linkButton && (
            <Button
              variant="outline"
              className="mt-6 bg-transparent text-black hover:bg-white/15 border-black"
              asChild
            >
              <Link href={data.linkButton.url} prefetch={false} target="_blank">
                {data.linkButton.label}
              </Link>
            </Button>
          )}
        </div>
      ) : (
        <div className="relative min-h-screen w-full flex items-center mx-auto sm:max-w-[576px] md:max-w-[768px] lg:max-w-[992px] xl:max-w-[1200px] 2xl:max-w-[1400px]">
          <div>
            <h2
              ref={titleRef}
              className="text-7xl lg:text-8xl font-bold text-transparent text-outline-black mb-12"
            >
              Upcoming Event
            </h2>

            <h3
              ref={subtitleRef}
              className="mb-5 w-fit h-fit text-2xl md:text-4xl font-semibold text-white bg-black px-3 leading-relaxed md:leading-14"
            >
              {data.heading}
            </h3>
            <p
              ref={paragraphRef}
              className="text-start text-gray-500 relative lg:max-w-1/2 font-medium text-xs"
            >
              {data.description}
            </p>
            {data.linkButton && (
              <Button
                variant="outline"
                className="mt-6 bg-transparent text-black hover:bg-white/15 border-black"
                asChild
              >
                <Link
                  href={data.linkButton.url}
                  prefetch={false}
                  target="_blank"
                >
                  {data.linkButton.label}
                </Link>
              </Button>
            )}
          </div>
          <div>
            <StrapiImage
              ref={posterRef}
              src={data.poster}
              className="w-96 h-full object-contain"
              alt="Upcoming Event Poster"
              size="medium"
            />
          </div>
        </div>
      )}
    </div>
  );
}
