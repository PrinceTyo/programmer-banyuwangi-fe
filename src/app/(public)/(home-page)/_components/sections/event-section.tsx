"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import { useRef } from "react";

export default function EventSection() {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useGSAP(() => {
    gsap.set(imageRef.current, {
      transformPerspective: 1600,
      rotateY: 45,
      z: -10,
      scale: 1.1,
    });
  }, []);

  return (
    <>
      <div
        id="black"
        className="h-screen flex items-center justify-center overflow-visible"
      >
        <div className="w-[60%] h-96 overflow-visible flex items-center ">
          <img
            ref={imageRef}
            src="/assets/images/full.png"
            alt="event"
            className="min-w-[120%] h-96 object-cover"
          />
        </div>
        <div className="w-[30%] h-[60%] flex flex-col items-start justify-start">
          <div className="w-full flex flex-col items-end justify-center pe-6">
            <p className="text-xl font-semibold leading-tight">Pembicara:</p>
            <p className="text-4xl font-semibold">Icarus</p>
          </div>
          <div className="flex flex-col justify-center h-full gap-y-6">
            <h1 className="text-4xl">Tutorial HTML Dasar</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black h-screen flex items-center justify-center overflow-visible">
        <div className="w-[60%] h-96 overflow-visible flex items-center ">
          <img
            ref={imageRef}
            src="/assets/images/full.png"
            alt="event"
            className="min-w-[120%] h-96 object-cover"
          />
        </div>
        <div className="w-[30%] h-[60%] flex flex-col items-start justify-start">
          <div className="w-full flex flex-col items-end justify-center pe-6">
            <p className="text-xl font-semibold leading-tight">Pembicara:</p>
            <p className="text-4xl font-semibold">Icarus</p>
          </div>
          <div className="flex flex-col justify-center h-full gap-y-6">
            <h1 className="text-4xl">Tutorial HTML Dasar</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>

      <div
        id="black"
        className="h-screen flex items-center justify-center overflow-visible"
      >
        <div className="w-[60%] h-96 overflow-visible flex items-center ">
          <img
            ref={imageRef}
            src="/assets/images/full.png"
            alt="event"
            className="min-w-[120%] h-96 object-cover"
          />
        </div>
        <div className="w-[30%] h-[60%] flex flex-col items-start justify-start">
          <div className="w-full flex flex-col items-end justify-center pe-6">
            <p className="text-xl font-semibold leading-tight">Pembicara:</p>
            <p className="text-4xl font-semibold">Icarus</p>
          </div>
          <div className="flex flex-col justify-center h-full gap-y-6">
            <h1 className="text-4xl">Tutorial HTML Dasar</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
