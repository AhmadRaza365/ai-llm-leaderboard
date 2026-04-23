import { LlmModel } from "@/interfaces/LlmModel"
import { GlowingEffect } from "../ui/glowing-effect"
import Image from "next/image"
import { formatDate } from "@/lib/date"
import { formatNumberToShortScaleNotation } from "@/lib/formatNumber"

type Props = {
  details: LlmModel
}

function LlmModelCard({ details }: Props) {
  const {
    image,
    name,
    authorDisplayName,
    description,
    releaseDate,
    contextLength,
  } = details

  return (
    <section className="relative flex h-full w-full flex-col gap-3 rounded-lg border px-5 py-7 shadow">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />

      <div className="relative h-20 w-20 overflow-hidden rounded-lg">
        <Image
          src={image || "/images/icons/anthropic.jpg"}
          alt={name}
          width={100}
          height={100}
          className="absolute inset-0 h-full w-full"
        />
      </div>

      <h3 className="mt-2 text-2xl font-medium">{name}</h3>
      <p className="text-base">By {authorDisplayName}</p>
      <p className="line-clamp-5 text-base">{description}</p>
      <section className="mt-auto flex divide-x">
        <div className="flex grow flex-col items-center gap-1.5 py-1">
          <p className="text-sm font-semibold">Release Date</p>
          <p className="text-sm">
            {formatDate({
              format: "DD MMM YYYY",
              unformatedDate: releaseDate,
            })}
          </p>
        </div>

        <div className="flex grow flex-col items-center gap-1.5 py-1">
          <p className="text-sm font-semibold">Context Size</p>
          <p className="text-sm">
            {formatNumberToShortScaleNotation(contextLength)}
          </p>
        </div>
      </section>
    </section>
  )
}

export default LlmModelCard
