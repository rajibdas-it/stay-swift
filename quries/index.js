import { replaceMongoIdInArray } from "@/utils/data-utils";

import { Hotel } from "@/models/hotel-model";


export async function getAllHotels() {
    const hotels = await Hotel.find().lean()
    return replaceMongoIdInArray(hotels)
}

