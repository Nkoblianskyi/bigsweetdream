"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import type React from "react"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import { ThemeProvider } from "@/components/theme-provider"
import { montserrat, poppins, spaceGrotesk } from "@/styles/fonts"

function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${poppins.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-gradient-to-b from-black to-purple-950 min-h-screen font-poppins">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <ScrollToTop />
          <Header />
          <main className="container mx-auto px-4">{children}</main>
          <Footer />
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
