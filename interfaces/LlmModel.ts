export interface LlmModel {
  name: string
  slug: string
  author: string
  authorDisplayName: string
  contextLength: number
  description: string
  releaseDate: Date
  inputModalities: string[]
  outputModalities: string[]
  image: string
}
