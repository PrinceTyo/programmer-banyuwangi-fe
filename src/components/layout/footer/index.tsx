"use client";

import { usePathname } from "next/navigation";
import { StrapiImage } from "@/components/global/strapi-image";
import AdditionalNavigation from "./additional-navigation";
import MainNavigation from "./main-navigation";

import type { Footer } from "@/types/strapi/single-type/footer";

export default function Footer({ data }: { data: Footer }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer
      className={`relative pt-40 ${isHome ? "bg-gray-900" : "bg-transparent"}`}
      style={
        isHome
          ? {
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M60 54L60 66M54 60L66 60' stroke='%236B7280' stroke-width='0.5' stroke-opacity='0.7'/%3E%3C/g%3E%3C/svg%3E"),
              url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M15 15L15 0M15 15L30 15M15 15L15 30M15 15L0 15' stroke='%231F2937' stroke-width='0.5' stroke-opacity='0.6'/%3E%3C/g%3E%3C/svg%3E")`,
            }
          : undefined
      }
    >
      <div className="mx-4 md:mx-10 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-8">
          <MainNavigation navigation={data.navigationGrid} />
          <AdditionalNavigation navigation={data.additionalNavigation} />
        </div>

        <div className="flex justify-end">
          <h1 className="text-white font-jetbrains font-medium text-sm md:text-lg text-right">
            ©{new Date().getFullYear()} {data.copyrightText}
          </h1>
        </div>
      </div>

      <div className="mx-4 mt-6 md:mt-10">
        <StrapiImage
          src={data.logo}
          alt="Footer Logo"
          className="w-full"
          size="thumbnail"
        />
      </div>
    </footer>
  );
}
