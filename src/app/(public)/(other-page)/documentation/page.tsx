import DocumentationSection from "./_components/sections/documentation-section";
import { getDocumentsByCategory } from "@/lib/data/documentation";

export default function PortfolioPage() {
  const documents = getDocumentsByCategory();

  return (
      <div className="pt-10 md:pt-28 mx-6 md:mx-10 lg:mx-21">
        <DocumentationSection documents={documents} />
      </div>
  );
}
