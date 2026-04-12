import { SITE_DATA } from "@/data/SiteData"
import Image from "next/image"
import Link from "next/link"
import LogoDark from "@/assets/logo/LogoDark.svg"
import LogoLight from "@/assets/logo/LogoLight.svg"

export const Logo = () => (
  <Link href="/" className="flex w-fit items-center justify-start">
    <Image
      src={LogoDark}
      alt={SITE_DATA.name}
      className="block w-40 dark:hidden"
    />
    <Image
      src={LogoLight}
      alt={SITE_DATA.name}
      className="hidden w-40 dark:block"
    />
    <span className="sr-only">{SITE_DATA.name}</span>
  </Link>
)
