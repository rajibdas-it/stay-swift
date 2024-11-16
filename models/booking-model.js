import mongoose, { model, Schema } from "mongoose"


const bookingSchema = new Schema({
    hotelId: {
        required: true,
        type: mongoose.ObjectId
    },
    userId: {
        required: true,
        type: mongoose.ObjectId
    },
    checkin: {
        type: String,
        required: true
    },
    checkout: {
        type: String,
        required: true
    }
})

export const Booking = mongoose.model.bookings ?? mongoose.model('bookings', bookingSchema)


