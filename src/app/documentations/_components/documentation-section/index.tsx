"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { Pagination } from "@/components/ui/pagination";
import CardDocumentation from "./card-documentation";
import NavigationCategoryDocumentation from "./navigation-category-documentation";
import SplitTextTitle from "@/components/split-text/split-text-title";
import gsap from "gsap";

import type { Documentation } from "@/types/strapi/models/documentation";
import type { StrapiPagination } from "@/types/strapi/contract/response";
import type { DocumentationCategory } from "@/types/strapi/models/documentation-category";

export default function DocumentationSection({
  documentationCategories,
  documentations,
  pagination,
  documentationsCount,
  currentCategory = "all",
}: {
  documentationCategories: DocumentationCategory[];
  documentations: Documentation[];
  documentationsCount: number;
  pagination: StrapiPagination;
  currentCategory?: string;
}) {
  const documentationRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!documentationRef.current || !cardsRef.current) return;
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
  }, []);

  return (
    <div ref={documentationRef}>
      <SplitTextTitle
        text="Works"
        className="text-white font-geologica font-bold text-5xl lg:text-7xl"
      />

      <div className="flex flex-col md:flex-row gap-14 md:gap-24">
        <div className="md:flex-3 mt-10 md:mt-14 lg:mt-24">
          <NavigationCategoryDocumentation
            currentCategory={currentCategory}
            documentationCategories={
              documentationCategories as unknown as DocumentationCategory<true>[]
            }
            documentationsCount={documentationsCount}
          />
        </div>
        <div className="flex-none md:flex-6">
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-8 md:gap-x-8 md:gap-y-12"
          >
            {documentations.map((documentation) => (
              <CardDocumentation
                key={documentation.id}
                documentation={documentation}
              />
            ))}
          </div>
        </div>
      </div>

      <Pagination pagination={pagination} />
    </div>
  );
}
