import { LlmModel } from "./LlmModel"

export interface Ranking {
  name: string
  type: string
  description: string
  lastUpdated: string
  ranks: {
    position: number
    model: LlmModel
  }[]
}
