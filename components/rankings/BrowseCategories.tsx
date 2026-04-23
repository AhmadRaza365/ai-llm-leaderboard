import { Box, Lock, Search, Settings, Sparkles } from "lucide-react"
import { GlowingEffect } from "../ui/glowing-effect"
import Link from "next/link"

interface CategoryItemProps {
  area: string
  icon: React.ReactNode
  title: string
  description: React.ReactNode
  link: string
}

type Props = {
  categories: CategoryItemProps[]
}

function BrowseCategories({ categories }: Props) {
  return (
    <section className="mx-auto grid h-fit max-w-7xl grid-cols-1 grid-rows-none gap-4 px-5 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-136 xl:grid-rows-2">
      {categories.map((category, index) => {
        const { description, area, icon, link, title } = category
        return (
          <CategoryItem
            key={index}
            area={area}
            icon={icon}
            title={title}
            description={description}
            link={link}
          />
        )
      })}
    </section>
  )
}

const CategoryItem = ({
  area,
  icon,
  title,
  description,
  link,
}: CategoryItemProps) => {
  return (
    <Link href={link} className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h2 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h2>
              <p className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BrowseCategories
