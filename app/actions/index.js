'use server'
import { signIn } from "@/auth"

export async function login(formData) {
    try {
        const response = await signIn("credentials", {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false  //error howar poro jeno same page ei thake
        })
        return response

    } catch (error) {
        throw new Error(error)
    }
}