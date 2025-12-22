import "@/styles/globals.css";
import MainLayout from "@/components/layout/main-layout";

export default function UserSpaceLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}