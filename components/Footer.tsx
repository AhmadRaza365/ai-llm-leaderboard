import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Logo } from "./Logo"
import { SITE_DATA } from "@/data/SiteData"
import SubscribeNewsLetter from "@/components/newsletter/SubscribeNewsLetter"

const footerSections = [
  {
    title: "Leaderboards",
    links: [
      {
        title: "LLMs by Use Case",
        href: "/leaderboards/use-cases",
      },
      {
        title: "Ranking by Language",
        href: "/leaderboards/natural-languages",
      },
      {
        title: "Ranking by Coding Languages",
        href: "/leaderboards/programming-languages",
      },
      {
        title: "Ranking by Top Usage",
        href: "/leaderboards/top-usage",
      },
      {
        title: "New Models Launch",
        href: "/models",
      },
      {
        title: "Top Models in General Category",
        href: "/leaderboards/general",
      },
    ],
  },
  {
    title: "Explore More",
    links: [
      {
        title: "All Models Directory",
        href: "/models",
      },
      {
        title: "Best LLMs for Coding",
        href: "/leaderboards/programming-languages",
      },
      {
        title: "Best LLMs for Legal",
        href: "/leaderboards/legal",
      },
      {
        title: "Best LLMs for Science",
        href: "/leaderboards/science",
      },
      {
        title: "Best LLMs for SEO",
        href: "/leaderboards/seo",
      },
      {
        title: "Best LLMs for Finance",
        href: "/leaderboards/finance",
      },
      {
        title: "Best LLMs for Javascript",
        href: "/leaderboards/javascript",
      },
      {
        title: "Best LLMs for Python",
        href: "/leaderboards/python",
      },
      {
        title: "Best LLMs for Math",
        href: "/leaderboards/math",
      },
    ],
  },
  {
    title: "Company",
    links: [
      // {
      //   title: "About",
      //   href: "/about",
      // },
      // {
      //   title: "Blog",
      //   href: "/blog",
      // },
      // {
      //   title: "Contact",
      //   href: "/contact",
      // },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        title: "Privacy Policy",
        href: "/privacy-policy",
      },
      {
        title: "Terms of Service",
        href: "terms-of-service",
      },
      {
        title: "Sitemap",
        href: "sitemap.xml",
      },
    ],
  },
]

const Footer = () => {
  return (
    <div className="flex h-fit flex-col">
      <footer className="border-t">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 px-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 xl:px-0">
            <div className="col-span-full xl:col-span-2">
              {/* Logo */}
              <Logo />
              <p className="sr-only">{SITE_DATA.name}</p>

              <p className="mt-4 text-muted-foreground">
                {SITE_DATA.shortDescription}
              </p>

              {/* Subscribe Newsletter */}
              <div className="mt-8 w-full">
                <h6 className="font-medium">Stay up to date</h6>
                <SubscribeNewsLetter />
              </div>
            </div>

            <div className="hidden xl:block" />

            {footerSections.map(({ title, links }) => (
              <div key={title}>
                <h6 className="font-medium">{title}</h6>
                <ul className="mt-6 space-y-4">
                  {links.map(({ title, href }) => (
                    <li key={title}>
                      <Link
                        className="text-muted-foreground hover:text-foreground"
                        href={href}
                      >
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator />
          <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                {SITE_DATA.name}
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"></path>
                </svg>
              </Link>
              <Link href="#" target="_blank">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                </svg>
              </Link>
              <Link href="#" target="_blank">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                </svg>
              </Link>
              <Link href="#" target="_blank">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 448 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
