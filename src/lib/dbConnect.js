"use server";
import mongoose from "mongoose";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("A Mongodb URI is required in your .env MONGODB_URI");
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { connect: null, promise: null };
}

async function dbConnect() {
  if (cached.connect) {
    return cached.connect;
  }
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri, { dbName: process.env.DB_NAME })
      .then((res) => {
        console.log("Connected!");
        return res;
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  }
  cached.connect = await cached.promise;
  return cached.connect;
}

export default dbConnect;
