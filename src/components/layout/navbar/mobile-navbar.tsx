import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuMenu } from "react-icons/lu";
import { useState, useEffect } from "react";
import { isActivePath } from "@/lib/data/navbar";
import { NavConfig } from "@/types/navbar";

interface NavbarProps {
  navbarData: NavConfig;
}

export function MobileNavbar({ navbarData }: NavbarProps) {
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
            {navbarData.mainNav.map((item) => {
              const isActive = isActivePath(pathname, item.href);

              return (
                <div key={item.href} className="flex items-center gap-4">
                  <Separator
                    className={`bg-[#BABABA] h-0.5! opacity-70 ${
                      isActive ? "w-6!" : "w-3!"
                    }`}
                  />
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                  >
                    <span className="text-white hover:text-[#BABABA] text-2xl font-bold font-ibm tracking-wide">
                      {item.label}
                    </span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <SheetFooter className="flex flex-row items-center justify-between mx-4 mb-6">
          {navbarData.socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[#BABABA] text-sm font-normal font-ibm">
                {social.name}
              </span>
            </Link>
          ))}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
