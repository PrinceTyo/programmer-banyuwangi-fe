import { getAboutUs } from "@/lib/api/about-us";
import { GradientBackground } from "@/components/ui/background";
import ContentSection from "./_components/content-section";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
};

export default async function AboutPage() {
  const { data: aboutPageData } = await getAboutUs();

  return (
    <GradientBackground>
      <div className="relative text-white z-10 py-10 md:py-20 mx-20">
        <ContentSection content={aboutPageData.content} />
      </div>
    </GradientBackground>
  );
}
