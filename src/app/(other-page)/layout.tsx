import { NavbarProvider } from "@/context/navbar-provider";
import MainLayout from "@/components/layout/main-layout";

export default function OtherLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavbarProvider theme="dark">
      <MainLayout>{children}</MainLayout>
    </NavbarProvider>
  );
}
