"use server";

import { prisma } from "@/utils/prisma";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export async function loginAction(_, formData) {
  try {
    const cookiesStore = cookies();
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      return {
        status: "error",
        message: "All fields are required",
      };
    }

    // Cek apakah user ada di database
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return {
        status: "error",
        message: "User not found!",
      };
    }

    // Cek password yang di-hash
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return {
        status: "error",
        message: "Invalid Credentials!",
      };
    }

    // Buat session baru
    const newSession = await prisma.session.create({
      data: {
        userId: user.id,
      },
    });

    // Simpan session di cookies
    cookiesStore.set("sessionId", newSession.id, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    // Beri response sukses sebelum redirect
    return {
      status: "success",
      message: "Login successful!",
    };
  } catch (error) {
    return {
      status: "error",
      message: "Something went wrong. Please try again!",
    };
  }
}
