export interface LlmModel {
  name: string
  slug: string
  author: string
  authorDisplayName: string
  tokens: number
  shortDescription: string
  releaseDate: string
  inputModalities: string[]
  outputModalities: string[]
}
