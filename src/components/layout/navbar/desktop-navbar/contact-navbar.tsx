import { useNavbar } from "@/context/navbar-provider";
import { cn } from "@/lib/utils";
import Link from "next/link";

import type { Navbar } from "@/types/strapi/single-type/navbar";

interface ContactLinkProps {
  data: Navbar["additionalNavigation"];
}

export default function Contactlink({ data }: Readonly<ContactLinkProps>) {
  const { theme } = useNavbar();

  return (
    <div
      className={cn(
        theme === "light"
          ? "group-hover/contact:bg-white group-hover/contact:text-black border-black"
          : "group-hover/contact:bg-black group-hover/contact:text-white border-white",
        "border px-4 py-2 rounded-full cursor-pointer"
      )}
    >
      <Link
        href={data.url}
        className="text-sm font-normal font-jetbrains block relative h-5 overflow-hidden"
      >
        <div className="transition-transform duration-300 ease-in-out translate-y-0 group-hover/contact:-translate-y-5">
          <div className="h-5 flex items-center justify-center">
            {data.title}
          </div>
          <div className="h-5 flex items-center justify-center">
            {data.title}
          </div>
        </div>
      </Link>
    </div>
  );
}
