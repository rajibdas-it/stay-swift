import mongoose, { Schema } from "mongoose";

const hotelSchema = new Schema({
    name: { type: String, required: true },
    address1: { type: String, required: true },
    airportCode: { type: String, required: true },
    city: { type: String, required: true },
    countryCode: { type: String, required: true },
    highRate: { type: Number, required: false },
    location: {
        type: Object,
        required: false
    },
    locationDescription: { type: String, required: true },
    lowRate: { type: Number, required: false },
    postalCode: { type: Number, required: false },
    propertyCategory: 4,
    shortDescription: { type: String, required: false },
    stateProvinceCode: { type: String, required: false },
    thumbNailUrl: { type: String, required: false },
    gallery: { required: false, type: Array },
    overview: { type: String, required: true },
    amenities: {
        type: Array,
        required: false
    }

})


export const hotels = mongoose.model.hotels ?? mongoose.model("hotels", hotelSchema)