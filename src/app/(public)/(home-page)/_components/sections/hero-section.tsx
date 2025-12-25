"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionHeroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.set(sectionHeroRef.current, {
      backgroundPosition: "10px 17px, 0 0",
    });

    gsap.to(sectionHeroRef.current, {
      backgroundPosition: "0px -250px, 0 0",
      ease: "none",
      scrollTrigger: {
        trigger: sectionHeroRef.current,
        start: "top top",
        end: "+=200%",
        scrub: 4,
      },
    });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionHeroRef.current,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 4,
      },
    });

    gsap.set(".title", { opacity: 0 });
    gsap.set(".subtitle-first", { opacity: 1 });
    gsap.set(".subtitle-second", { opacity: 0 });
    gsap.set(".paragraph-first", { opacity: 1 });
    gsap.set(".paragraph-second", { opacity: 0 });

    timeline.to(".subtitle-first", { opacity: 1, duration: 0.2 });
    timeline.to(".subtitle-first", { opacity: 0, duration: 0.4 });
    timeline.to(".paragraph-first", { opacity: 1, duration: 0.2 });
    timeline.to(".paragraph-first", { opacity: 0, duration: 0.4 });

    timeline.to(".title", { opacity: 1, duration: 0.6 }, "<");
    timeline.to(".subtitle-second", { opacity: 1, duration: 0.5 }, "<0.1");
    timeline.to(".paragraph-second", { opacity: 1, duration: 0.5 }, "<0.1");
  }, []);
  return (
    <div
      ref={sectionHeroRef}
      className="min-h-screen flex items-center justify-center bg-[#dee8eb] overflow-x-hidden"
      style={{
        backgroundImage: `
          url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M60 54L60 66M54 60L66 60' stroke='%236B7280' stroke-width='0.5' stroke-opacity='0.7'/%3E%3C/g%3E%3C/svg%3E"),
          url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M15 15L15 0M15 15L30 15M15 15L15 30M15 15L0 15' stroke='%23cccccc' stroke-width='0.5' stroke-opacity='0.6'/%3E%3C/g%3E%3C/svg%3E")
        `,
      }}
    >
      <div className="min-w-screen min-h-screen grid grid-cols-2 grid-rows-3 gap-4 p-30">
        <div className="col-span-2 align-top">
          <h1 className="title text-8xl font-bold text-transparent text-outline-black">
            VISION
          </h1>
        </div>
        <div className="row-start-2 grid items-center text-start">
          <div>
            <h1 className="subtitle-first text-4xl font-semibold text-white bg-black inline-bg px-3 leading-14">
              So for now, it's only me In engineering we trust
            </h1>
          </div>
        </div>
        <div className="row-start-2 grid items-center text-end">
          <div>
            <h1 className="subtitle-second text-4xl font-semibold text-white bg-black inline-bg px-3 leading-14">
              Dan mungkin bila nanti, kita kan bertemu lagi
            </h1>
          </div>
        </div>
        <div className="text-start text-gray-500 relative">
          <p className="paragraph-first absolute max-w-1/2 font-medium text-xs">
            Bahwa aku pernah dicintai, Seada-adanya, Sekurang-kurangnya
          </p>
          <p className="paragraph-second absolute max-w-1/2 font-medium text-xs">
            How can i move on, When i'm still love you?
          </p>
        </div>
      </div>
    </div>
  );
}
