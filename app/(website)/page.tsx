import { getRankingsByKeyword } from "@/actions/actions"
import Hero from "@/components/hero/Hero"
import RankingSection from "@/components/rankings/RankingSection"
import { Button } from "@/components/ui/button"
import {
  CATEGORIES,
  NATURAL_LANGUAGES,
  PROGRAMMING_LANGUAGES,
} from "@/data/Categories"
import { Ranking } from "@/interfaces/Ranking"
import Link from "next/link"

export default async function Page() {
  const categoryRankingsRes = await getRankingsByKeyword({
    typeKeyword: "programming",
  })

  const englishRankingsRes = await getRankingsByKeyword({
    typeKeyword: "english",
  })

  const javaScriptRankingsRes = await getRankingsByKeyword({
    typeKeyword: "javascript",
  })

  const categoryRankings: Ranking = JSON.parse(categoryRankingsRes || "{}")
  const englishRankings: Ranking = JSON.parse(englishRankingsRes || "{}")
  const javaScriptRankings: Ranking = JSON.parse(javaScriptRankingsRes || "{}")

  return (
    <main className="min-h-svh w-full">
      <Hero />

      <div className="mx-auto -mt-26 max-w-5xl px-5 pb-10 lg:px-6">
        <div className="mt-14 grid grid-cols-1 overflow-hidden rounded-2xl border sm:grid-cols-2 md:grid-cols-3">
          <div className="-m-px border-t border-l p-10">
            <span className="font-satoshi text-5xl font-semibold">500+</span>
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
      <section className="w-full px-5 lg:px-0">
        <RankingSection
          details={categoryRankings}
          layout="standalone"
          selectionOptions={CATEGORIES}
          preSelectedOption="Programming"
          title="Best LLMs by Use Case"
          description="Find the perfect AI model for your specific need. Compare top LLMs across Coding, Legal, Marketing, Science, SEO, and many other professional use cases."
        />
      </section>

      <section className="mx-auto mb-4 grid h-fit max-w-7xl grid-cols-1 gap-4 px-5 lg:grid-cols-2 lg:px-0">
        <RankingSection
          layout="compact"
          details={englishRankings}
          selectionOptions={NATURAL_LANGUAGES}
          preSelectedOption="English"
          title="Best LLMs by Natural Language"
          description="Which AI performs best in your language? Compare top LLMs for English, Arabic, Hindi, Chinese, French, Spanish and many other languages."
        />
        <RankingSection
          layout="compact"
          details={javaScriptRankings}
          selectionOptions={PROGRAMMING_LANGUAGES}
          preSelectedOption="JavaScript"
          title="Best LLMs for Programming Languages"
          description="See which AI models write the best code. Leaderboard rankings for JavaScript, Python, TypeScript, Java, Rust, Go, C#, and other languages."
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
