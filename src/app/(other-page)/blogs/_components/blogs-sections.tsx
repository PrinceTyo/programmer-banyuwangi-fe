"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { dateStringToHumanReadable } from "@/lib/utils";
import SplitTextTitle from "@/components/split-text/split-text-title";

import type { Blog } from "@/types/strapi/models/blog";

export default function BlogsSection({ blogs }: { blogs: Blog[] }) {
  return (
    <div className="relative min-h-screen overflow-x-hidden pb-20 px-2 md:px-8 lg:px-14 overflow-y-hidden">
      <div className="">
        <SplitTextTitle
          text="News"
          className="mb-20 md:mb-32 text-white font-geologica font-bold text-5xl lg:text-7xl leading-tight max-w-sm"
        />
      </div>

      <Accordion type="single" collapsible className="w-full">
        <Separator />
        {blogs.map((blog) => (
          <AccordionItem
            key={blog.id}
            value={`items-${blog.id}`}
            className="group text-white"
          >
            <AccordionTrigger className="relative px-2 overflow-hidden cursor-pointer transition-all duration-300">
              <span className="absolute inset-0 origin-bottom scale-y-0 transition-transform duration-300 ease-out pointer-events-none bg-white/30 group-hover:scale-y-110 group-data-[state=open]:scale-y-110" />
              <div className="space-y-2">
                <p>{dateStringToHumanReadable(blog.publishedAt)}</p>
                <h2 className="text-2xl">{blog.title}</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-4 text-lg font-semibold pt-4 px-2 bg-white/30">
              <BlocksRenderer content={blog.content} />
            </AccordionContent>
          </AccordionItem>
        ))}

        <Separator />
      </Accordion>
    </div>
  );
}
