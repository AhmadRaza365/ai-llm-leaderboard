import "./globals.css"
import { Geist_Mono, IBM_Plex_Sans, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/Footer"
import { TooltipProvider } from "@/components/ui/tooltip"

const interHeading = Inter({ subsets: ["latin"], variable: "--font-heading" })

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        ibmPlexSans.variable,
        interHeading.variable
      )}
    >
      <body>
        <ThemeProvider>
          <TooltipProvider>
            <Navbar />
            {children}
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
