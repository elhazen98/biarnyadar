"use server";

import { prisma } from "@/utils/prisma";
import { createId } from "@paralleldrive/cuid2";
import { redirect } from "next/navigation";

//const prisma = new PrismaClient();

export async function dataInputAction(_, formData) {
    const id = createId();
    const userId = formData.get("userId");
    const age = Number(formData.get("age"));
    const sex = formData.get("sex");
    const height = Number(formData.get("height"));
    const weight = Number(formData.get("weight"));
    const bmi = weight / (height / 100) ** 2;
    const fastfood = `i'am a ${sex}, eat fastfood: ${formData.get("fastfood")}`;
    const oily = `eat oily: ${formData.get("oily")}`;
    const sugar = `consume sugar: ${formData.get("sugar")}`;
    const fruit = `consume fruit & fegetables: ${formData.get("fruit")}`;
    const diet = `${fastfood} ${oily} ${sugar} ${fruit}`;
    const workout = formData.get("workout");
    const smoking = formData.get("smoking");
    const alcohol = formData.get("alcohol");
    const sleepTime = formData.get("sleepTime");
    const stress = formData.get("stress");
    const location = formData.get("location");
    const roastLevel = formData.get("roastLevel");

    if (!age || !sex || !height || !weight) {
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
