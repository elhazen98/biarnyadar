"use server";

import { auth } from "@/app/(mainlayout)/_components/header"; // ini bener gak ya gaes
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

("use client");

import { useState } from "react";
import { useRouter } from "next/navigation";
import { logoutAction } from "@/actions/logout";

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logoutAction(); // Panggil server action
      router.push("/login"); // Redirect setelah logout
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 border rounded-full p-2 hover:bg-gray-100"
      >
        <span className="text-sm font-medium">name</span>
        <span className="w-8 h-8 bg-gray-300 rounded-full"></span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Logout →
          </button>
        </div>
      )}
    </div>
  );
}
