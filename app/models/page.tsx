import { getLlmModelsList } from "@/actions/actions"
import LlmModelCard from "@/components/models/LlmModelCard"
import { Button } from "@/components/ui/button"
import { LlmModelsListResponse } from "@/interfaces/Response"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

async function ModelsPage() {
  const res = await getLlmModelsList({
    limit: 20,
    page: 1,
  })

  const response: LlmModelsListResponse = JSON.parse(res || "{}")

  const models = response.data || []

  return (
    <main className="mt-20 min-h-svh py-16">
      <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-12 text-center">
        <h1 className="font-satoshi text-4xl leading-[1.4] font-medium tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          List of All{" "}
          <span className="ms-2 inline-block rounded-md bg-primary px-1.5 py-0.5 leading-[1.1] tracking-tight text-primary-foreground sm:rounded-lg sm:px-3.5">
            LLM Models
          </span>
        </h1>
        <p className="mt-6 text-center text-xl tracking-normal text-balance text-muted-foreground sm:text-2xl sm:leading-normal md:text-3xl">
          Discover and compare 200+ large language models with real-time
          rankings, benchmarks, and community votes.
        </p>
        <div className="mx-auto mt-10 flex w-full max-w-xs flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={"/leaderboards"}>
            <Button className="w-full sm:w-auto" size="lg">
              View Leaderboards <ArrowUpRight />
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto grid grid-cols-1 gap-6 px-5 md:grid-cols-2 lg:grid-cols-3">
        {models.map((model, index) => {
          return <LlmModelCard key={index} details={model} />
        })}
      </section>
    </main>
  )
}

export default ModelsPage
