import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/Footer"
import NextTopLoader from "nextjs-toploader"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <NextTopLoader
        color="oklch(0.52 0.105 223.128)"
        showForHashAnchor
        showSpinner={false}
        height={4}
      />
      {children}
      <Footer />
    </>
  )
}
