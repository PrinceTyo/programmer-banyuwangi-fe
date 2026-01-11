import Link from "next/link";
import { StrapiImage } from "@/components/global/strapi-image";
import { dateStringToHumanReadable, toTitleCase } from "@/lib/utils";

import type { Documentation } from "@/types/strapi/models/documentation";

export default function CardDocumentation({
  documentation,
}: {
  documentation: Documentation;
}) {
  const categoryLabels = documentation.documentation_categories.map(
    (category) => toTitleCase(category.title)
  );

  return (
    <Link
      href={`/documentations/show/${documentation.slug}`}
      className="flex flex-col gap-4 group"
    >
      <div className="card-image overflow-hidden">
        {documentation.photos && documentation.photos.length > 0 && (
          <StrapiImage
            src={documentation.photos[0]}
            alt={documentation.title}
            size="large"
            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
          />
        )}
      </div>
      <div className="card-text flex flex-col">
        <div className="hidden lg:flex items-start justify-between gap-6">
          <div>
            <time
              className="text-white text-md font-medium whitespace-nowrap font-jetbrains"
              dateTime={documentation.date}
            >
              {dateStringToHumanReadable(documentation.date)}
            </time>
          </div>
          <div className="flex flex-col items-end gap-4">
            <h6 className="text-white text-right text-md font-jetbrains font-bold group-hover:text-[#BABABA] transition-colors">
              {documentation.title}
            </h6>
            <p className="text-[#BABABA] text-xs font-normal font-jetbrains text-right wrap-break-word">
              [{categoryLabels.join(", ")}]
            </p>
          </div>
        </div>

        <div className="flex lg:hidden flex-col gap-2">
          <time
            className="text-white text-sm md:text-md font-medium font-jetbrains"
            dateTime={documentation.date}
          >
            {dateStringToHumanReadable(documentation.date)}
          </time>
          <p className="text-[#BABABA] md:text-right text-xs font-normal font-jetbrains">
            [{categoryLabels.join(", ")}]
          </p>
          <h6 className="text-white text-sm md:text-md font-jetbrains font-bold group-hover:text-[#BABABA] transition-colors">
            {documentation.title}
          </h6>
        </div>
      </div>
    </Link>
  );
}
