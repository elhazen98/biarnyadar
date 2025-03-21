"use server";

import { prisma } from "@/utils/prisma";
import { getResponsePrompt } from "../_components/getResponse";
import { revalidatePath } from "next/cache";

export async function aiAction(id) {
  const resultAvailable = await prisma.result.findUnique({
    where: { inputId: id },
  });

  if (resultAvailable) {
    const resultResponse = {
      lifeExpectancy: resultAvailable.lifeExpectancy,
      roastComment: resultAvailable.roastComment,
      diseaseRisk: JSON.stringify(resultAvailable.diseaseRisk),
      recommendation: resultAvailable.recommendation,
      title: resultAvailable.title,
    };

    revalidatePath(`/result/${id}`);

    return resultResponse;
  }

  try {
    const inputPrompt = await prisma.input.findUnique({
      where: { id },
    });

    if (!inputPrompt) {
      console.log("Input not found");
    }

    const prompt = {
      age: inputPrompt.age,
      height: inputPrompt.height,
      weight: inputPrompt.weight,
      bmi: inputPrompt.bmi,
      diet: inputPrompt.diet,
      workout: inputPrompt.workout,
      smoking: inputPrompt.smoking,
      alcohol: inputPrompt.alcohol,
      sleepTime: inputPrompt.sleepTime,
      stress: inputPrompt.stress,
      location: inputPrompt.location,
    };

    const roastLevel = inputPrompt.roastLevel;
    // console.log(roastLevel);
    const response = await getResponsePrompt(prompt, roastLevel);
    // console.log(response);
    const responseParse = JSON.parse(response);

    // console.log(responseParse);

    const mappedResponse = {
      lifeExpectancy: responseParse.lifeExpectancy,
      roastComment: responseParse.roastComment,
      diseaseRisk: JSON.stringify(responseParse.diseaseRisk),
      recommendation: responseParse.recommendation,
      title: responseParse.title,
    };

    const result = await prisma.result.create({
      data: {
        lifeExpectancy: mappedResponse.lifeExpectancy,
        roastComment: mappedResponse.roastComment,
        diseaseRisk: mappedResponse.diseaseRisk,
        recommendation: mappedResponse.recommendation,
        title: mappedResponse.title,
        inputId: id,
        userId: inputPrompt.userId,
      },
    });

    revalidatePath(`/result/${id}`);

    return mappedResponse;
  } catch (error) {
    console.log("Error in aiAction:", error);
    return {
      error: true,
      message:
        error.message || "Something went wrong processing your health data",
    };
  }
}

export async function submitFeedback(resultId, rating, comment, likeScore) {
  try {
    const userInput = await prisma.input.findUnique({
      where: { id: resultId },
    });

    if (!userInput) {
      throw new Error("Input not found");
    }

    const existingFeedback = await prisma.feedback.findFirst({
      where: { inputId: resultId },
    });

    let feedback;

    if (existingFeedback) {
      feedback = await prisma.feedback.update({
        where: { id: existingFeedback.id },
        data: {
          rating: parseInt(rating, 10),
          comment,
          tersadarkan: parseInt(likeScore, 10),
        },
      });
    } else {
      feedback = await prisma.feedback.create({
        data: {
          inputId: resultId,
          rating: parseInt(rating, 10),
          comment,
          tersadarkan: parseInt(likeScore, 10),
          userId: userInput.userId,
        },
      });
    }

    revalidatePath(`/result/${resultId}`);
    return { success: true, feedback };
  } catch (error) {
    console.log("Error submitting feedback:", error);
    return {
      error: true,
      message: error.message || "Failed to submit feedback",
    };
  }
}

export async function clearResult(resultId) {
  // console.log(resultId);
  try {
    const findResult = await prisma.result.findUnique({
      where: { inputId: resultId },
    });

    await prisma.result.delete({
      where: { inputId: resultId, id: findResult.id },
    });
    revalidatePath("/");
    revalidatePath("/input");
    return { success: true, redirectTo: "/input" };
  } catch (error) {
    console.error("Error clearing result:", error);
    return {
      error: true,
      message: error.message || "Failed to clear result",
    };
  }
}

export async function getFeedback(resultId) {
  try {
    const feedback = await prisma.feedback.findFirst({
      where: { inputId: resultId },
      orderBy: { createdAt: "desc" },
    });

    return { success: true, feedback };
  } catch (error) {
    console.error("Error getting feedback:", error);
    return {
      error: true,
      message: error.message || "Failed to get feedback",
    };
  }
}
