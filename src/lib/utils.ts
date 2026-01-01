import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import type { StrapiImage } from "@/types/strapi/media";
import type { StrapiImageFormats } from "@/types/strapi/media/image";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStrapiImageUrl(
  media: StrapiImage,
  quality: keyof StrapiImageFormats
): string {
  if (quality && media?.formats?.[quality]) {
    return `${process.env.NEXT_PUBLIC_BASE_URL}${media.formats[quality].url}`;
  }

  return `${process.env.NEXT_PUBLIC_BASE_URL}${media.url}`;
}
