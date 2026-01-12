import { getBlogs } from "@/lib/api/blogs";
import { GradientBackground } from "@/components/ui/background";
import BlogsSection from "./_components/blogs-sections";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogsPage() {
  const { data: blogs } = await getBlogs();

  return (
    <GradientBackground>
      <div className="relative z-10 pt-20 md:pt-40 ">
        <BlogsSection blogs={blogs} />
      </div>
    </GradientBackground>
  );
}
