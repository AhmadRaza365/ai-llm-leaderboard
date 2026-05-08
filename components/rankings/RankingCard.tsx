import Image from "next/image"
import React from "react"
import FirstMedal from "@/assets/icons/FirstMadel.png"
import SecondMadel from "@/assets/icons/SecondMadel.png"
import ThirdMadel from "@/assets/icons/ThirdMadel.png"
import { formatNumberToShortScaleNotation } from "@/lib/formatNumber"

type Props = {
  name: string
  description: string
  companyName: string
  rank: number
  tokens?: number
  layoutType?: "standalone" | "compact"
  image?: string
}

function RankingCard({
  name,
  description,
  companyName,
  rank,
  tokens,
  layoutType = "standalone",
  image,
}: Props) {
  const layout: "large" | "compact" =
    rank >= 1 && rank <= 3 && layoutType !== "compact" ? "large" : "compact"

  return (
    <section
      className={`relative flex h-fit items-start gap-4 overflow-hidden rounded-lg border bg-card text-card-foreground shadow sm:gap-4 ${
        layout === "large" ? "p-2.5 lg:p-6" : "px-2.5 py-3 lg:px-4"
      }`}
    >
      {layout === "compact" && (
        <section className="flex h-6 w-6 min-w-6 translate-y-1 items-center justify-center sm:h-12 sm:w-12">
          <p className="text-xl font-semibold lg:text-2xl">{rank}</p>
        </section>
      )}
      <section
        className={`relative flex aspect-square items-center justify-center overflow-hidden ${
          layout === "large"
            ? "h-12 w-12 min-w-12 rounded lg:h-25 lg:w-25 lg:min-w-25"
            : "h-8 w-8 min-w-8 rounded-full lg:h-12 lg:w-12 lg:min-w-12"
        }`}
      >
        <Image
          src={
            image
              ? `${process.env.NEXT_PUBLIC_S3_CDN}/${image}`
              : "/images/icons/ai-model.jpg"
          }
          alt={name}
          width={100}
          height={100}
          className="absolute top-0 left-0 h-full w-full object-cover object-center"
        />
      </section>
      <section className="z-2 max-w-xs">
        <h4
          className={`font-medium lg:font-medium ${
            layout === "large"
              ? "mb-1 text-base lg:text-xl"
              : "text-sm lg:text-lg"
          }`}
        >
          {name}
        </h4>
        <div className="flex items-center gap-2">
          <p className="text-xs font-normal underline underline-offset-2 lg:text-sm">
            by {companyName}
          </p>

          {tokens && layout === "large" && (
            <>
              •
              <p className="text-xs font-normal lg:text-sm">
                {formatNumberToShortScaleNotation(tokens)} tokens
              </p>
            </>
          )}
        </div>
        {layout === "large" && (
          <p className="mt-2 line-clamp-3 text-xs font-normal lg:line-clamp-3 lg:text-sm">
            {description}
          </p>
        )}
      </section>

      {tokens && layout === "compact" && (
        <p className="ml-auto text-end text-xs font-normal lg:text-base">
          {formatNumberToShortScaleNotation(tokens)} tokens
        </p>
      )}

      {layout === "large" && (
        <>
          <Image
            src={
              rank === 1 ? FirstMedal : rank === 2 ? SecondMadel : ThirdMadel
            }
            alt="Position Medals"
            className="absolute top-0 right-1 z-1 w-12 lg:right-5 lg:w-14"
          />
          <div className="ml-auto h-20 w-12 min-w-12 lg:min-w-14"></div>
        </>
      )}
    </section>
  )
}

export default RankingCard
