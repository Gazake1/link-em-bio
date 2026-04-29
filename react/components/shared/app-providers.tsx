"use client";

import type { ReactNode } from "react";

import { ThemeProvider } from "@/components/shared/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <TooltipProvider>{children}</TooltipProvider>
      <Toaster position="top-right" richColors />
    </ThemeProvider>
  );
}
