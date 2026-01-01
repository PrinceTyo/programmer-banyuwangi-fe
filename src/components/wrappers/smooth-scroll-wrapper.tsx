"use client";

import "lenis/dist/lenis.css";
import { type ReactNode, useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { type LenisRef, ReactLenis } from "lenis/react";
import gsap from "gsap";

interface SmoothScrollWrapperProps {
  children: ReactNode;
}

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SmoothScrollWrapper({
  children,
}: Readonly<SmoothScrollWrapperProps>) {
  const lenisRef = useRef<LenisRef | null>(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}
