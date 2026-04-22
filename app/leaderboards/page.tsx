import BrowseCategories from "@/components/rankings/BrowseCategories"
import { Box, Sparkles, Languages, Code, Globe } from "lucide-react"

function LeaderBoardsPage() {
  const leaderBoards = [
    {
      area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
      icon: <Box className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "LLMs Ranking by Use Case",
      description:
        "Instant rankings of the best LLMs for coding, science, legal, math, creative writing & 50+ real-world use cases. Find your perfect AI model in seconds.",
      link: "/leaderboards/use-cases",
    },
    {
      area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
      icon: <Languages className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "LLM Rankings by Language",
      description:
        "Real-time rankings of the best LLMs for English, Arabic, Spanish, French, Chinese, Hindi & more. Optimized for fluency, accuracy & cultural nuance.",
      link: "/leaderboards/natural-languages",
    },
    {
      area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
      icon: <Code className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Best LLMs for Programming Languages",
      description:
        "Live rankings of the top LLMs for Python, JavaScript, Java, C++, Rust, Go & 15+ languages. Powered by real benchmarks & developer votes.",
      link: "/leaderboards/programming-languages",
    },
    {
      area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
      icon: <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Ranking by Top Usage",
      description:
        "See which LLMs are used the most in real-world applications. Rankings by adoption, traffic & developer usage.",
      link: "/leaderboards/top-usage",
    },
    {
      area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
      icon: <Globe className="h-4 w-4 text-black dark:text-neutral-400" />,
      title: "Top Models in General Category",
      description:
        "Overall global LLM rankings. Compare the best models across all categories on general performance & intelligence.",
      link: "/leaderboards/general",
    },
  ]

  return (
    <main className="py-16">
      <section className="mx-auto flex max-w-7xl flex-col px-6 py-12 sm:py-14">
        <h1 className="font-satoshi text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          All LLM Leaderboards
        </h1>
        <p className="mx-auto mt-3.5 max-w-2xl text-center text-lg text-pretty text-muted-foreground sm:text-xl">
          Browse rankings by use case, language, programming language, top
          usage, and more. Updated daily with real benchmarks and community
          votes.
        </p>
      </section>

      <BrowseCategories categories={leaderBoards} />
    </main>
  )
}

export default LeaderBoardsPage
