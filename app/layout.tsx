import "./globals.css"
import { Geist_Mono, IBM_Plex_Sans, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/Footer"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Metadata } from "next"
import { SITE_DATA } from "@/data/SiteData"

const interHeading = Inter({ subsets: ["latin"], variable: "--font-heading" })

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    template: `%s`,
    default: `${SITE_DATA.title}`,
  },
  description: SITE_DATA.description,
  robots: "index, follow",
  openGraph: {
    images: `${SITE_DATA.siteURL}${SITE_DATA.siteMetaImage}`,
    type: "website",
    title: `${SITE_DATA.name}`,
    siteName: `${SITE_DATA.name}`,
    locale: "en_US",
    description: `${SITE_DATA.description}`,
    url: `${SITE_DATA.siteURL}`,
  },
  twitter: {
    card: "summary",
    creator: `${SITE_DATA.socialHandle}`,
    title: `${SITE_DATA.name}`,
    description: `${SITE_DATA.description}`,
    creatorId: `${SITE_DATA.socialHandle}`,
    images: `${SITE_DATA.siteURL}${SITE_DATA.siteMetaImage}`,
    site: `${SITE_DATA.name}`,
  },
  metadataBase: SITE_DATA.siteURL,
  applicationName: `${SITE_DATA.name}`,
  appleWebApp: {
    title: `${SITE_DATA.name}`,
  },
  manifest: "/manifest.webmanifest",
}

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
