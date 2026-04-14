import Hero from "@/components/hero/Hero"
import Integrations from "@/components/rankings/integrations"
import RankingSection from "@/components/rankings/RankingSection"

export default function Page() {
  return (
    <main className="min-h-svh w-full">
      <Hero />

      <div className="mx-auto -mt-10 max-w-5xl px-6 pb-10">
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
        description="Best LLMs by Use Case - Instant Rankings Best LLMs by Use Case - Instant Rankings"
      />
    </main>
  )
}
