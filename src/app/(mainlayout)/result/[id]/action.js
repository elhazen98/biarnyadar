"use server";

import { getResponsePrompt } from "./_components/getResponse";

export async function aiAction() {
  const prompt = {
    age: 22,
    height: 180,
    weight: 70,
    bmi: 0,
    diet: "no",
    workout: "no",
    smoking: false,
    alcohol: false,
    sleepTime: 480,
    stress: 2,
    location: "pontianak",
    roastLevel: "high",
  };
  const RoastLevel = "high";
  const response = await getResponsePrompt(prompt, RoastLevel);
  console.log(response);
  return response;
}
