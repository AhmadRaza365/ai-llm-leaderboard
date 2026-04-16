import { Box, Lock, Search, Settings, Sparkles } from "lucide-react"
import { GlowingEffect } from "../ui/glowing-effect"
import Link from "next/link"

function BrowseCategories() {
  return (
    <section className="mx-auto grid h-fit max-w-7xl grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-136 xl:grid-rows-2">
      <section></section>

      <CategoryItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Box className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="LLMs Ranking by Use Case"
        description="Instant rankings of the best LLMs for coding, science, legal, math, creative writing & 50+ real-world use cases. Find your perfect AI model in seconds."
        link="/"
      />

      <CategoryItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
        icon={<Settings className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="LLM Rankings by Language"
        description="Real-time rankings of the best LLMs for English, Arabic, Spanish, French, Chinese, Hindi & more. Optimized for fluency, accuracy & cultural nuance."
        link="/"
      />

      <CategoryItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
        icon={<Lock className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Best LLMs for Programming Languages"
        description="Live rankings of the top LLMs for Python, JavaScript, Java, C++, Rust, Go & 15+ languages. Powered by real benchmarks & developer votes."
        link="/"
      />

      <CategoryItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
        icon={<Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Ranking by Top Usage"
        description="See which LLMs are used the most in real-world applications. Rankings by adoption, traffic & developer usage."
        link="/"
      />

      <CategoryItem
        area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
        icon={<Search className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Top Models in General Category"
        description="Overall global LLM rankings. Compare the best models across all categories on general performance & intelligence."
        link="/"
      />
    </section>
  )
}

interface CategoryItemProps {
  area: string
  icon: React.ReactNode
  title: string
  description: React.ReactNode
  link: string
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
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BrowseCategories
