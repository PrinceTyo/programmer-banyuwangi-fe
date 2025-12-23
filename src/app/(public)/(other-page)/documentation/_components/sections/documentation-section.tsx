"use client";

import Link from "next/link";
import { useState } from "react";
import CardDocumentation from "./documentation-section/card-documentation";
import NavigationCategoryDocumentation from "./documentation-section/navigation-category-documentation";
import { Documentation } from "@/types/documentation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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

  const totalPages = Math.ceil(documents.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentDocuments = documents.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div>
      <div className="md:mb-10 lg:mb-0">
        <h2 className="text-white font-acumin font-bold text-5xl lg:text-6xl">
          Documents
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-14 md:gap-24">
        <div className=" md:flex-3 mt-10 md:mt-14 lg:mt-24">
          <NavigationCategoryDocumentation currentCategory={currentCategory} />
        </div>
        <div className="flex-none md:flex-6">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-8 md:gap-x-8 md:gap-y-12">
            {currentDocuments.map((document) => (
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
            className={`flex items-center border border-[#BABABA] p-1.5 rounded-xs cursor-pointer ${
              currentPage === 1 && "opacity-40 pointer-events-none"
            }`}
          >
            <IoIosArrowBack />
          </div>

          <Link
            href="/documentation"
            className="flex items-center border border-[#BABABA] hover:bg-white hover:text-black transition-colors duration-300 py-1.5 px-3 rounded-xs cursor-pointer"
          >
            <span className="text-xs">
              {currentPage}
            </span>
          </Link>

          <div
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
            className={`flex items-center border border-[#BABABA] p-1.5 rounded-xs cursor-pointer ${
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
