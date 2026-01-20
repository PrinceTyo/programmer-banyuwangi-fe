"use client";

import { useNavbar } from "@/context/navbar-provider";
import { MobileNavbar } from "./mobile-navbar";
import { DesktopNavbar } from "./desktop-navbar";
import { StrapiImage } from "@/components/global/strapi-image";
import { cn } from "@/lib/utils";
import Link from "next/link";

import type { Navbar } from "@/types/strapi/single-type/navbar";

export default function Navbar({ data }: Readonly<{ data: Navbar }>) {
  const { variant, theme } = useNavbar();

  return (
    <nav
      className={cn(
        variant === "default" ? "sticky" : "fixed w-full",
        theme === "light" ? "text-black" : "text-white",
        "top-0 left-0 z-100 bg-transparent transition-colors duration-300"
      )}
    >
      <div className="mx-auto py-6 px-6 md:px-20 flex justify-between items-center">
        <Link href="/" className="h-16">
          <StrapiImage
            src={data.brandImage}
            size="small"
            className="w-full h-full object-contain"
          />
        </Link>
        <DesktopNavbar data={data} />
        <div className="md:hidden cursor-pointer">
          <MobileNavbar data={data} />
        </div>
      </div>
    </nav>
  );
}
