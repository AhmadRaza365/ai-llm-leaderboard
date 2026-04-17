import LeaderBoard from "@/components/rankings/LeaderBoard"
import { LlmModel } from "@/interfaces/LlmModel"
import { Ranking } from "@/interfaces/Ranking"

function UseCaseLeaderBoard() {
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

  return (
    <main className="mt-20 min-h-svh py-16">
      <LeaderBoard
        name={ranking.name}
        description={ranking.description}
        lastUpdated={ranking.lastUpdated}
        ranks={ranking.ranks}
        type={ranking.type}
      />
    </main>
  )
}

export default UseCaseLeaderBoard
