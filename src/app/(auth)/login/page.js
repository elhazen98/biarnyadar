"use client";

import Link from "next/link";
import { useActionState } from "react";
import { loginAction } from "./action";
import { OauthButton } from "../_components/oauth";

export default function LoginPage() {
    const [state, formAction, pending] = useActionState(loginAction, {});

    return (
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-900 to-gray-500">
            <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
                <h2 className="text-5xl text-black font-bold text-center">
                    Welcome
                </h2>
                <p className="text-sm text-gray-800 text-center mb-10">
                    Please enter your details.
                </p>
                <form
                    action={formAction}
                    className="text-gray-900 placeholder-gray-500 space-y-6 border-gray-300 rounded-xl px-4 py-3"
                >
                    <input
                        name="email"
                        placeholder="Email"
                        className=" border border-gray-500 rounded-full px-4 py-3 w-full"
                        autoComplete="email"
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        className=" border border-gray-500 rounded-full px-4 py-3 w-full"
                        autoComplete="current-password"
                    />
                    <button
                        type="submit"
                        className=" w-full bg-gray-500 hover:bg-gray-800 text-white font-semibold py-3 rounded-md"
                    >
                        Login
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
                <p className="text-center text-black mt-8 text-sm">
                    {"Don't have an account? "}
                    <Link href="/register" className="font-bold text-black">
                        Register now
                    </Link>
                </p>
            </div>
        </main>
    );
}
