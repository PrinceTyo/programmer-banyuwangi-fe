import { GoArrowUpRight } from "react-icons/go";
import FooterLinks from "./footer-link";

export default function Footer() {
  return (
    <div
      className="relative z-10 bg-transparent pt-40"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M60 54L60 66M54 60L66 60' stroke='%236B7280' stroke-width='0.5' stroke-opacity='0.7'/%3E%3C/g%3E%3C/svg%3E"), 
          url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M15 15L15 0M15 15L30 15M15 15L15 30M15 15L0 15' stroke='%231F2937' stroke-width='0.5' stroke-opacity='0.6'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="mx-4 md:mx-10 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-8">
          <FooterLinks />

          <div className="flex flex-col md:flex-col items-start md:items-end w-full md:w-auto mt-4 md:mt-0">
            <div className="flex flex-row flex-wrap md:flex-col gap-x-6 gap-y-3 md:gap-10 w-full md:w-auto">
              <div className="flex flex-row gap-4">
                <div className="flex items-center gap-3 font-jetbrains text-[#BABABA] whitespace-nowrap cursor-pointer group transition-colors hover:text-white">
                  <span className="text-sm md:text-md">Contact</span>
                  <div className="border rounded-full border-[#BABABA] p-1 shrink-0 group-hover:bg-white group-hover:border-white transition-colors">
                    <GoArrowUpRight
                      size={14}
                      className="group-hover:text-black transition-colors"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 font-jetbrains text-[#BABABA] whitespace-nowrap cursor-pointer group transition-colors hover:text-white">
                  <span className="text-sm md:text-md">Recruit</span>
                  <div className="border rounded-full border-[#BABABA] p-1 shrink-0 group-hover:bg-white group-hover:border-white transition-colors">
                    <GoArrowUpRight
                      size={14}
                      className="group-hover:text-black transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-end justify-end gap-4 md:gap-6 text-[#BABABA]">
                <span className="text-sm md:text-md whitespace-nowrap cursor-pointer transition-colors hover:text-white">
                  Privacy Policy
                </span>
                <span className="text-sm md:text-md whitespace-nowrap cursor-pointer transition-colors hover:text-white">
                  License
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <h1 className="text-white font-jetbrains font-medium text-sm md:text-lg text-right">
            ©2025 Alche, Inc.
          </h1>
        </div>
      </div>

      <div className="mx-4 mt-6 md:mt-10">
        <img
          src="./assets/images/lgkpb.png"
          alt="Alche Logo"
          className="w-full"
        />
      </div>
    </div>
  );
}
