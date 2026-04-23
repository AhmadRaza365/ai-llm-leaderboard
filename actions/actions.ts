"use server"

import { Ranking } from "@/interfaces/Ranking"
import { LlmModelsListResponse } from "@/interfaces/Response"
import connectMongo from "@/mongo"
import { LlmModel } from "@/mongo/models/llmModel"
import { RankingModel } from "@/mongo/models/Ranking"

export async function getRankingsByKeyword({
  typeKeyword,
}: {
  typeKeyword: string
}) {
  if (!typeKeyword) {
    throw new Error("Type keyword is required to fetch rankings")
  }

  const cleanType = typeKeyword.trim().toLowerCase()

  try {
    console.log(`fetching latest ranking for: ${cleanType}...`)

    await connectMongo()

    const latestRanking = await RankingModel.findOne({ type: cleanType })
      .sort({ createdAt: -1 })
      .populate({
        path: "ranks.model",
        select:
          "name slug author authorDisplayName releaseDate image description contextLength",
      })
      .lean<Ranking>()
      .exec()

    if (!latestRanking) {
      console.log(`empty: No rankings found for type "${cleanType}"`)
      return null
    }

    const ranking: Ranking = {
      name: latestRanking?.name || "",
      description: latestRanking?.description || "",
      lastUpdated: latestRanking?.lastUpdated || new Date(),
      ranks: latestRanking?.ranks || [],
      type: latestRanking?.type || "",
    }

    return JSON.stringify(ranking)
  } catch (error) {
    console.error(`Error fetching latest ${cleanType} ranking:`, error)
    throw new Error(`Could not retrieve the latest ranking for ${cleanType}`)
  }
}

export async function getLlmModelsList({
  limit = 20,
  page = 1,
}: {
  page: number
  limit: number
}) {
  const skip = (page - 1) * limit

  try {
    console.log(`fetching Llm models...`)

    await connectMongo()

    const models = await LlmModel.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec()

    const totalModels = await LlmModel.countDocuments()

    const response: LlmModelsListResponse = {
      data: models,
      pagination: {
        total: totalModels,
        currentPage: page,
        totalPages: Math.ceil(totalModels / limit),
        hasNextPage: page * limit < totalModels,
        hasPrevPage: page > 1,
      },
    }

    return JSON.stringify(response)
  } catch (error) {
    console.error("Error fetching paginated models:", error)
    throw error
  }
}
