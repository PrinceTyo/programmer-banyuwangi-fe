import { getHomePage } from "@/lib/api/home-page";
import HeroSection from "./_components/sections/hero-section";
import EventSection from "./_components/sections/event-section";

export default async function Home() {
  const { data: homePageData } = await getHomePage();

  return (
    <>
      <HeroSection heroData={homePageData.heroSection} />
      <div className="h-[220vh]" />
      {homePageData.eventSection && <EventSection />}
    </>
  );
}
