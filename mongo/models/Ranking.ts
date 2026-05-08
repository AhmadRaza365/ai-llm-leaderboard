import { Ranking as IRanking } from "@/interfaces/Ranking"
import mongoose, { Schema, Model } from "mongoose"
import "@/mongo/models/llmModel"
// import { Schema, model } from "mongoose"

const rankingSchema = new Schema<IRanking>(
  {
    name: { type: String, required: true, trim: true },
    type: {
      type: String,
      required: true,
      index: true,
      trim: true,
      lowercase: true,
    },
    description: { type: String, default: "" },
    lastUpdated: { type: Date, default: Date.now },
    ranks: [
      {
        position: { type: Number, required: true },
        model: {
          type: Schema.Types.ObjectId,
          ref: "LlmModel",
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
)

// export const Ranking = model<IRanking>("Ranking", rankingSchema)

export const RankingModel: Model<IRanking> =
  mongoose.models.Ranking || mongoose.model<IRanking>("Ranking", rankingSchema)
