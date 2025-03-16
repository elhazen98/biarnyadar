"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(_, formData) {
    let isSuccess = false;
    try {
        console.log(1);
        const cookiesStore = await cookies();
        const email = formData.get("email");
        const password = formData.get("password");

        if (!email || !password) {
            return {
                status: "error",
                message: "All fields are required",
            };
        }

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return {
                status: "error",
                message: "User not found!",
            };
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return {
                status: "error",
                message: "Invalid Credentials!",
            };
        }

        const newSession = await prisma.session.create({
            data: {
                userId: user.id,
                createdAt: new Date(),
                expires: new Date(Date.now() + 2 * 60 * 60 * 1000),
            },
        });

        cookiesStore.set("sessionId", newSession.id, {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            expires: newSession.expires,
        });

        isSuccess = true;

        return {
            status: "success",
            message: "Login successful!",
        };
    } catch (error) {
        console.log(error);
        return {
            status: "error",
            message: "Something went wrong. Please try again!",
        };
    } finally {
        if (isSuccess) {
            redirect("/input");
        }
    }
}
