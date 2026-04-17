import Hero from "@/components/hero/Hero"
import RankingSection from "@/components/rankings/RankingSection"
import { Button } from "@/components/ui/button"
import { LlmModel } from "@/interfaces/LlmModel"
import { Ranking } from "@/interfaces/Ranking"
import Link from "next/link"

export default function Page() {
  const model: LlmModel = {
    author: "anthropic",
    authorDisplayName: "Anthropic",
    inputModalities: ["text", "image"],
    name: "Anthropic: Claude Opus 4.7",
    outputModalities: ["text"],
    releaseDate: "2026-04-16T14:51:40.905+00:00",
    description:
      "Opus 4.7 is the next generation of Anthropic's Opus family, built for long-running, asynchronous agents. Building on the coding and agentic strengths of Opus 4.6, it delivers stronger performance on complex, multi-step tasks and more reliable agentic execution across extended workflows. It is especially effective for asynchronous agent pipelines where tasks unfold over time - large codebases, multi-stage debugging, and end-to-end project orchestration.\n\nBeyond coding, Opus 4.7 brings improved knowledge work capabilities - from drafting documents and building presentations to analyzing data. It maintains coherence across very long outputs and extended sessions, making it a strong default for tasks that require persistence, judgment, and follow-through.\n\nFor users upgrading from earlier Opus versions, see our [official migration guide here](https://openrouter.ai/docs/guides/evaluate-and-optimize/model-migrations/claude-4-7)\n",
    slug: "anthropic/claude-opus-4.7",
    contextLength: 1000000,
  }

  const tempRanks: Ranking["ranks"] = [
    {
      position: 1,
      model: model,
    },
    {
      position: 2,
      model: model,
    },
    {
      position: 3,
      model: model,
    },
    {
      position: 4,
      model: model,
    },
    {
      position: 5,
      model: model,
    },
    {
      position: 6,
      model: model,
    },
    {
      position: 7,
      model: model,
    },
    {
      position: 8,
      model: model,
    },
    {
      position: 9,
      model: model,
    },
    {
      position: 10,
      model: model,
    },
  ]

  const ranking: Ranking = {
    name: "Best LLMs by Use Case - Instant Rankings",
    description:
      "Instant rankings of the best LLMs for coding, science, legal, math, creative writing & 50+ real-world use cases. Find your perfect AI model in seconds.",
    lastUpdated: "",
    type: "use-case",
    ranks: tempRanks,
  }

  const ranking2: Ranking = {
    name: "LLM Rankings by Language",
    description:
      "Real-time rankings of the best LLMs for English, Arabic, Spanish, French, Chinese, Hindi & more. Optimized for fluency, accuracy & cultural nuance.",
    lastUpdated: "",
    type: "use-case",
    ranks: tempRanks,
  }

  const ranking3: Ranking = {
    name: "Best LLMs for Programming Languages",
    description:
      "Live rankings of the top LLMs for Python, JavaScript, TypeScript, Java, C++, Rust, Go & 15+ languages. Powered by real benchmarks & developer votes.",
    lastUpdated: "",
    type: "use-case",
    ranks: tempRanks,
  }

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

      <RankingSection details={ranking} layout="standalone" />

      <section className="mx-auto mb-4 grid h-fit max-w-7xl grid-cols-1 gap-4 lg:grid-cols-2">
        <RankingSection layout="compact" details={ranking2} />
        <RankingSection layout="compact" details={ranking3} />
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
