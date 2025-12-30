import DocumentationSection from "../_components/sections/documentation-section";
import { getDocumentsByCategory } from "@/lib/data/documentation";

export default async function DocumentationCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const documents = getDocumentsByCategory(category);

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
          documents={documents}
          currentCategory={category}
        />
      </div>
    </>
  );
}
