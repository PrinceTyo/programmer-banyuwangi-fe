import { notFound } from "next/navigation";
import Link from "next/link";
import { getDocumentBySlug, documents } from "@/lib/data/documentation";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default async function DocumentationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getDocumentBySlug(slug);

  if (!project) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year} ${month}.${day}`;
  };

  const categoryLabels = project.categories.map((category) => {
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

  const currentIndex = documents.findIndex((p) => p.slug === slug);
  const nextDocument = documents[currentIndex + 1];
  const prevDocument = documents[currentIndex - 1];

  return (
    <div className="pt-20 mx-auto max-w-6xl pb-28 px-12">
      <Link
        href="/documentation"
        className="text-white font-jetbrains hover:text-[#BABABA] transition-colors inline-flex items-center gap-2"
      >
        <span>
          <FaLongArrowAltLeft />
        </span>
        <span>Back to Documentation</span>
      </Link>
      <div className="flex flex-col gap-10 pt-6">
        <div className="flex items-center justify-start gap-4">
          <time
            className="text-white text-sm font-medium whitespace-nowrap font-jetbrains"
            dateTime={project.date}
          >
            {formatDate(project.date)}
          </time>
          <p className="text-[#BABABA] text-xs font-normal font-jetbrains text-right wrap-break-word">
            [{categoryLabels.join(", ")}]
          </p>
        </div>
        <h3 className="text-white font-jetbrains font-bold text-3xl mb-12">
          {project.title}
        </h3>
      </div>

      <div className="mb-6">
        <p className="text-white text-base text-justify font-jetbrains leading-relaxed">
          {project.description}
        </p>
      </div>

      <div className="mb-12 rounded-lg overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-auto"
        />
      </div>

      {project.images && project.images.length > 0 && (
        <div className="mb-16">
          <h3 className="text-white font-bold text-xl mb-6 font-jetbrains">
            Gallery
          </h3>
          <div className="grid grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between items-center pt-16 border-t border-[#333]">
        {prevDocument ? (
          <Link
            href={`/documentation/detail/${prevDocument.slug}`}
            className="text-white hover:text-[#BABABA] transition-colors"
          >
            <div className="flex items-center justify-start gap-4 text-sm text-[#BABABA] mb-2">
              <FaLongArrowAltLeft /> <span>Previous</span>
            </div>
            <span className="text-xs md:text-sm lg:text-lg font-medium md:font-bold font-jetbrains">
              {prevDocument.title}
            </span>
          </Link>
        ) : (
          <div />
        )}

        {nextDocument ? (
          <Link
            href={`/documentation/detail/${nextDocument.slug}`}
            className="text-white hover:text-[#BABABA] transition-colors text-right"
          >
            <span className="flex items-center justify-end gap-4 text-sm text-[#BABABA] mb-2">
              <span>Next</span> <FaLongArrowAltRight />
            </span>
            <span className="text-xs md:text-sm lg:text-lg font-medium md:font-bold font-jetbrains">
              {nextDocument.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
