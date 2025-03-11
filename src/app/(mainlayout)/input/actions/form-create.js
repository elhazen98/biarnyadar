"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";

//const prisma = new PrismaClient();

export async function dataInput(_, formData) {
  //simulate delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const age = formData.get("age");
  const height = formData.get("height");
  const weight = formData.get("weight");
  const bmi = formData.get("bmi");
  const diet = formData.get("diet");
  const workout = formData.get("workout");
  const smoking = formData.get("smoking");
  const alcohol = formData.get("alcohol");
  const sleepTime = formData.get("sleepTime");
  const stress = formData.get("stress");
  const location = formData.get("location");
  const roastLevel = formData.get("roastLevel");

  if (!age || !height || !weight) {
    return { status: "error", message: "All fields are required" };
  }

  await prisma.input.create({
    data: {
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

  revalidatePath("/");
}
