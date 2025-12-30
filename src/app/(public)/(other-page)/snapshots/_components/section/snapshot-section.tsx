"use client"

import SplitTextTitle from "@/components/split-text/split-text-title";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function SnapshotSection() {
  const snapshotsRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      ".text-snapshots",
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

    gsap.fromTo(
      ".image-snapshots",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: {
          each: 0.08,
          from: "start",
        },
        delay: 0.5,
      }
    );
  })

  return (
    <div ref={snapshotsRef} className="mx-auto max-w-9xl">
      <div className="mb-20 md:mb-26">
        <SplitTextTitle
          text="Snapshots"
          className="text-white font-geologica font-bold text-5xl md:text-8xl"
        />
      </div>

      <div className="text-snapshots flex flex-col gap-4">
        <time
          className="text-[#BABABA] text-3xl font-medium whitespace-nowrap font-jetbrains"
          dateTime="2025"
        >
          2025
        </time>
        <p className="text-white text-base text-justify font-jetbrains leading-relaxed">
          A complete redesign of an e-commerce platform focusing on user
          experience and modern design principles. The project involved creating
          intuitive navigation, improving product discovery, and implementing a
          responsive design that works seamlessly across all devices. A complete
          redesign of an e-commerce platform focusing on user experience and
          modern design principles. The project involved creating intuitive
          navigation, improving product discovery, and implementing a responsive
          design that works seamlessly across all devices. A complete redesign
          of an e-commerce platform focusing on user experience and modern
          design principles. The project involved creating intuitive navigation,
          improving product discovery, and implementing a responsive design that
          works seamlessly across all devices. A complete redesign of an
          e-commerce platform focusing on user experience and modern design
          principles. The project involved creating intuitive navigation,
          improving product discovery, and implementing a responsive design that
          works seamlessly across all devices. A complete redesign of an
          e-commerce platform focusing on user experience and modern design
          principles. The project involved creating intuitive navigation,
          improving product discovery, and implementing a responsive design that
          works seamlessly across all devices.
        </p>
      </div>

      <div className="image-snapshots mt-8 rounded-lg overflow-hidden">
        <img
          src="./assets/images/documentation/image3.png"
          alt="Modern E-commerce Website"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}
