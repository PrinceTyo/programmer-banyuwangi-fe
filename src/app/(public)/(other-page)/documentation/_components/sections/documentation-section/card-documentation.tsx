import Link from "next/link";
import { Documentation } from "@/types/documentation";

interface CardDocumentationProps {
  document: Documentation;
}

export default function CardDocumentation({ document }: CardDocumentationProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year} ${month}.${day}`;
  };

  const categoryLabels = document.categories.map((category) => {
    switch (category) {
      case "figma":
        return "Figma";
      case "website":
        return "Website";
      case "desktop":
        return "Desktop";
      case "mobile":
        return "Mobile";
      case "unreal-engine":
        return "Unreal Engine";
      case "unity":
        return "Unity";
      case "branding":
        return "Branding";
      case "ui-ux":
        return "UI/UX";
      default:
        return category;
    }
  });

  return (
    <Link
      href={`/documentation/detail/${document.slug}`}
      className="flex flex-col gap-6 group"
    >
      <div className="overflow-hidden">
        <img
          src={document.thumbnail}
          alt={document.title}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-start justify-between gap-2">
          <time
            className="text-white text-sm font-medium whitespace-nowrap font-google"
            dateTime={document.date}
          >
            {formatDate(document.date)}
          </time>
          <p className="text-[#BABABA] text-xs font-normal font-google text-right wrap-break-word">
            [{categoryLabels.join(", ")}]
          </p>
        </div>
        <h3 className="mt-4 text-white text-lg font-ibm font-bold group-hover:text-[#BABABA] transition-colors">
          {document.title}
        </h3>
      </div>
    </Link>
  );
}
