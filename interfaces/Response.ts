import { LlmModel } from "./LlmModel"

export interface LlmModelsListResponse {
  data: LlmModel[]
  pagination: {
    total: number
    currentPage: number
    totalPages: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }
}
