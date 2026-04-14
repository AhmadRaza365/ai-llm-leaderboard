"use client"
import React from "react"
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
import { Button } from "../ui/button"

type Props = {
  title: string
  description: string
}

function RankingSection({ title, description }: Props) {
  return (
    <section className="mx-auto flex h-fit max-w-7xl flex-col rounded-lg border bg-background px-6 py-8 sm:py-10 sticky top-20">
      <section className="flex flex-col items-start justify-between gap-4 lg:flex-row">
        <section className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3.5 text-base text-pretty text-muted-foreground sm:text-base">
            {description}
          </p>
        </section>
        <section className="">
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

      <section className="mt-8 grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-5">
        <section className="space-y-3 lg:space-y-6">
          <RankingCard
            name="LLM Name"
            description="Fast-mode variant of Opus 4.6 - identical capabilities with higher output speed at premium 6x pricing."
            companyName="Company"
            rank={1}
            tokens={1000000}
          />
          <RankingCard
            name="LLM Name"
            description="Fast-mode variant of Opus 4.6 - identical capabilities with higher output speed at premium 6x pricing."
            companyName="Company"
            rank={2}
          />
          <RankingCard
            name="LLM Name"
            description="Fast-mode variant of Opus 4.6 - identical capabilities with higher output speed at premium 6x pricing."
            companyName="Company"
            rank={3}
          />
        </section>
        <section className="space-y-3 lg:space-y-2">
          <RankingCard
            name="LLM Name"
            description="Fast-mode variant of Opus 4.6 - identical capabilities with higher output speed at premium 6x pricing."
            companyName="Company"
            rank={4}
            tokens={500000}
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

        <section className="col-span-full flex items-center justify-center">
          <Button size={"lg"} variant={"outline"} className="w-52">
            View More
          </Button>
        </section>
      </section>
    </section>
  )
}

export default RankingSection
