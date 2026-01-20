import "@/styles/globals.css";

import { getGlobal } from "@/lib/api/global";
import { getStrapiImageUrl } from "@/lib/utils";
import { JetBrains_Mono, Geologica, Climate_Crisis } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import localFont from "next/font/local";
import Cursor from "@/components/effects/cursor";
import SmoothScrollWrapper from "@/components/wrappers/smooth-scroll-wrapper";

import type { Metadata } from "next";

const JetBrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-jetbrains",
  fallback: ["monospace"],
  display: "swap",
});

const Geologicas = Geologica({
  subsets: ["latin", "latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-geologica",
  fallback: ["monospace"],
  display: "swap",
});

const googleSansCode = localFont({
  src: [
    {
      path: "./../../public/fonts/GoogleSansCode-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../../public/fonts/GoogleSansCode-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./../../public/fonts/GoogleSansCode-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-google-sans-code",
  display: "swap",
});

const climateCrisisFont = Climate_Crisis({
  subsets: ["latin"],
  variable: "--font-climate-crisis",
  fallback: ["monospace"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const { data: globalData } = await getGlobal();
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL;
  const siteName = globalData.siteName || "Komunitas Programmer Banyuwangi";
  const description = globalData.siteDescription;

  return {
    title: {
      template: `%s - ${siteName}`,
      default: siteName,
    },
    description,
    icons: globalData.favicon && {
      icon: getStrapiImageUrl(globalData.favicon, "thumbnail"),
      apple: getStrapiImageUrl(globalData.favicon, "thumbnail"),
    },

    openGraph: {
      type: "website",
      locale: "id_ID",
      url: siteUrl,
      siteName,
      title: siteName,
      description,
      images: globalData.favicon
        ? [getStrapiImageUrl(globalData.favicon, "thumbnail")]
        : [],
    },

    twitter: {
      card: "summary_large_image",
      title: siteName,
      description,
      images: globalData.favicon
        ? [getStrapiImageUrl(globalData.favicon, "thumbnail")]
        : [],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },

    alternates: {
      canonical: siteUrl,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${JetBrains.variable} ${Geologicas.variable} ${googleSansCode.variable} ${climateCrisisFont.variable} antialiased bg-background`}
        suppressHydrationWarning
      >
        <NuqsAdapter>
          <Cursor />
          <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
        </NuqsAdapter>
      </body>
    </html>
  );
}
