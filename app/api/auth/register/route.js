import { dbConnect } from "@/service/mongo"
import { NextRequest, NextResponse } from "next/server"
import bcrypt from 'bcryptjs'
import { Users } from "@/models/users-model"

export const POST = async (request) => {
    const { fname, lname, email, password } = await request.json()
    await dbConnect()
    const hashedPassword = await bcrypt.hash(password, 5)
    const newUser = {
        name: `${fname} ${lname}`,
        email,
        password: hashedPassword
    }

    try {
        await Users.create(newUser)
        return new NextResponse("user has been created", {
            status: 201
        })

    } catch (error) {
        return new NextResponse(error.message, {
            status: 500
        })
    }
}