import { Logo } from "@/components/Logo"
import { NavMenu } from "@/components/navbar/nav-menu"
import { NavigationSheet } from "@/components/navbar/navigation-sheet"
import ThemeSwitch from "./ThemeSwitch"

const Navbar = () => {
  return (
    <nav className="border-b bg-background py-2.5">
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
