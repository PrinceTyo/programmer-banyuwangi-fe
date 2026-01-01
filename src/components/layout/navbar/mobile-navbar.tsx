"use client";

import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { LuMenu } from "react-icons/lu";
import { useState, useEffect } from "react";
import { isActivePath } from "@/lib/data/navbar";
import Link from "next/link";

import type { Navbar } from "@/types/strapi/single-type/navbar";

export function MobileNavbar({ data }: Readonly<{ data: Navbar }>) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleNavClick = (
    href: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="bg-transparent hover:bg-transparent cursor-pointer">
          <LuMenu className="w-7 h-7" />
        </div>
      </SheetTrigger>
      <SheetContent
        side="fade"
        className="w-full h-full border-none! bg-transparent backdrop-blur-sm mx-none! flex flex-col"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Mobile Navigation</SheetTitle>
        </SheetHeader>
        <div className="flex flex-1 items-center justify-start">
          <div className="flex flex-col gap-10">
            {data.navigations.map((item) => {
              const isActive = isActivePath(pathname, item.url);

              return (
                <div key={item.url} className="flex items-center gap-4">
                  <Separator
                    className={`bg-[#BABABA] h-0.5! opacity-70 ${
                      isActive ? "w-6!" : "w-3!"
                    }`}
                  />
                  <Link
                    href={item.url}
                    onClick={(e) => handleNavClick(item.url, e)}
                  >
                    <span className="text-white hover:text-[#BABABA] text-2xl font-bold tracking-wide">
                      {item.title}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
