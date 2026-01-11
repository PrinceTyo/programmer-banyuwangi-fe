"use client";

import { useRef, useMemo } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface SplitTextTitleProps {
  text: string;
  className?: string;
}

export default function SplitTextTitle({
  text,
  className = "",
}: SplitTextTitleProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  const chars = useMemo(
    () => text.split("").map((char) => (char === " " ? "\u00A0" : char)),
    [text]
  );

  useGSAP(() => {
    if (!titleRef.current) return;

    const charElements = gsap.utils.selector(titleRef.current)(".char");

    gsap.fromTo(
      charElements,
      {
        opacity: 0,
        y: 50,
        rotateX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: {
          each: 0.05,
          from: "start",
        },
      }
    );
  }, []);

  return (
    <h2 ref={titleRef} className={className} style={{ perspective: "1000px" }}>
      {chars.map((char, index) => (
        <span key={index} className="char inline-block">
          {char}
        </span>
      ))}
    </h2>
  );
}
