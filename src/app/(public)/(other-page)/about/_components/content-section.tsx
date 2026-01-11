"use client";

import SplitTextTitle from "@/components/split-text/split-text-title";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";

export default function ContentSection({
  content,
}: {
  content: BlocksContent;
}) {
  return (
    <section className="relative px-6 md:px-[120px] pt-[100px] md:pt-[140px] mb-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16">
        <div className="md:col-span-6">
          <div className="mb-20 md:mb-32">
            <SplitTextTitle
              text="About"
              className="text-white font-geologica font-bold text-5xl lg:text-7xl leading-tight max-w-sm"
            />
          </div>
        </div>

        <div className="md:col-span-6 md:pt-[120px]">
          <BlocksRenderer content={content} />
        </div>
      </div>
    </section>
  );
}
