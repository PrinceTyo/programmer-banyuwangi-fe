import CardSlider from "./_components/sections/card-slider";
import EventSection from "./_components/sections/event-section";
import HeroSection from "./_components/sections/hero-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="h-[220vh]" />
      <EventSection />
      <CardSlider />
    </>
  );
}
