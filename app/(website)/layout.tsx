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


      <script src="https://quge5.com/88/tag.min.js" data-zone="251637" async data-cfasync="false"></script>
      <Footer />
    </>
  )
}
