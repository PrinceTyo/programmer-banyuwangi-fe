"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { events } from "@/lib/data-dummy/events";
import { useGSAP } from "@gsap/react";
import { ScrollArea } from "@/components/ui/scroll-area";

gsap.registerPlugin(ScrollTrigger);

export default function EventSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesWrapperRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useGSAP(() => {
    if (!sectionRef.current || !imagesWrapperRef.current) return;

    const wrapper = imagesWrapperRef.current;

    // gsap.set(sectionRef.current, {
    //   backgroundPosition: "40px 17px, 0 0",
    //   transformPerspective: 1600,
    //   rotateY: 45,
    //   z: -10,
    // });

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

    const mm = gsap.matchMedia();

    // Desktop
    mm.add("(min-width: 768px)", () => {
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
    });

    // Mobile
    mm.add("(max-width: 767px)", () => {
      const targetPositionLeft = 0;
      const imageWidth = window.innerWidth;
      const gap = 32;
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
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-gray-900 relative overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M60 54L60 66M54 60L66 60' stroke='%236B7280' stroke-width='0.5' stroke-opacity='0.7'/%3E%3C/g%3E%3C/svg%3E"), 
        url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M15 15L15 0M15 15L30 15M15 15L15 30M15 15L0 15' stroke='%231F2937' stroke-width='0.5' stroke-opacity='0.6'/%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div
          ref={imagesWrapperRef}
          className="flex gap-x-8 md:gap-x-116 pl-[100vw] -translate-y-12 md:translate-y-0"
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="w-screen md:w-[60vw] h-auto md:h-96 shrink-0"
            >
              <img
                ref={(el) => {
                  imageRefs.current[index] = el;
                }}
                src={event.image}
                alt={event.title}
                className="min-w-[105%] md:min-w-[110%] h-60 md:h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block absolute right-20 top-1/2 -translate-y-1/2 w-[30%] lg:w-[35%] z-10 text-white">
        {currentIndex >= 0 && currentIndex < events.length && (
          <div>
            <div className="flex flex-col items-end mb-8">
              <p className="text-xl font-semibold text-gray-400">Pembicara:</p>
              <p className="md:text-3xl lg:text-4xl font-semibold">
                {events[currentIndex].speaker}
              </p>
            </div>
            <div className="flex flex-col gap-y-6">
              <h1 className="md:text-3xl lg:text-4xl font-bold">
                {events[currentIndex].title}
              </h1>
              <ScrollArea className="h-45 w-full pe-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {events[currentIndex].description}
                </p>
              </ScrollArea>
            </div>
          </div>
        )}
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        {currentIndex >= 0 && currentIndex < events.length && (
          <div>
            <div className="absolute top-50 -translate-y-1/2 right-6 z-10 text-white text-right">
              <p className="text-xs font-semibold text-gray-400">Pembicara:</p>
              <p className="text-xl font-semibold">
                {events[currentIndex].speaker}
              </p>
            </div>

            <div className="absolute bottom-10 left-0 right-0 z-10 text-white p-6 bg-linear-to-t from-gray-900 via-gray-900/95 to-transparent">
              <div className="flex flex-col gap-y-3">
                <h1 className="text-2xl font-bold">
                  {events[currentIndex].title}
                </h1>
                <ScrollArea className="h-30 w-full pe-4">
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {events[currentIndex].description}
                  </p>
                </ScrollArea>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
