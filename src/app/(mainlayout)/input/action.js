"use server";

import { prisma } from "@/utils/prisma";
import { createId } from "@paralleldrive/cuid2";
import { redirect } from "next/navigation";

//const prisma = new PrismaClient();

export async function dataInputAction(_, formData) {
    const id = createId();
    const userId = formData.get("userId");
    const age = Number(formData.get("age"));
    const height = Number(formData.get("height"));
    const weight = Number(formData.get("weight"));
    const bmi = weight / (height / 100) ** 2;
    const diet = formData.get("diet");
    const workout = formData.get("workout");
    const smoking = formData.get("smoking") === "Ya";
    const alcohol = formData.get("alcohol") === "Ya";
    const sleepTime = formData.get("sleepTime");
    const stress = formData.get("stress");
    const location = formData.get("location");
    const roastLevel = formData.get("roastLevel");

    if (!age || !height || !weight) {
        return { status: "error", message: "All fields are required" };
    }

    await prisma.input.create({
        data: {
            id,
            userId,
            age,
            height,
            weight,
            bmi,
            diet,
            workout,
            smoking,
            alcohol,
            sleepTime,
            stress,
            location,
            roastLevel,
        },
    });

    redirect(`/result/${id}`);
}
