import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials"
import mongoClientPromise from "./database/mongoClientPromise";
import { Users } from "./models/users-model";
import bcrypt from 'bcryptjs'


export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    adapter: MongoDBAdapter(mongoClientPromise, { databaseName: process.env.ENVIROMENT }),
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },

            async authorize(credentials) {
                if (credentials === null) return null
                try {
                    const user = await Users.findOne({ email: credentials?.email })
                    if (user) {
                        const isMatched = await bcrypt.compare(credentials.password, user.password)
                        if (isMatched) {
                            return user
                        } else {
                            throw new Error("Email or Password mismatch")
                        }

                    } else {
                        throw new Error("User Not Found")
                    }

                } catch (error) {
                    throw new Error(error)
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ]
})