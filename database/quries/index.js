import { isDateInBetween, replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";

import { Hotel } from "@/models/hotel-model";
import { Ratings } from "@/models/ratings-model";
import { Reviews } from "@/models/review-model";
import { Booking } from "@/models/booking-model";
import { Users } from "@/models/users-model";


export async function getAllHotels(destination, checkin, checkout, category) {
    const regex = new RegExp(destination, 'i')

    const hotelsByDestination = await Hotel
        .find({ city: { $regex: regex } })
        .select(["thumbNailUrl", "name", "highRate", "lowRate", "city", "propertyCategory"])
        .lean()
    let allHotels = hotelsByDestination

    if (category) {
        const categoriesToMatch = category.split('|')

        allHotels = allHotels.filter((hotel) => {
            return categoriesToMatch.includes(hotel.propertyCategory.toString())
        })

    }

    if (checkin && checkout) {
        allHotels = await Promise.all(
            allHotels.map(async (hotel) => {
                const found = await findBooking(hotel._id, checkin, checkout)

                if (found) {
                    hotel['isBooked'] = true
                } else {
                    hotel['isBooked'] = false
                }
                return hotel
            })
        )
    }

    return replaceMongoIdInArray(allHotels)
}

async function findBooking(hotelId, checkin, checkout) {
    const matches = await Booking
        .find({ hotelId: hotelId.toString() })
        .lean()

    const found = matches.find((match) => {
        return (
            isDateInBetween(checkin, match.checkin, match.checkout) ||
            isDateInBetween(checkout, match.checkin, match.checkout)
        )
    })
    return found
}


export async function getRatingForAHotel(hotelId) {
    const ratings = await Ratings.find({ hotelId: hotelId }).lean()
    return replaceMongoIdInArray(ratings)

}

export async function getReviewsForAHotel(hotelId) {
    const reviews = await Reviews.find({ hotelId: hotelId }).lean()
    return replaceMongoIdInArray(reviews)

}

export async function getHotelById(hotelId, checkin, checkout) {
    const hotel = await Hotel.findById(hotelId).lean()
    if (checkin && checkout) {
        const found = await findBooking(hotel._id, checkin, checkout)
        if (found) {
            hotel['isBooked'] = true
        } else {
            hotel['isBooked'] = false
        }
    }
    return replaceMongoIdInObject(hotel)

}

export async function getUserByEmail(email) {
    const user = await Users.findOne({ email: email }).lean()
    return replaceMongoIdInObject(user)
}

export async function getBookingsByUser(userId) {
    const bookings = await Booking.find({ userId: userId }).lean()
    return replaceMongoIdInArray(bookings)

}