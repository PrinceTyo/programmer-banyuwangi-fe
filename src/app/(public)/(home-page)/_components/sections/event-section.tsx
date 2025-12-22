"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { events } from "@/lib/data-dummy/events";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function EventSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesWrapperRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useGSAP(() => {
    if (!sectionRef.current || !imagesWrapperRef.current) return;

    const wrapper = imagesWrapperRef.current;

    imageRefs.current.forEach((image) => {
      if (image) {
        gsap.set(image, {
          transformPerspective: 1600,
          rotateY: 0,
          z: 0,
          scale: 1,
        });
      }
    });

    const targetPositionLeft = window.innerWidth * 0.02;

    const imageWidth = window.innerWidth * 0.6;
    const gap = 464;
    const stepDistance = imageWidth + gap;

    const totalSteps = events.length;
    const stepSize = 1 / totalSteps;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${window.innerHeight * (events.length + 1)}`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        snap: {
          snapTo: 1 / events.length,
          duration: 0.5,
          ease: "power2.inOut",
        },
        onUpdate: (self) => {
          imageRefs.current.forEach((image, i) => {
            if (!image) return;

            const imageStart = i * stepSize;
            const imageEnd = imageStart + stepSize;

            const localProgress = Math.min(
              Math.max((self.progress - imageStart) / stepSize, 0),
              1
            );

            if (self.progress >= imageStart && self.progress <= imageEnd) {
              gsap.to(image, {
                rotateY: 45 * localProgress,
                z: -10 * localProgress,
                scale: 1 + 0.1 * localProgress,
                duration: 0.1,
                overwrite: true,
              });
            } else if (self.progress > imageEnd) {
              gsap.set(image, {
                rotateY: 45,
                z: -10,
                scale: 1.1,
              });
            } else {
              gsap.set(image, {
                rotateY: 0,
                z: 0,
                scale: 1,
              });
            }
          });

          let newIndex = -1;
          for (let j = 0; j < events.length; j++) {
            const start = j * stepSize;
            const mid = start + stepSize * 0.5;
            if (self.progress >= mid) {
              newIndex = j;
            }
          }
          setCurrentIndex(newIndex);
        },
      },
    });

    events.forEach((_, i) => {
      const targetX = -(
        window.innerWidth -
        targetPositionLeft +
        i * stepDistance
      );
      const progress = i / totalSteps;

      tl.to(
        wrapper,
        {
          x: targetX,
          duration: stepSize,
          ease: "none",
        },
        progress
      );
    });
  }, []);

  return (
    <>
      <div className="h-screen bg-blue-500 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">Event Gallery</h1>
          <p className="text-xl">Scroll down untuk melihat event</p>
        </div>
      </div>

      <section
        ref={sectionRef}
        className="h-screen bg-gray-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <div ref={imagesWrapperRef} className="flex gap-x-116 pl-[100vw]">
            {events.map((event, index) => (
              <div key={index} className="w-[60vw] h-96 shrink-0">
                <img
                  ref={(el) => {
                    imageRefs.current[index] = el;
                  }}
                  src={event.image}
                  alt={event.title}
                  className="min-w-[110%] h-full object-cover rounded-lg shadow-2xl"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[35%] z-10 text-white">
          {currentIndex >= 0 && currentIndex < events.length && (
            <>
              <div className="flex flex-col items-end mb-8">
                <p className="text-xl font-semibold text-gray-400">
                  Pembicara:
                </p>
                <p className="text-4xl font-semibold">
                  {events[currentIndex].speaker}
                </p>
              </div>
              <div className="flex flex-col gap-y-6">
                <h1 className="text-4xl font-bold">
                  {events[currentIndex].title}
                </h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {events[currentIndex].description}
                </p>
              </div>
            </>
          )}
        </div>
      </section>

      <div className="h-screen bg-red-500 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-4xl font-bold">End of Gallery</h2>
        </div>
      </div>
    </>
  );
}
