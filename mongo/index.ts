/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from "mongoose"

const MONGODB_URI = process.env.NEXT_MONGO_URI as string

if (!MONGODB_URI) {
  throw new Error(
    "Please define the NEXT_MONGO_URI environment variable inside .env.local"
  )
}

let cached = (global as any).mongoose

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null }
}

async function connectMongo() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: process.env.NEXT_MONGO_DB_NAME,
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default connectMongo
