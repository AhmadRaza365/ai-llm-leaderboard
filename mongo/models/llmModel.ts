import { LlmModel as ILlmModel } from "@/interfaces/LlmModel"
import mongoose, { Schema, Model } from "mongoose"

const LlmModelSchema = new Schema<ILlmModel>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    authorDisplayName: { type: String, required: false },
    contextLength: { type: Number, required: true },
    description: { type: String, required: true },
    releaseDate: { type: Date, default: Date.now },
    image: { type: String, required: false },
    inputModalities: {
      type: [String],
      default: [],
    },
    outputModalities: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
)

export const LlmModel: Model<ILlmModel> =
  mongoose.models.LlmModel ||
  mongoose.model<ILlmModel>("LlmModel", LlmModelSchema)
