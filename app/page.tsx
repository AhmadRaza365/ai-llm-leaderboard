import Hero from "@/components/hero/Hero"
import RankingSection from "@/components/rankings/RankingSection"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
  return (
    <main className="min-h-svh w-full">
      <Hero />

      <div className="mx-auto -mt-26 max-w-5xl px-6 pb-10">
        <div className="mt-14 grid grid-cols-1 overflow-hidden rounded-2xl border sm:grid-cols-2 md:grid-cols-3">
          <div className="-m-px border-t border-l p-10">
            <span className="font-satoshi text-5xl font-semibold">200+</span>
            <p className="mt-4 text-xl text-foreground/80">LLM Models</p>
          </div>
          <div className="-m-px border-t border-l p-10">
            <span className="font-satoshi text-5xl font-semibold">50+</span>
            <p className="mt-4 text-xl text-foreground/80">
              Specialized Categories
            </p>
          </div>
          <div className="-m-px border-t border-l p-10 sm:col-span-2 md:col-span-1">
            <span className="font-satoshi text-5xl font-semibold">12+</span>
            <p className="mt-4 text-xl text-foreground/80">Languages</p>
          </div>
        </div>
      </div>

      <RankingSection
        title="Best LLMs by Use Case - Instant Rankings"
        description="Instant rankings of the best LLMs for coding, science, legal, math, creative writing & 50+ real-world use cases. Find your perfect AI model in seconds."
        layout="standalone"
      />

      <section className="mx-auto mb-4 grid h-fit max-w-7xl grid-cols-1 gap-4 lg:grid-cols-2">
        <RankingSection
          title="LLM Rankings by Language"
          description="Real-time rankings of the best LLMs for English, Arabic, Spanish, French, Chinese, Hindi & more. Optimized for fluency, accuracy & cultural nuance."
          layout="compact"
        />
        <RankingSection
          title="Best LLMs for Programming Languages"
          description="Live rankings of the top LLMs for Python, JavaScript, TypeScript, Java, C++, Rust, Go & 15+ languages. Powered by real benchmarks & developer votes."
          layout="compact"
        />
      </section>

      <section className="my-8 flex w-full items-center justify-center">
        <Link href={"/leaderboards"}>
          <Button variant={"outline"} size={"lg"} className="w-38">
            View More
          </Button>
        </Link>
      </section>
    </main>
  )
}
