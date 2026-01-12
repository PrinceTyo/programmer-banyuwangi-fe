import { getContact } from "@/lib/api/contact";
import { GradientBackground } from "@/components/ui/background";
import ContactSection from "./_components/contact-section";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak",
};

export default async function ContactPage() {
  const { data } = await getContact();

  return (
    <GradientBackground>
      <div className="relative z-10 pt-40 md:pt-60 mx-20">
        <ContactSection data={data} />
      </div>
    </GradientBackground>
  );
}
