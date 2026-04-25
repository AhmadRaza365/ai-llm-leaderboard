import { getRankingsByKeyword } from "@/actions/actions"
import LeaderBoard from "@/components/rankings/LeaderBoard"
import {
  CATEGORIES,
  NATURAL_LANGUAGES,
  PROGRAMMING_LANGUAGES,
} from "@/data/Categories"
import { SITE_DATA } from "@/data/SiteData"
import { Ranking } from "@/interfaces/Ranking"
import { getLeaderboardType } from "@/lib/mappedLeaderboardType"
import { Metadata } from "next"

type Props = {
  params: Promise<{ type: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const type = (await params).type

  return {
    title: `${type}`,
    robots: "index, follow",
    openGraph: {
      // images: product.images[0],
      type: "website",
      title: `${type}`,
      siteName: SITE_DATA.name,
      locale: "en_US",
      description: SITE_DATA.description,
      url: `${SITE_DATA.siteURL}/leaderboards/${type}`,
    },
    twitter: {
      card: "summary",
      creator: SITE_DATA.author,
      title: `${type}`,
      description: SITE_DATA.description,
      creatorId: SITE_DATA.socialHandle,
      // images: product.images[0],
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

  const { keyword, boardType, optionName } = getLeaderboardType(type)

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
      />
    </main>
  )
}

export default UseCaseLeaderBoard
