"use client";

import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CardDocumentation from "./documentation-section/card-documentation";
import NavigationCategoryDocumentation from "./documentation-section/navigation-category-documentation";
import SplitTextTitle from "@/components/split-text/split-text-title";
import { Documentation } from "@/types/documentation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Skeleton } from "@/components/ui/skeleton";

interface DocumentationSectionProps {
  documents: Documentation[];
  currentCategory?: string;
}

export default function DocumentationSection({
  documents,
  currentCategory = "all",
}: DocumentationSectionProps) {
  const ITEMS_PER_PAGE = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const documentationRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const totalPages = Math.ceil(documents.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentDocuments = documents.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  useGSAP(() => {
    if (cardsRef.current && !isLoading) {
      const cardImages = cardsRef.current.querySelectorAll(".card-image");
      const cardTexts = cardsRef.current.querySelectorAll(".card-text");

      gsap.fromTo(
        cardImages,
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
        cardTexts,
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
    }
  }, [currentPage, isLoading]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentPage]);

  return (
    <div ref={documentationRef}>
      <SplitTextTitle
        text="Works"
        className="text-white font-geologica font-bold text-5xl lg:text-7xl"
      />

      <div className="flex flex-col md:flex-row gap-14 md:gap-24">
        <div className="md:flex-3 mt-10 md:mt-14 lg:mt-24">
          <NavigationCategoryDocumentation currentCategory={currentCategory} />
        </div>
        <div className="flex-none md:flex-6">
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-8 md:gap-x-8 md:gap-y-12"
          >
            {isLoading
              ? Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                  <div key={index} className="flex flex-col gap-6">
                    <Skeleton className="w-full h-62.5 bg-black/50 backdrop-blur-2xl" />
                    <div className="flex flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <time className="text-white text-sm font-medium whitespace-nowrap font-jetbrains opacity-0">
                          0000 00.00
                        </time>
                        <p className="text-[#BABABA] text-xs font-normal font-jetbrains text-right opacity-0">
                          []
                        </p>
                      </div>
                      <h3 className="mt-4 text-white text-lg font-ibm font-bold opacity-0">
                        Loading...
                      </h3>
                    </div>
                  </div>
                ))
              : currentDocuments.map((document) => (
                  <CardDocumentation key={document.id} document={document} />
                ))}
          </div>
        </div>
      </div>

      {/* paginate */}
      <div className="pt-20 pb-28 flex justify-center text-[#BABABA]">
        <div className="flex items-center justify-center gap-5">
          <div
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            className={`flex items-center border border-[#BABABA] p-1.5 rounded-xs cursor-pointer transition-opacity ${
              currentPage === 1 && "opacity-40 pointer-events-none"
            }`}
          >
            <IoIosArrowBack />
          </div>

          <div className="flex items-center border border-[#BABABA] py-1.5 px-3 rounded-xs">
            <span className="text-xs">{currentPage}</span>
          </div>

          <div
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
            className={`flex items-center border border-[#BABABA] p-1.5 rounded-xs cursor-pointer transition-opacity ${
              currentPage === totalPages && "opacity-40 pointer-events-none"
            }`}
          >
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
}
