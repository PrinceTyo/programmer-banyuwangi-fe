import {
  getDocumentationsByCategory,
  getDocumentationsCount,
} from "@/lib/api/documentations";
import { getDocumentationCategories } from "@/lib/api/documentation-categories";
import { paginationParamsCache } from "@/config/pagination";
import { notFound } from "next/navigation";
import { GradientBackground } from "@/components/ui/background";
import DocumentationSection from "../_components/documentation-section";

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

  if (!documentations) return notFound();

  return (
    <GradientBackground>
      <main className="relative z-10 pt-10 mx-6 md:mx-10 lg:mx-21 px-2 md:px-8 lg:px-14">
        <DocumentationSection
          currentCategory={category}
          documentationCategories={documentationCategories}
          documentationsCount={documentationsCount.total}
          documentations={documentations}
          pagination={meta.pagination!}
        />
      </main>
    </GradientBackground>
  );
}
