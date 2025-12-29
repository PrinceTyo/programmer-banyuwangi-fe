import Link from "next/link";
import { Documentation } from "@/types/documentation";

interface CardDocumentationProps {
  document: Documentation;
}

export default function CardDocumentation({
  document,
}: CardDocumentationProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year} ${month}.${day}`;
  };

  const categoryLabels = document.categories.map((category) => {
    switch (category) {
      case "ui-web":
        return "UI/Web";
      case "learning":
        return "Learning";
      case "collaboration":
        return "Collaboration";
      case "community-project":
        return "Community Project";
      default:
        return category;
    }
  });

  return (
    <Link
      href={`/documentation/detail/${document.slug}`}
      className="flex flex-col gap-4 group"
    >
      <div className="card-image overflow-hidden">
        <img
          src={document.thumbnail}
          alt={document.title}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="card-text flex flex-col">
        <div className="flex items-start justify-between">
          <div className="">
            <time
              className="text-white text-md font-medium whitespace-nowrap font-jetbrains"
              dateTime={document.date}
            >
              {formatDate(document.date)}
            </time>
          </div>
          <div className="flex flex-col items-end gap-4">
            <h6 className="text-white text-md font-jetbrains font-bold group-hover:text-[#BABABA] transition-colors">
              {document.title}
            </h6>
            <p className="text-[#BABABA] text-xs font-normal font-jetbrains text-right wrap-break-word">
              [{categoryLabels.join(", ")}]
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
