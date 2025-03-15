"use server";

import { prisma } from "@/utils/prisma";
import { createId } from "@paralleldrive/cuid2";
import { redirect } from "next/navigation";

export async function dataInputAction(_, formData) {
    const id = createId();
    
    
    const userId = formData.userId;
    const age = Number(formData.age);
    const sex = formData.sex;
    const height = Number(formData.height);
    const weight = Number(formData.weight);
    const bmi = weight / (height / 100) ** 2;
    
    const fastfood = `i'am a ${sex}, eat fastfood: ${formData.fastfood}`;
    const oily = `eat oily: ${formData.oily}`;
    const sugar = `consume sugar: ${formData.sugar}`;
    const fruit = `consume fruit & vegetables: ${formData.fruit}`;
    const diet = `${fastfood} ${oily} ${sugar} ${fruit}`;
    
    const workout = formData.workout;
    const smoking = formData.smoking;
    const alcohol = formData.alcohol;
    const sleepTime = formData.sleepTime;
    const stress = formData.stress;
    const location = formData.location;
    const roastLevel = formData.roastLevel;

    console.log("Form Submitted:", { userId, age, sex, height, weight, bmi, diet, workout, smoking, alcohol, sleepTime, stress, location, roastLevel });

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