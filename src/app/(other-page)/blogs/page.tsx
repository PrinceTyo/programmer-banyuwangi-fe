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
      <main className="relative z-10">
        <BlogsSection blogs={blogs} />
      </main>
    </GradientBackground>
  );
}
