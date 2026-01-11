"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { StrapiImage } from "@/components/global/strapi-image";
import gsap from "gsap";
import SplitTextTitle from "@/components/split-text/split-text-title";

import type { Snapshot } from "@/types/strapi/models/snapshot";

export default function SnapshotSection({
  snapshots,
}: {
  snapshots: Snapshot[];
}) {
  const snapshotsRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!snapshotsRef.current) return;

    const textSnapshots = gsap.utils.selector(snapshotsRef.current)(
      ".text-snapshots"
    );
    const imageSnapshots = gsap.utils.selector(snapshotsRef.current)(
      ".image-snapshots"
    );

    gsap.fromTo(
      textSnapshots,
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
      imageSnapshots,
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
  });

  return (
    <div ref={snapshotsRef} className="mx-auto max-w-9xl">
      <SplitTextTitle
        text="Snapshots"
        className="mb-20 md:mb-26 text-white font-geologica font-bold text-5xl md:text-8xl"
      />

      {snapshots.map((snapshot) => (
        <section key={snapshot.id}>
          <div className="text-snapshots flex flex-col gap-4">
            <time className="text-[#BABABA] text-3xl font-medium whitespace-nowrap font-jetbrains">
              {snapshot.year}
            </time>
            <p className="text-white text-base text-justify font-jetbrains leading-relaxed">
              {snapshot.description}
            </p>
          </div>

          {snapshot.photos && (
            <div className="image-snapshots space-y-7 mt-8 rounded-lg overflow-hidden">
              {snapshot.photos.map((photo) => (
                <StrapiImage
                  key={photo.id}
                  src={photo}
                  alt={`${snapshot.year} - Snapshots`}
                  size="large"
                  className="w-full h-auto"
                />
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
