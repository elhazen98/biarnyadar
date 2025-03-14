"use server";

import { auth } from "@/lib/auth";
import { prisma } from "@/utils/prisma";
import { cookies } from "next/headers";
import { redirect } from "next/headers";

export const logoutAction = async () => {
  const cookieStore = cookies();
  const session = await auth();

  cookieStore.delete("sessionId");

  try {
    await prisma.session.delete({
      where: {
        id: session.id,
      },
    });
  } catch (error) {
    console.error("Logout Error:", error);
  }

  redirect("/login");
};
