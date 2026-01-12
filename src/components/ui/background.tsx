import type { ReactNode } from "react";

export function GradientBackground({ children }: { children?: ReactNode }) {
  return (
    <>
      <div
        className="fixed inset-0 overflow-hidden pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M60 54L60 66M54 60L66 60' stroke='%236B7280' stroke-width='0.5' stroke-opacity='0.7'/%3E%3C/g%3E%3C/svg%3E"), 
          url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M15 15L15 0M15 15L30 15M15 15L15 30M15 15L0 15' stroke='%231F2937' stroke-width='0.5' stroke-opacity='0.6'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute bg-[#004729] top-[15%] left-1/2 -translate-x-1/2 w-150 h-150 rounded-full opacity-50 blur-[120px]" />
        <div className="absolute bg-[#20033D] bottom-0 left-[10%] w-150 h-150 rounded-full opacity-50 blur-[120px]" />
        <div
          className="absolute bg-[#00076B] bottom-0 right-[10%] w-150 h-150 rounded-full opacity-50 blur-[120px]"
          style={{ background: "#00076B" }}
        />
      </div>

      {children}
    </>
  );
}
