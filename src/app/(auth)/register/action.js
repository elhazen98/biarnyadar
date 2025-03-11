"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";

export async function registerAction(_, formData) {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!name || !email || !password) {
        return {
            status: "error",
            message: "All fields are required",
        };
    }

    const user = await prisma.user.findUnique({
        where: {
            email: email,
        },
    });

    if (user) {
        return {
            status: "error",
            message: "Email already registered",
        };
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        },
    });

    return {
        status: "success",
        message: "User registered!",
    };
}
