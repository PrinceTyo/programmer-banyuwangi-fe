import { getStrapiImageUrl } from "@/lib/utils";
import type { StrapiImage } from "@/types/strapi/media/image";

export function StrapiImage({
  src,
  alt,
  size,
  className,
}: Readonly<{
  src: StrapiImage;
  alt?: string;
  size: "thumbnail" | "small" | "medium" | "large";
  className?: string;
}>) {
  return (
    <img
      src={getStrapiImageUrl(src, size)}
      alt={alt || "An image"}
      className={className}
    />
  );
}
