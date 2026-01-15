import { getHomePage } from "@/lib/api/home-page";
import { NavbarSetter } from "@/context/navbar-provider";
import HeroSection from "./_components/sections/hero-section";
import EventSection from "./_components/sections/event-section";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beranda",
};

export default async function Home() {
  const { data: homePageData } = await getHomePage();

  return (
    <NavbarSetter variant="float">
      <HeroSection heroData={homePageData.heroSection} />
      <div className="h-[300vh]" />
      <EventSection events={homePageData.eventSection} />
    </NavbarSetter>
  );
}
