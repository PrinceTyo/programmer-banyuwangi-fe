import TrustedSection from "./components/trusted-section";
import GallerySection from "./components/gallery-section";
import HeroSection from "./components/hero-section";
import CompanySection from "./components/company-section";


export default function AboutPage() {
    return (
        <main className="relative min-h-screen bg-black text-white overflow-hidden">
            <HeroSection />
            <CompanySection />
            <TrustedSection />
            <GallerySection />
        </main>
    );
}
