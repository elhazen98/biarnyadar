"use client";

import { Button, Input } from "@heroui/react";
import Link from "next/link";
import { useActionState } from "react";
import { loginAction } from "../login/_action";

export default function LoginPage() {
  const [state, formAction] = useActionState(loginAction, {});

  return (
    <main className="flex min-h-screen items-center justify-center bg-yellow-400">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-5xl font-bold text-center">Welcome</h2>
        <p className="text-sm text-gray-800 text-center mb-6">
          Please enter your details.
        </p>
        <form className="space-y-8" action={formAction}>
          <Input
            name="email"
            placeholder="Username / Email"
            variant="underlined"
            autoComplete="email"
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            variant="underlined"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-md"
          >
            Login
          </Button>
        </form>
        {state?.status === "error" && (
          <div className="text-center text-rose-600 bg-rose-50 p-2 rounded-lg mt-3">
            {state.message}
          </div>
        )}
        {state?.status === "success" && (
          <div className="text-center text-emerald-600 bg-emerald-50 p-2 rounded-lg mt-3">
            {state.message}
          </div>
        )}
        <p className="text-center mt-8 text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-bold text-black">
            Register now
          </Link>
        </p>
      </div>
    </main>
  );
}
