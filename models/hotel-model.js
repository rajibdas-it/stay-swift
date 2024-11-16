import mongoose, { Schema } from "mongoose";

const hotelSchema = new Schema({
    name: { type: String, required: true },
    address1: { type: String, required: true },
    airportCode: { type: String, required: true },
    city: { type: String, required: true },
    countryCode: { type: String, required: true },
    highRate: { type: Number, required: false },
    location: {
        type: Object, // Better to specify a schema for location if it has specific properties like latitude/longitude
        required: false
    },
    locationDescription: { type: String, required: true },
    lowRate: { type: Number, required: false },
    postalCode: { type: String, required: false }, // Changed to String for postal codes with letters (e.g., Canada)
    propertyCategory: { type: Number, default: 4 }, // Corrected type and set a default value
    shortDescription: { type: String, required: false },
    stateProvinceCode: { type: String, required: false },
    thumbNailUrl: { type: String, required: false },
    gallery: { type: Array, required: false }, // Assuming array of strings (URLs or image paths)
    overview: { type: String, required: true },
    amenities: { type: Array, required: false } // Assuming array of strings for amenities
});


export const Hotels = mongoose.model.hotels ?? mongoose.model("hotels", hotelSchema)