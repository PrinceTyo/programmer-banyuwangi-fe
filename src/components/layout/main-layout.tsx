import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import { getFooter } from "@/lib/api/footer";
import { getNavbar } from "@/lib/api/navbar";

export default async function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: navbarData } = await getNavbar();
  const { data: footerData } = await getFooter();

  return (
    <>
      <Navbar data={navbarData} />
      {children}
      <Footer data={footerData} />
    </>
  );
}
