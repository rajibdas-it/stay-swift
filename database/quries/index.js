import { replaceMongoIdInArray } from "@/utils/data-utils";

import { Hotel } from "@/models/hotel-model";
import { Ratings } from "@/models/ratings-model";
import { Reviews } from "@/models/review-model";


export async function getAllHotels() {
    const hotels = await Hotel.find().select(["thumbNailUrl", "name", "highRate", "lowRate", "city", "propertyCategory"]).lean()
    return replaceMongoIdInArray(hotels)
}

export async function getRatingForAHotel(hotelId) {
    const ratings = await Ratings.find({ hotelId: hotelId }).lean()
    return replaceMongoIdInArray(ratings)

}

export async function getReviewsForAHotel(hotelId) {
    const reviews = await Reviews.find({ hotelId: hotelId }).lean()
    return replaceMongoIdInArray(reviews)

}

