import mongoose from "mongoose";

export async function dbConnect() {
    try {
        const conn = await mongoose.connect(String(process.env.DATABASE_URL))
        return conn

    } catch (error) {
        throw new Error("Connection Failed")
    }
}