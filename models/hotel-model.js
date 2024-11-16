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
    postalCode: { type: String, required: false },
    propertyCategory: { type: Number, default: 4 },
    shortDescription: { type: String, required: false },
    stateProvinceCode: { type: String, required: false },
    thumbNailUrl: { type: String, required: false },
    gallery: { type: Array, required: false },
    overview: { type: String, required: true },
    amenities: { type: Array, required: false }
});


export const Hotel = mongoose.models.hotels ?? mongoose.model("hotels", hotelSchema)