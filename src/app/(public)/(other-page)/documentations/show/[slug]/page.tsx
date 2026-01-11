import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { getDocumentation } from "@/lib/api/documentations";
import { dateStringToHumanReadable } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";
import { StrapiImage } from "@/components/global/strapi-image";

export default async function ShowDocumentationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: documentation } = await getDocumentation(slug);

  if (!documentation) {
    notFound();
  }

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
            dateTime={documentation.date}
          >
            {dateStringToHumanReadable(documentation.date)}
          </time>
          <p className="text-[#BABABA] text-xs font-normal font-jetbrains text-right wrap-break-word">
            [
            {documentation.documentation_categories
              .map((category) => category.title)
              .join(", ")}
            ]
          </p>
        </div>
        <h3 className="text-white font-jetbrains font-bold text-3xl mb-12">
          {documentation.title}
        </h3>
      </div>

      <div className="mb-6">
        <p className="text-white text-base text-justify font-jetbrains leading-relaxed">
          {documentation.description}
        </p>
      </div>

      {documentation.photos?.length > 0 && (
        <div className="mb-12 rounded-lg overflow-hidden">
          <StrapiImage
            src={documentation.photos[0]}
            alt={documentation.title}
            className="w-full h-auto"
            size="large"
          />
        </div>
      )}

      {documentation.photos?.length > 0 && (
        <div className="mb-16">
          <h3 className="text-white font-jetbrains font-bold text-xl mb-6">
            Gallery
          </h3>
          <div className="grid grid-cols-2 gap-8">
            {documentation.photos?.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden">
                <StrapiImage
                  src={image}
                  alt={`${documentation.title} - Image ${index + 1}`}
                  className="w-full h-auto"
                  size="large"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* <div className="flex justify-between items-center pt-16 border-t border-[#333]">
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
      </div> */}
    </div>
  );
}
