import { getRankingsByKeyword } from "@/actions/actions"
import LeaderBoard from "@/components/rankings/LeaderBoard"
import {
  CATEGORIES,
  NATURAL_LANGUAGES,
  PROGRAMMING_LANGUAGES,
} from "@/data/Categories"
import { Ranking } from "@/interfaces/Ranking"
import { getLeaderboardType } from "@/lib/mappedLeaderboardType"

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
    <main className="mt-20 min-h-svh py-16">
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
