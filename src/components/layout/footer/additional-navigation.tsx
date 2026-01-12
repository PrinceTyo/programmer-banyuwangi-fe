import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

import type { Footer } from "@/types/strapi/single-type/footer";

export default function AdditionalNavigation({
  navigation,
}: {
  navigation: Footer["additionalNavigation"];
}) {
  return (
    <div className="flex flex-col md:flex-col items-start md:items-end w-full md:w-auto mt-4 md:mt-0">
      <div className="flex flex-row flex-wrap md:flex-col gap-x-6 gap-y-3 md:gap-10 w-full md:w-auto">
        {navigation.primary && (
          <div className="flex flex-row gap-4">
            {navigation.primary.map((nav) => (
              <Link
                key={nav.id}
                href={nav.url}
                className="flex items-center gap-3 font-jetbrains text-[#BABABA] whitespace-nowrap cursor-pointer group transition-colors hover:text-white"
              >
                <span className="text-sm md:text-md">{nav.title}</span>
                {nav.showIcon && (
                  <div className="border rounded-full border-[#BABABA] p-1 shrink-0 group-hover:bg-white group-hover:border-white transition-colors">
                    <GoArrowUpRight
                      size={14}
                      className="group-hover:text-black transition-colors"
                    />
                  </div>
                )}
              </Link>
            ))}
          </div>
        )}

        {navigation.secondary && (
          <div className="flex items-end justify-end gap-4 md:gap-6 text-[#BABABA]">
            {navigation.secondary.map((nav) => (
              <Link
                key={nav.id}
                href={nav.url}
                className="text-sm md:text-md whitespace-nowrap cursor-pointer transition-colors hover:text-white"
              >
                {nav.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
