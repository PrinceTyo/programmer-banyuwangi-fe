import { getStrapiImageUrl } from "@/lib/utils";

import type { StrapiImage } from "@/types/strapi/media/image";

export function StrapiImage({
  src,
  alt,
  size,
  className,
  ...props
}: Readonly<
  Omit<React.ComponentPropsWithRef<"img">, "src" | "alt" | "className"> & {
    src: StrapiImage;
    alt?: string;
    size: "thumbnail" | "small" | "medium" | "large";
    className?: string;
  }
>) {
  return (
    <img
      src={getStrapiImageUrl(src, size)}
      alt={alt || "An image"}
      className={className}
      {...props}
    />
  );
}
