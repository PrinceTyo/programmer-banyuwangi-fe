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
    <div className="pt-28 mx-6 md:mx-10 lg:mx-21">
      <DocumentationSection documents={documents} currentCategory={category} />
    </div>
  );
}
