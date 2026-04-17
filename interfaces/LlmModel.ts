export interface LlmModel {
  name: string
  slug: string
  author: string
  authorDisplayName: string
  contextLength: number
  description: string
  releaseDate: string
  inputModalities: string[]
  outputModalities: string[]
}
