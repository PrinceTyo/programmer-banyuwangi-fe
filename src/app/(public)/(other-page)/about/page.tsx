import TrustedSection from "./components/trusted-section";
import GallerySection from "./components/gallery-section";
import HeroSection from "./components/hero-section";
import CompanySection from "./components/company-section";


export default function AboutPage() {
    return (
      <>
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-1">
          <div className="absolute bg-[#004729] top-[15%] left-1/2 -translate-x-1/2 w-150 h-150 rounded-full opacity-50 blur-[120px]" />
          <div className="absolute bg-[#20033D] bottom-0 left-[10%] w-150 h-150 rounded-full opacity-50 blur-[120px]" />
          <div
            className="absolute bg-[#00076B] bottom-0 right-[10%] w-150 h-150 rounded-full opacity-50 blur-[120px]"
            style={{ background: "#00076B" }}
          />
        </div>

        <div className="relative text-white z-10 pt-10 md:pt-20 mx-20">
          <HeroSection />
          <CompanySection />
          <TrustedSection />
          <GallerySection />
        </div>
      </>
    );
}
