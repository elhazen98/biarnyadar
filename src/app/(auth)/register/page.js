"use client";

import { useActionState } from "react";
import Link from "next/link";
import Input from "../_components/oauth";
import Button from "../_components/oauth";
import { registerAction } from "../_components/oauth";

export default function RegisterPage() {
  const [state, formAction, pending] = useActionState(registerAction, {});

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Create Account</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Sign up to get started.
        </p>
        <form className="space-y-4" action={formAction}>
          <Input
            name="name"
            placeholder="Full Name"
            variant="underlined"
            autoComplete="name"
          />
          <Input
            name="email"
            placeholder="Email"
            variant="underlined"
            autoComplete="email"
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            variant="underlined"
            autoComplete="new-password"
          />
          <Button
            type="submit"
            isLoading={pending}
            fullWidth
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded-md"
          >
            Register
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
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-black">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
