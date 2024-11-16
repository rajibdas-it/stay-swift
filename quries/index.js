import { replaceMongoIdInArray } from "@/utils/data-utils";

const { Hotels } = require("@/models/hotel-model");


export async function getAllHotels() {
    const hotels = await Hotels.find().lean()
    return replaceMongoIdInArray(hotels)
}

