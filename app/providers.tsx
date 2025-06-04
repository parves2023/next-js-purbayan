"use client"

import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  // Force dark theme
  return (
    <ThemeProvider forcedTheme="dark" attribute="class">
      {children}
    </ThemeProvider>
  )
}
