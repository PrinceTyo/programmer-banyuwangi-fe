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

export function toTitleCase(str?: string) {
  if (!str) return "";

  return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

export function dateStringToHumanReadable(dateString: string) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
