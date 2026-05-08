import { getRankingsByKeyword } from "@/actions/actions"
import LeaderBoard from "@/components/rankings/LeaderBoard"
import {
  CATEGORIES,
  NATURAL_LANGUAGES,
  PROGRAMMING_LANGUAGES,
} from "@/data/Categories"
import { SITE_DATA } from "@/data/SiteData"
import { Ranking } from "@/interfaces/Ranking"
import { getMetaDataForPageBySlug } from "@/lib/getMetaDataForSubPages"
import { getLeaderboardType } from "@/lib/mappedLeaderboardType"
import { Metadata } from "next"

type Props = {
  params: Promise<{ type: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const type = (await params).type

  const decodedType = decodeURIComponent(type)
  const { meta } = getMetaDataForPageBySlug(decodedType)
  const { title, description } = meta

  return {
    title: title,
    robots: "index, follow",
    openGraph: {
      images: `/images/${type}-leaderboard-social-image.jpg`,
      type: "website",
      title: title,
      siteName: SITE_DATA.name,
      locale: "en_US",
      description: description,
      url: `${SITE_DATA.siteURL}/leaderboards/${type}`,
    },
    twitter: {
      card: "summary",
      creator: SITE_DATA.author,
      title: title,
      description: description,
      creatorId: SITE_DATA.socialHandle,
      images: `/images/${type}-leaderboard-social-image.jpg`,
      site: SITE_DATA.name,
    },
  }
}

async function UseCaseLeaderBoard({
  params,
}: {
  params: Promise<{ type: string }>
}) {
  const { type } = await params
  const decodedType = decodeURIComponent(type)

  const { keyword, boardType, optionName } = getLeaderboardType(decodedType)
  const { meta } = getMetaDataForPageBySlug(decodedType)
  const { title, description } = meta

  const rankingsRes = await getRankingsByKeyword({
    typeKeyword: keyword,
  })

  const ranking: Ranking = JSON.parse(rankingsRes || "{}")

  return (
    <main className="mt-20 min-h-svh px-5 py-10 lg:py-16">
      <LeaderBoard
        ranking={ranking}
        preSelectedOption={optionName}
        selectionOptions={
          boardType === "natural-languages"
            ? NATURAL_LANGUAGES
            : boardType === "programming-languages"
              ? PROGRAMMING_LANGUAGES
              : CATEGORIES
        }
        hideOptions={boardType === "top-usage"}
        title={title}
        description={description}
      />
    </main>
  )
}

export default UseCaseLeaderBoard
