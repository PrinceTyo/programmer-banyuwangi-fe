import "@/styles/globals.css";

export default function UserSpaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    
    <main>{children}</main>
    </>
);
}
