"use server";
// import { API_URL } from "@/constants/api-url";
import { revalidatePath } from "next/cache";
import { Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function dataInput(_, formData) {
  //simulate delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const name = formData.get("name");
  const age = formData.get("age");
  const height = formData.get("height");
  const weight = formData.get("weight");

  if (!name || !age || !height || !weight) {
    return { status: "error", message: "All fields are required" };
  }

  await prisma.todo.create({
    data: { name, age, height, weight },
  });

  revalidatePath("/");
}
