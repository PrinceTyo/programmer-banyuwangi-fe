import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { GradientBackground } from "@/components/ui/background";
import { StrapiImage } from "@/components/global/strapi-image";
import { getDocumentation, getDocumentations } from "@/lib/api/documentations";
import { dateStringToHumanReadable } from "@/lib/utils";
import { notFound } from "next/navigation";
import Link from "next/link";

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

  const { data: recommendationDocumentation } = await getDocumentations({
    pagination: {
      page: 1,
      pageSize: 2,
    },
    filters: {
      id: {
        $ne: documentation.id,
      },
    },
  });

  return (
    <GradientBackground>
      <main className="mx-auto max-w-6xl pb-28 px-12 z-10 relative">
        <Link
          href="/documentations"
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

        {recommendationDocumentation.length > 0 && (
          <div className="flex justify-between items-center pt-16 border-t border-[#333]">
            {recommendationDocumentation[0] ? (
              <Link
                href={`/documentations/show/${recommendationDocumentation[0].slug}`}
                className="text-white hover:text-[#BABABA] transition-colors"
              >
                <div className="flex items-center justify-start gap-4 text-sm text-[#BABABA] mb-2">
                  <FaLongArrowAltLeft /> <span>Previous</span>
                </div>
                <span className="text-xs md:text-sm lg:text-lg font-medium md:font-bold font-jetbrains">
                  {recommendationDocumentation[0].title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {recommendationDocumentation[1] ? (
              <Link
                href={`/documentations/show/${recommendationDocumentation[1].slug}`}
                className="text-white hover:text-[#BABABA] transition-colors text-right"
              >
                <span className="flex items-center justify-end gap-4 text-sm text-[#BABABA] mb-2">
                  <span>Next</span> <FaLongArrowAltRight />
                </span>
                <span className="text-xs md:text-sm lg:text-lg font-medium md:font-bold font-jetbrains">
                  {recommendationDocumentation[1].title}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        )}
      </main>
    </GradientBackground>
  );
}
