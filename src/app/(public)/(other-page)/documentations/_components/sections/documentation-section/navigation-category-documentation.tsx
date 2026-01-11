import Link from "next/link";

import type { DocumentationCategory } from "@/types/strapi/models/documentation-category";

function getHref(slug?: string) {
  return slug ? `/documentations/${slug}` : "/documentations";
}

function getLinkClass(isActive: boolean) {
  return `inline-flex items-center gap-2 font-jetbrains transition-colors ${
    isActive ? "text-[#BABABA]" : "text-white hover:text-[#BABABA]"
  }`;
}

export default function NavigationCategoryDocumentation({
  documentationsCount = 0,
  documentationCategories,
  currentCategory,
}: {
  documentationCategories: DocumentationCategory<true>[];
  documentationsCount?: number;
  currentCategory?: string;
}) {
  return (
    <>
      <div className="hidden md:flex sticky top-50 flex-col gap-4">
        <Link href="/documentations" className={getLinkClass(!currentCategory)}>
          <span className="text-sm lg:text-base tracking-wide uppercase">
            All
          </span>
          <span className=" text-[10px]">[{documentationsCount}]</span>
        </Link>
        {documentationCategories.map((category) => (
          <Link
            key={category.slug}
            href={getHref(category.slug)}
            className={getLinkClass(currentCategory === category.slug)}
          >
            <span className="text-sm lg:text-base tracking-wide uppercase">
              {category.title}
            </span>
            <span className=" text-[10px]">
              [{category.documentations.count}]
            </span>
          </Link>
        ))}
      </div>

      <div className="md:hidden block space-x-10 space-y-2">
        <Link href="/documentations" className={getLinkClass(!currentCategory)}>
          <span className="text-base tracking-wide uppercase">All</span>
          <span className=" text-[10px]">[{documentationsCount}]</span>
        </Link>
        {documentationCategories.map((category) => (
          <Link
            key={category.slug}
            href={getHref(category.slug)}
            className={getLinkClass(currentCategory === category.slug)}
          >
            <span className="text-base tracking-wide uppercase">
              {category.title}
            </span>
            <span className=" text-[10px]">
              [{category.documentations.count}]
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
