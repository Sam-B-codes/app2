"use client"; // ensures this runs on the client side in Next.js 13+

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// A wrapper component for ThemeProvider
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
}
