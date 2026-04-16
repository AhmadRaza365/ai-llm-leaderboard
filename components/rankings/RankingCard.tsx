import Image from "next/image"
import React from "react"
import FirstMedal from "@/assets/icons/FirstMadel.png"
import SecondMadel from "@/assets/icons/SecondMadel.png"
import ThirdMadel from "@/assets/icons/ThirdMadel.png"

type Props = {
  name: string
  description: string
  companyName: string
  rank: number
  tokens?: number
  layoutType?: "standalone" | "compact"
}

function RankingCard({
  name,
  description,
  companyName,
  rank,
  tokens,
  layoutType = "standalone",
}: Props) {
  const layout: "large" | "compact" =
    rank >= 1 && rank <= 3 && layoutType !== "compact" ? "large" : "compact"

  return (
    <section
      className={`relative flex h-fit items-start gap-4 overflow-hidden rounded-lg border bg-card text-card-foreground shadow ${
        layout === "large" ? "p-6" : "px-4 py-3"
      }`}
    >
      {layout === "compact" && (
        <section className="flex aspect-square h-12 w-12 items-center justify-center">
          <p className="text-2xl font-semibold">{rank}</p>
        </section>
      )}
      <section
        className={`relative flex aspect-square items-center justify-center overflow-hidden ${
          layout === "large"
            ? "h-25 w-25 min-w-25 rounded"
            : "h-12 w-12 min-w-5 rounded-full"
        }`}
      >
        <Image
          src="/images/icons/anthropic.jpg"
          alt="Anthropic"
          width={100}
          height={100}
          className="absolute top-0 left-0 h-full w-full object-cover object-center"
        />
      </section>
      <section className="z-2 max-w-xs">
        <h4
          className={`font-semibold ${
            layout === "large" ? "mb-1 text-xl" : "text-lg"
          }`}
        >
          {name}
        </h4>
        <div className="flex items-center gap-2">
          <p className="text-sm font-normal underline underline-offset-2">
            by {companyName}
          </p>

          {tokens && layout === "large" && (
            <>
              •<p className="text-sm font-normal">{tokens} tokens</p>
            </>
          )}
        </div>
        {layout === "large" && (
          <p className="mt-2 text-sm font-normal">{description}</p>
        )}
      </section>

      {tokens && layout === "compact" && (
        <p className="ml-auto text-base font-normal">{tokens} tokens</p>
      )}

      {layout === "large" && (
        <>
          <Image
            src={
              rank === 1 ? FirstMedal : rank === 2 ? SecondMadel : ThirdMadel
            }
            alt="Position Medals"
            className="absolute top-0 right-3 z-1 lg:right-5"
          />
          <div className="ml-auto h-20 w-12 min-w-12 lg:min-w-14"></div>
        </>
      )}
    </section>
  )
}

export default RankingCard
