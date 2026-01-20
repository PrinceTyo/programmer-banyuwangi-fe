import { NavbarProvider } from "@/context/navbar-provider";
import MainLayout from "@/components/layout/main-layout";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NavbarProvider theme="light" variant="float">
      <MainLayout>{children}</MainLayout>
    </NavbarProvider>
  );
}
