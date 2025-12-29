import { NavConfig } from "@/types/navbar";
import Link from "next/link";

interface ContactLinkProps {
  navbarData: NavConfig;
  isDark: boolean;
  isHovered: boolean;
}

export default function Contactlink({ navbarData, isDark, isHovered }: ContactLinkProps) {
  const btnBorder = isDark ? "border-black" : "border-white";
  const btnHover = isDark
    ? "hover:bg-black hover:text-white"
    : "hover:bg-white hover:text-black";

  return (
    <div
      className={`border ${btnBorder} ${btnHover} transition-colors duration-300 px-4 py-2 rounded-full cursor-pointer`}
    >
      <Link
        href={navbarData.ctaButton.href}
        className="text-sm font-normal font-jetbrains block"
      >
        <div className="relative h-5 overflow-hidden">
          <div
            className={`transition-transform duration-300 ease-in-out ${
              isHovered ? "-translate-y-5" : "translate-y-0"
            }`}
          >
            <div className="h-5 flex items-center justify-center">
              {navbarData.ctaButton.label}
            </div>
            <div className="h-5 flex items-center justify-center">
              {navbarData.ctaButton.label}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
