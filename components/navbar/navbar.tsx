import { Logo } from "@/components/Logo"
import { NavMenu } from "@/components/navbar/nav-menu"
import { NavigationSheet } from "@/components/navbar/navigation-sheet"
import ThemeSwitch from "./ThemeSwitch"

const Navbar = () => {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 w-full border-b bg-background/10 py-2.5 backdrop-blur-lg">
      <div className="container mx-auto flex h-full items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="flex items-center gap-3">
          <NavMenu className="hidden md:block" />
          <ThemeSwitch />

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
