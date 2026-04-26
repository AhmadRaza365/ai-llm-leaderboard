import { getRankingsByKeyword } from "@/actions/actions"
import { Ranking } from "@/interfaces/Ranking"
import { formatDate } from "@/lib/date"
import { PagesMetaData } from "@/lib/getMetaDataForSubPages"
import { MetadataRoute } from "next"

export const dynamic = "force-dynamic"
export const fetchCache = "force-no-store"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteURL = process.env.NEXT_PUBLIC_DOMAIN_URL
  const leaderboards = Object.keys(PagesMetaData)
  const firstRankingRes = await getRankingsByKeyword({
    typeKeyword: "academia",
  })

  const firstRanking: Ranking = JSON.parse(firstRankingRes || "{}")

  const lastUpadted = formatDate({
    format: "YYYY-MM-DD",
    unformatedDate: firstRanking.lastUpdated,
  })

  return [
    {
      url: siteURL ?? "",
      priority: 1,
      lastModified: lastUpadted,
    },
    {
      url: `${siteURL}/models`,
      priority: 1,
      lastModified: lastUpadted,
    },
    {
      url: `${siteURL}/leaderboards`,
      priority: 1,
      lastModified: lastUpadted,
    },
    ...leaderboards.map((category) => ({
      url: `${siteURL}/leaderboards/${category}`,
      priority: 1,
      lastModified: lastUpadted,
    })),
  ]
}
