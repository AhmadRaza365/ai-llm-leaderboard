"use client"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "../ui/combobox"
import RankingCard from "./RankingCard"
import { GlowingEffect } from "../ui/glowing-effect"
import { Ranking } from "@/interfaces/Ranking"
import { useRouter } from "next/navigation"

type Props = {
  layout?: "standalone" | "compact"
  details: Ranking
  selectionOptions: {
    name: string
    slug: string
  }[]
  preSelectedOption: string
}

function RankingSection({
  layout = "standalone",
  details,
  selectionOptions,
  preSelectedOption,
}: Props) {
  const { name, description, ranks } = details
  const router = useRouter()
  const ranking = (ranks || []).sort((a, b) => a.position - b.position)

  return (
    <section className="relative mx-auto mb-4 flex h-full w-full max-w-7xl flex-col rounded-lg border bg-background px-6 py-8 sm:py-10">
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
            {name}
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
          {ranking.slice(0, 3).map((rank, index) => {
            const {
              name,
              authorDisplayName,
              description,
              contextLength,
              image,
            } = rank.model

            return (
              <RankingCard
                key={index}
                name={name}
                description={description}
                companyName={authorDisplayName}
                rank={index + 1}
                tokens={contextLength}
                layoutType={layout}
                image={image}
              />
            )
          })}
        </section>
        <section
          className={`${layout === "standalone" ? "space-y-2" : "space-y-2"}`}
        >
          {ranking
            .slice(3, layout === "standalone" ? 10 : 5)
            .map((rank, index) => {
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
                  layoutType={layout}
                />
              )
            })}
        </section>
      </section>
    </section>
  )
}

export default RankingSection
