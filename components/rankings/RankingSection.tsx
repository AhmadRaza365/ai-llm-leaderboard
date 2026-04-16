"use client"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "../ui/combobox"
import { CATEGORIES } from "@/data/Categories"
import RankingCard from "./RankingCard"
import { GlowingEffect } from "../ui/glowing-effect"

type Props = {
  title: string
  description: string
  layout?: "standalone" | "compact"
}

function RankingSection({ title, description, layout = "standalone" }: Props) {
  return (
    <section className="relative mx-auto mb-4 flex h-fit max-w-7xl flex-col rounded-lg border bg-background px-6 py-8 sm:py-10">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />

      <section className="flex flex-col items-start justify-between gap-4 lg:flex-row">
        <section
          className={`${layout === "standalone" ? "max-w-xl" : "max-w-xl"}`}
        >
          <h2
            className={`${
              layout === "standalone"
                ? "text-2xl font-bold tracking-tight sm:text-3xl"
                : "text-lg font-bold tracking-tight sm:text-xl"
            }`}
          >
            {title}
          </h2>
          <p
            className={`mt-3.5 text-pretty text-muted-foreground ${
              layout === "standalone" ? "text-base" : "text-sm"
            }`}
          >
            {description}
          </p>
        </section>
        <section className="min-w-fit">
          <Combobox
            items={CATEGORIES.map((category) => category.name)}
            onValueChange={(value) => {
              console.log("value", value)
            }}
            defaultInputValue=""
          >
            <ComboboxInput placeholder="Select a framework" />
            <ComboboxContent>
              <ComboboxEmpty>No items found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </section>
      </section>

      <section
        className={`mt-8 grid gap-3 ${
          layout === "standalone"
            ? "grid-cols-1 lg:grid-cols-2 lg:gap-5"
            : "grid-cols-1"
        }`}
      >
        <section
          className={`${
            layout === "standalone" ? "space-y-2 lg:space-y-6" : "space-y-2"
          }`}
        >
          <RankingCard
            name="LLM Name"
            description="Fast-mode variant of Opus 4.6 - identical capabilities with higher output speed at premium 6x pricing."
            companyName="Company"
            rank={1}
            tokens={1000000}
            layoutType={layout}
          />
          <RankingCard
            name="LLM Name"
            description="Fast-mode variant of Opus 4.6 - identical capabilities with higher output speed at premium 6x pricing."
            companyName="Company"
            rank={2}
            tokens={1000000}
            layoutType={layout}
          />
          <RankingCard
            name="LLM Name"
            description="Fast-mode variant of Opus 4.6 - identical capabilities with higher output speed at premium 6x pricing."
            companyName="Company"
            rank={3}
            tokens={1000000}
            layoutType={layout}
          />
        </section>
        <section
          className={`${layout === "standalone" ? "space-y-2" : "space-y-2"}`}
        >
          <RankingCard
            name="LLM Name"
            description="Fast-mode variant of Opus 4.6 - identical capabilities with higher output speed at premium 6x pricing."
            companyName="Company"
            rank={4}
            tokens={500000}
            layoutType={layout}
          />
          <RankingCard
            name="LLM Name"
            description="Fast-mode variant of Opus 4.6 - identical capabilities with higher output speed at premium 6x pricing."
            companyName="Company"
            rank={5}
            tokens={500000}
          />
          <RankingCard
            name="LLM Name"
            description="Fast-mode variant of Opus 4.6 - identical capabilities with higher output speed at premium 6x pricing."
            companyName="Company"
            rank={6}
            tokens={500000}
          />
          <RankingCard
            name="LLM Name"
            description="Fast-mode variant of Opus 4.6 - identical capabilities with higher output speed at premium 6x pricing."
            companyName="Company"
            rank={7}
            tokens={500000}
          />
          <RankingCard
            name="LLM Name"
            description="Fast-mode variant of Opus 4.6 - identical capabilities with higher output speed at premium 6x pricing."
            companyName="Company"
            rank={8}
            tokens={500000}
          />
          <RankingCard
            name="LLM Name"
            description="Fast-mode variant of Opus 4.6 - identical capabilities with higher output speed at premium 6x pricing."
            companyName="Company"
            rank={9}
            tokens={500000}
          />
          <RankingCard
            name="LLM Name"
            description="Fast-mode variant of Opus 4.6 - identical capabilities with higher output speed at premium 6x pricing."
            companyName="Company"
            rank={10}
            tokens={500000}
          />
        </section>
      </section>
    </section>
  )
}

export default RankingSection
