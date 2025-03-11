"use client";

import { useActionState } from "react";
import Link from "next/link";
import { registerAction } from "./action";
import { OauthButton } from "../_components/oauth";

export default function RegisterPage() {
    const [state, formAction, pending] = useActionState(registerAction, {});

    return (
        <main className="text-black flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-900 to-gray-500">
            <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center">
                    Create Account
                </h2>
                <p className="text-sm text-gray-500 text-center mb-6">
                    Sign up to get started.
                </p>
                <form className="space-y-4" action={formAction}>
                    <input
                        name="name"
                        placeholder="Full Name"
                        autoComplete="name"
                        className="border border-gray-500 rounded-full px-4 py-3 w-full"
                    />
                    <input
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        className="border border-gray-500 rounded-full px-4 py-3 w-full"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        className="border border-gray-500 rounded-full px-4 py-3 w-full"
                    />
                    <button
                        type="submit"
                        className=" w-full bg-gray-500 hover:bg-gray-800 text-white font-semibold py-3 rounded-md"
                    >
                        Register
                    </button>
                    <OauthButton />
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
