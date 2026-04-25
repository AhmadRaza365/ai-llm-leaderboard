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
    <section className="relative flex h-full w-full flex-col gap-2 rounded-lg border px-5 py-7 shadow lg:gap-3">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
      />

      <div className="relative h-14 w-14 overflow-hidden rounded-lg lg:h-20 lg:w-20">
        <Image
          src={image || "/images/icons/anthropic.jpg"}
          alt={name}
          width={100}
          height={100}
          className="absolute inset-0 h-full w-full"
        />
      </div>

      <h3 className="mt-2 text-xl font-medium lg:text-2xl">{name}</h3>
      <p className="text-sm lg:text-base">By {authorDisplayName}</p>
      <p className="line-clamp-5 text-sm lg:text-base">{description}</p>

      <section className="mt-auto flex divide-x">
        <div className="flex grow flex-col items-center gap-1.5 py-1">
          <p className="text-xs font-semibold lg:text-sm">Release Date</p>
          <p className="text-xs lg:text-sm">
            {formatDate({
              format: "DD MMM YYYY",
              unformatedDate: releaseDate,
            })}
          </p>
        </div>

        <div className="flex grow flex-col items-center gap-1.5 py-1">
          <p className="text-xs font-semibold lg:text-sm">Context Size</p>
          <p className="text-xs lg:text-sm">
            {formatNumberToShortScaleNotation(contextLength)}
          </p>
        </div>
      </section>

      {/* <Link className="absolute inset-0" href={`/models/${slug}`}>
        <span className="sr-only">
          View Details
        </span>
      </Link> */}
    </section>
  )
}

export default LlmModelCard
