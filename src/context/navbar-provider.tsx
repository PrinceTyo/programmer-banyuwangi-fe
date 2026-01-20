"use client";

import { createContext, useContext, useState } from "react";

type Variant = "default" | "float";
type Theme = "light" | "dark";

interface NavbarContextType {
  variant: Variant;
  setVariant: (variant: Variant) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const NavbarContext = createContext<NavbarContextType | null>(null);

export function NavbarProvider({
  children,
  variant = "default",
  theme = "light",
}: {
  children: React.ReactNode;
  variant?: Variant;
  theme?: Theme;
}) {
  const [_variant, setVariant] = useState<Variant>(variant);
  const [_theme, setTheme] = useState<Theme>(theme);

  return (
    <NavbarContext.Provider
      value={{
        variant: _variant,
        setVariant,
        theme: _theme,
        setTheme,
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
