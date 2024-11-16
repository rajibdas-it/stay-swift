import mongoose, { Schema } from "mongoose"


const ratingSchema = new Schema({

    hotelId: {
        type: mongoose.ObjectId,
        required: true
    },
    userId: {
        type: mongoose.ObjectId,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
})


export const Ratings = mongoose.model.ratings ?? mongoose.model('ratings', ratingSchema)

