import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Logo } from "@/components/Logo"
import { SITE_DATA } from "@/data/SiteData"
import { CATEGORIES } from "@/data/Categories"

export const NavigationSheet = () => {
  return (
    <Sheet>
      <VisuallyHidden>
        <SheetTitle>{SITE_DATA.name}</SheetTitle>
      </VisuallyHidden>

      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="max-h-screen overflow-auto px-6 py-3">
        <Logo />

        <div className="mt-8 flex flex-col gap-y-4 text-base">
          <Link className="inline-block" href="/">
            Home
          </Link>

          <div>
            <div className="font-bold">Leaderboards</div>
            <ul className="mt-2 ml-1 space-y-3 border-l pl-4">
              {CATEGORIES.map((category, index) => (
                <li key={index}>
                  <Link
                    className="flex items-center gap-2"
                    href={`/leaderboards/${category.slug}`}
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link className="inline-block" href="/models">
            New Models
          </Link>
          <Link className="inline-block" href="/blog">
            Blog
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
