import { prisma } from "@/utils/prisma";
import { DataInput } from "./_components/data-create";

export default async function Page() {
  const userid = await prisma.user;
  const age = await prisma.age;
  const height = await prisma.age;
  const weight = await prisma.weight;
  const bmi = await prisma.bmi;
  const diet = await prisma.diet;
  const workout = await prisma.workout;
  const smoking = await prisma.smoking;
  const alcohol = await prisma.alcohol;
  const sleeptime = await prisma.sleeptime;
  const stress = await prisma.stress;
  const location = await prisma.location;
  const roastLevel = await prisma.roastLevel;

  return (
    <main>
      <DataInput />
    </main>
  );
}
