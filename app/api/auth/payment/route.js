import { Booking } from "@/models/booking-model";
import { dbConnect } from "@/service/mongo";
import { NextRequest, NextResponse } from "next/server";

import mongoose, { Types } from "mongoose";


export const POST = async (request) => {
    const { hotelId, userId, checkin, checkout } = await request.json()
    await dbConnect()

    const payload = {
        hotelId: new mongoose.Types.ObjectId(hotelId),
        userId: new mongoose.Types.ObjectId(userId),
        checkin,
        checkout
    }
    try {
        await Booking.create(payload)
        return new NextResponse("Booking added", {
            status: 201
        })

    } catch (error) {
        return new NextResponse(error.message, {
            status: 500
        })
    }
}