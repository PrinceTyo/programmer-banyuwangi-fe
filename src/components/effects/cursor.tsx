"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface CircleElement extends HTMLDivElement {
  x: number;
  y: number;
}

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const followerRef = useRef<HTMLDivElement | null>(null);
  const circlesRef = useRef<CircleElement[]>([]);
  const coords = useRef({ x: 0, y: 0 });
  const circleCount = 20;

  const moveCursor = (e: MouseEvent): void => {
    coords.current.x = e.clientX;
    coords.current.y = e.clientY;

    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
    });
    gsap.to(followerRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.2,
    });
  };

  useGSAP(() => {
    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
    });
    gsap.set(followerRef.current, {
      xPercent: -50,
      yPercent: -50,
    });
    window.addEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const circles = circlesRef.current;

    circles.forEach((circle) => {
      if (circle) {
        circle.x = 0;
        circle.y = 0;
      }
    });

    function animateCircles() {
      let x = coords.current.x;
      let y = coords.current.y;

      circles.forEach(function (circle, index) {
        if (!circle) return;

        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.transform = `scale(${
          (circles.length - index) / circles.length
        })`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  }, []);

  return (
    <div className="pointer-events-none">
      <div
        ref={cursorRef}
        className="w-2.5 h-2.5 rounded-full fixed bg-transparent z-99 border border-white"
      ></div>

      <div
        ref={followerRef}
        className="w-4 h-4 bg-white blur-lg rounded-full fixed z-99"
      ></div>

      {Array.from({ length: circleCount }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) {
              circlesRef.current[index] = el as CircleElement;
            }
          }}
          className="w-6 h-6 bg-white rounded-full fixed z-98"
          style={{
            opacity: 1 - index * 0.05,
            filter: `blur(${index * 0.3}px)`,
          }}
        />
      ))}
    </div>
  );
}
