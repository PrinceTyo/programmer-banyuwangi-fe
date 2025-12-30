import Cursor from "@/components/effects/cursor";
import BlogsSection from "./_components/sections/blogs-sections";

export default function BlogsPage() {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-1">
        <div className="absolute bg-[#004729] top-[15%] left-1/2 -translate-x-1/2 w-150 h-150 rounded-full opacity-50 blur-[120px]" />
        <div className="absolute bg-[#20033D] bottom-0 left-[10%] w-150 h-150 rounded-full opacity-50 blur-[120px]" />
        <div
          className="absolute bg-[#00076B] bottom-0 right-[10%] w-150 h-150 rounded-full opacity-50 blur-[120px]"
          style={{ background: "#00076B" }}
        />
      </div>

      <div className="relative z-10 pt-20 md:pt-40 ">
        <Cursor/>
        <BlogsSection />
      </div>
    </>
  );
}
