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
      <main className="relative z-10 pt-10 mx-6 md:mx-10 lg:mx-21 px-2 md:px-8 lg:px-14">
        <DocumentationSection
          documentationCategories={documentationCategories}
          documentations={documentations}
          documentationsCount={meta.pagination?.total || 0}
          pagination={meta.pagination!}
        />
      </main>
    </GradientBackground>
  );
}
