"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { blogs } from "@/lib/data-dummy/blogs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export default function BlogsSection() {
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="relative min-h-screen overflow-x-hidden py-20 px-2 md:px-8 lg:px-14 overflow-y-hidden">
      <div className="absolute w-screen h-screen flex items-start justify-end">
        <div className="w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>
      <h1 className="text-5xl md:text-7xl text-white font-bold mb-12">News</h1>

      <Accordion type="single" collapsible className="w-full">
        <Separator />
        {currentBlogs.map((item) => (
          <AccordionItem
            key={item.id}
            value={`items-${item.id}`}
            className="group text-white"
          >
            <AccordionTrigger className="relative px-2 overflow-hidden cursor-pointer transition-all duration-300">
              <span className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-300 ease-out pointer-events-none bg-white/30 group-hover:scale-y-110 group-data-[state=open]:scale-y-110" />
              <div className="space-y-2">
                <p>{item.date}</p>
                <h2 className="text-2xl">{item.title}</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-lg font-semibold pt-4 px-2 bg-white/30">
              <p>{item.description}</p>
              <img src={item.image} alt={`${item.title} image`} />
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                <p>{item.link}</p>
              </Link>
            </AccordionContent>
          </AccordionItem>
        ))}

        <Separator />
      </Accordion>

      <div className="pt-20 pb-28 flex justify-center text-[#BABABA]">
        <div className="flex items-center justify-center gap-5">
          <div
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            className={`flex items-center border border-[#BABABA] p-1.5 rounded-xs cursor-pointer transition-opacity ${
              currentPage === 1 ? "opacity-40 pointer-events-none" : ""
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
              currentPage === totalPages ? "opacity-40 pointer-events-none" : ""
            }`}
          >
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
}
