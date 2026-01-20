"use client";

import { Marquee, MarqueeContent, MarqueeItem } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

import type { RunningText } from "@/types/strapi/components/shared/running-text";

export function RunningText({
  text,
  outlinedText,
  className,
}: RunningText & { className?: string }) {
  const textItems = [
    { text, outlined: false },
    ...(outlinedText ? [{ text: outlinedText, outlined: true }] : []),
  ];

  return (
    <div className={cn("relative w-full font-jetbrains", className)}>
      <Marquee speed={100}>
        <MarqueeContent className="pb-4">
          {Array.from({ length: 4 }).map((_, groupIndex) => (
            <div key={groupIndex} className="flex">
              {textItems.map((item, index) => (
                <MarqueeItem key={`${groupIndex}-${index}`} asChild>
                  <p
                    className={cn(
                      "text-7xl md:text-8xl font-medium",
                      item.outlined && "text-transparent text-outline-[1px]!"
                    )}
                  >
                    {item.text}&nbsp;
                  </p>
                </MarqueeItem>
              ))}
            </div>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  );
}
