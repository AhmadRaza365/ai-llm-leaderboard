"use client"

import { Ranking } from "@/interfaces/Ranking"
import React from "react"
import { GlowingEffect } from "../ui/glowing-effect"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "../ui/combobox"
import RankingCard from "./RankingCard"
import { useRouter } from "next/navigation"

function LeaderBoard({
  ranking,
  preSelectedOption,
  selectionOptions,
  hideOptions = false,
}: {
  ranking: Ranking
  selectionOptions: {
    name: string
    slug: string
  }[]
  preSelectedOption: string
  hideOptions?: boolean
}) {
  const { name, description, ranks } = ranking
  const router = useRouter()

  const sortedRanks = (ranks || []).sort((a, b) => a.position - b.position)

  return (
    <section className="relative mx-auto mb-4 flex h-fit max-w-7xl flex-col rounded-lg border bg-background px-4 py-6 sm:py-10 lg:px-6">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />

      <section className="flex flex-col items-start justify-between gap-4 lg:flex-row">
        <section className={`max-w-xl`}>
          <h1 className={`text-2xl font-bold tracking-tight sm:text-3xl`}>
            {name}
          </h1>
          <p className={`mt-3.5 text-base text-pretty text-muted-foreground`}>
            {description}
          </p>
        </section>
        {!hideOptions && (
          <section className="min-w-fit">
            <Combobox
              items={selectionOptions.map((category) => category.name)}
              onValueChange={(value) => {
                const slug = selectionOptions.find(
                  (option) => option.name === value
                )?.slug

                if (slug) {
                  router.push(`/leaderboards/${slug}`)
                }
              }}
              defaultValue={preSelectedOption}
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
        )}
      </section>

      <section
        className={`mt-8 grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-5`}
      >
        <section className={`space-y-2 lg:space-y-6`}>
          {sortedRanks.slice(0, 3).map((rank, index) => {
            const { name, authorDisplayName, description, contextLength } =
              rank.model

            return (
              <RankingCard
                key={index}
                name={name}
                description={description}
                companyName={authorDisplayName}
                rank={index + 1}
                tokens={contextLength}
                layoutType="standalone"
              />
            )
          })}
        </section>
        <section className={`space-y-2`}>
          {sortedRanks.slice(3, 10).map((rank, index) => {
            const { name, authorDisplayName, description, contextLength } =
              rank.model

            return (
              <RankingCard
                key={index}
                name={name}
                description={description}
                companyName={authorDisplayName}
                rank={index + 4}
                tokens={contextLength}
                layoutType="standalone"
              />
            )
          })}
        </section>
      </section>
    </section>
  )
}

export default LeaderBoard
