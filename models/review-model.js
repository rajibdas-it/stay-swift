import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema({

    hotelId: {
        required: true,
        type: mongoose.ObjectId
    },
    userId: {
        required: true,
        type: mongoose.ObjectId
    },
    review: { required: true, type: String }
})


export const Reviews = mongoose.models.reviews ?? mongoose.model('reviews', reviewSchema)