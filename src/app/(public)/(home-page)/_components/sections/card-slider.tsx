"use client";

import { useRef, useState, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export default function CardSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const totalScrollRef = useRef<number>(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: 1,
      title: "Mountain Peak",
      description:
        "Explore the breathtaking views from the highest peaks where nature meets the sky",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Ocean Waves",
      description:
        "Dive into the serene beauty of crystal clear waters and endless horizons",
      image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Forest Trail",
      description:
        "Wander through lush green pathways and discover the secrets of nature",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Desert Sunset",
      description:
        "Experience the golden hour in vast sandy landscapes under painted skies",
      image:
        "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Northern Lights",
      description:
        "Witness the magical aurora dancing across the arctic sky in vibrant colors",
      image:
        "https://images.unsplash.com/photo-1579033461380-adb47c3eb938?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Urban Nights",
      description:
        "Feel the pulse of the city under neon lights and endless possibilities",
      image:
        "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&h=600&fit=crop",
    },
  ];

  const calculateTotalScroll = useCallback(() => {
    if (!sliderRef.current) return 0;
    return sliderRef.current.scrollWidth - window.innerWidth;
  }, []);

  const handleDotClick = useCallback(
    (index: number) => {
      const progress = index / (cards.length - 1);
      const totalScroll = totalScrollRef.current;
      const scrollPosition = window.innerHeight + progress * totalScroll;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });
    },
    [cards.length]
  );

  useGSAP(
    () => {
      if (!sliderRef.current || !containerRef.current) return;

      const slider = sliderRef.current;
      const cardsElements = cardsRef.current.filter(
        Boolean
      ) as HTMLDivElement[];

      if (cardsElements.length === 0) return;

      totalScrollRef.current = slider.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: slider,
          start: "top top",
          end: `+=${totalScrollRef.current}`,
          scrub: 1,
          pin: true,
          snap: {
            snapTo: 1 / (cards.length - 1),
            duration: { min: 0.1, max: 0.3 },
            ease: "power1.inOut",
          },
          onUpdate: (self) => {
            const progress = self.progress;
            const newIndex = Math.round(progress * (cards.length - 1));
            setActiveIndex(newIndex);
          },
        },
      });

      tl.to(cardsElements, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
      });

      cardsElements.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0.7,
            scale: 0.9,
          },
          {
            opacity: 1,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: () => `left ${index * 100}%`,
              end: () => `center ${index * 100}%`,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          }
        );
      });

      const handleResize = () => {
        totalScrollRef.current = calculateTotalScroll();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    {
      scope: containerRef,
      dependencies: [cards.length, calculateTotalScroll],
      revertOnUpdate: true,
    }
  );

  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el;
  };

  return (
    <div ref={containerRef} className="bg-black min-h-screen"> 
      <div
        ref={sliderRef}
        className="h-screen relative overflow-hidden bg-linear-to-b from-black via-gray-900 to-black"
      >
        <div className="flex h-full">
          {cards.map((card, index) => (
            <div
              key={card.id}
              ref={(el) => setCardRef(el, index)}
              className="min-w-full h-full flex items-center justify-center px-4 md:px-20"
            >
              <div className="w-full max-w-4xl h-125 rounded-3xl shadow-2xl overflow-hidden relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="text-white/80 max-w-md">
                        {card.description}
                      </p>
                    </div>
                    <div className="text-white/60 text-sm font-semibold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(cards.length).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-20 right-20 max-w-md">
          <div className="text-white/60 text-sm font-semibold mb-2">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(cards.length).padStart(2, "0")}
          </div>
          <h2 className="text-5xl font-bold text-white mb-4">
            {cards[activeIndex].title}
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            {cards[activeIndex].description}
          </p>

          <div className="flex gap-2 mt-8">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-white scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
