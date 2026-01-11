import {
  getDocumentationsByCategory,
  getDocumentationsCount,
} from "@/lib/api/documentations";
import { getDocumentationCategories } from "@/lib/api/documentation-categories";
import { paginationParamsCache } from "@/config/pagination";
import DocumentationSection from "../_components/sections/documentation-section";

import type { SearchParams } from "nuqs/server";

export default async function DocumentationCategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: SearchParams;
}) {
  await paginationParamsCache.parse(searchParams);
  const { category } = await params;
  const { data: documentations, meta } = await getDocumentationsByCategory(
    category,
    {
      pagination: {
        page: paginationParamsCache.get("page") || 1,
        pageSize: paginationParamsCache.get("perPage") || 25,
      },
    }
  );
  const { data: documentationsCount } = await getDocumentationsCount();
  const { data: documentationCategories } = await getDocumentationCategories();

  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-1">
        <div className="absolute bg-[#004729] top-[15%] left-1/2 -translate-x-1/2 w-150 h-150 rounded-full opacity-50 blur-[120px]" />
        <div className="absolute bg-[#20033D] bottom-0 left-[10%] w-150 h-150 rounded-full opacity-50 blur-[120px]" />
        <div
          className="absolute bg-[#00076B] bottom-0 right-[10%] w-150 h-150 rounded-full opacity-50 blur-[120px]"
          style={{ background: "#00076B" }}
        />
      </div>

      <div className="relative z-10 pt-10 md:pt-28 mx-6 md:mx-10 lg:mx-21 px-2 md:px-8 lg:px-14">
        <DocumentationSection
          currentCategory={category}
          documentationCategories={documentationCategories}
          documentationsCount={documentationsCount.total}
          documentations={documentations}
          pagination={meta.pagination!}
        />
      </div>
    </>
  );
}
