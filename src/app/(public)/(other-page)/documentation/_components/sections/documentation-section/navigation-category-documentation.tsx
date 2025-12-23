import Link from "next/link";
import { getCategoryInfo } from "@/lib/data/documentation";

interface NavigationCategoryDocumentationProps {
  currentCategory?: string;
}

const DEFAULT_CATEGORY = "all";

export default function NavigationCategoryDocumentation({
  currentCategory = DEFAULT_CATEGORY,
}: NavigationCategoryDocumentationProps) {
  const categories = getCategoryInfo();

  const getHref = (slug: string) =>
    slug === DEFAULT_CATEGORY ? "/documentation" : `/documentation/${slug}`;

  const getLinkClass = (isActive: boolean) =>
    `inline-flex items-center gap-2 font-acumin transition-colors ${
      isActive ? "text-[#BABABA]" : "text-white hover:text-[#BABABA]"
    }`;

  return (
    <>
      <div className="hidden md:flex sticky top-50 flex-col gap-4">
        {categories.map(({ slug, label, count }) => {
          const isActive = currentCategory === slug;

          return (
            <Link
              key={slug}
              href={getHref(slug)}
              className={getLinkClass(isActive)}
            >
              <span className="text-base tracking-wide uppercase">{label}</span>
              <span className=" text-[10px]">[{count}]</span>
            </Link>
          );
        })}
      </div>

      <div className="md:hidden block space-x-10 space-y-2">
        {categories.map(({ slug, label, count }) => {
          const isActive = currentCategory === slug;

          return (
            <Link
              key={slug}
              href={getHref(slug)}
              className={getLinkClass(isActive)}
            >
              <span className="text-base tracking-wide uppercase">{label}</span>
              <span className=" text-[10px]">[{count}]</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
