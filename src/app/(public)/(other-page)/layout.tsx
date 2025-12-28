import SmoothScrollWrapper from "@/components/wrappers/smooth-scroll-wrapper";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="pt-31 select-none bg-gray-950 min-h-screen">
      <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
    </main>
  );
}
