"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface NavbarContextType {
  variant: "default" | "float";
  setVariant: (variant: "default" | "float") => void;
}

export const NavbarContext = createContext<NavbarContextType | null>(null);

export function NavbarProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = useState<"default" | "float">("default");

  return (
    <NavbarContext.Provider
      value={{
        variant,
        setVariant,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
}

export function NavbarSetter({
  variant,
  children,
}: {
  variant: "default" | "float";
  children: React.ReactNode;
}) {
  const { setVariant } = useNavbar();

  useEffect(() => {
    setVariant(variant);

    return () => {
      setVariant("default");
    };
  }, [variant]);

  return children;
}
