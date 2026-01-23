import { getDocumentations } from "@/lib/api/documentations";
import { getDocumentationCategories } from "@/lib/api/documentation-categories";
import { paginationParamsCache } from "@/config/pagination";
import { GradientBackground } from "@/components/ui/background";
import DocumentationSection from "./_components/documentation-section";

import type { SearchParams } from "nuqs/server";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dokumentasi",
};

export default async function DocumentationPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  await paginationParamsCache.parse(searchParams);
  const { data: documentations, meta } = await getDocumentations({
    pagination: {
      page: paginationParamsCache.get("page") || 1,
      pageSize: paginationParamsCache.get("perPage") || 25,
    },
  });
  const { data: documentationCategories } = await getDocumentationCategories();

  return (
    <GradientBackground>
      <DocumentationSection
        documentationCategories={documentationCategories}
        documentations={documentations}
        documentationsCount={meta.pagination?.total || 0}
        pagination={meta.pagination!}
      />
    </GradientBackground>
  );
}
