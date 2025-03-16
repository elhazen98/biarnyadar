"use client";

import Link from "next/link";
import { useActionState } from "react";
import { loginAction } from "./action";
import { OauthButton } from "../_components/oauth";
import { BiSolidUser } from "react-icons/bi";
import { BiSolidKey } from "react-icons/bi";

export default function LoginPage() {
    const [state, formAction, pending] = useActionState(loginAction, {});

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-200">
            <div className="w-full max-w-sm p-8 bg-gradient-to-b to-indigo-950 from-violet-950 rounded-lg shadow-lg">
                <h2 className="text-5xl font-bold text-center mb-2">Login</h2>
                <p className="text-sm text-center mb-6">
                    Please enter your details.
                </p>
                <form action={formAction} className="space-y-6">
                    <div className="border border-slate-500 rounded-full px-4 py-3 w-full shadow-xl bg-violet-400/10 flex justify-between items-center focus-within:bg-slate-200 focus-within:text-violet-950 duration-150">
                        <input
                            name="email"
                            placeholder="Email"
                            className="outline-none w-full placeholder:text-violet-400"
                            autoComplete="email"
                        />
                        <i>
                            <BiSolidUser />
                        </i>
                    </div>
                    <div className="border border-slate-500 rounded-full px-4 py-3 w-full bg-violet-400/10 flex justify-between items-center shadow-xl focus-within:bg-slate-200 focus-within:text-violet-950 duration-150">
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="outline-none w-full placeholder:text-violet-400"
                            autoComplete="current-password"
                        />
                        <i>
                            <BiSolidKey />
                        </i>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-violet-500 hover:bg-violet-800 hover:text-slate-200 font-bold py-3 rounded-full duration-150 shadow-xl"
                    >
                        Login
                    </button>
                    <OauthButton />
                </form>
                {state?.status === "error" && (
                    <div className="text-center text-rose-600 mt-3 font-bold">
                        {state.message}
                    </div>
                )}
                {state?.status === "success" && (
                    <div className="text-center text-emerald-600 font-bold">
                        {state.message}
                    </div>
                )}
                <p className="text-center mt-8 text-sm">
                    {"Don't have an account? "}
                    <Link
                        href="/register"
                        className="font-bold hover:text-violet-400 duration-150"
                    >
                        Register now
                    </Link>
                </p>
            </div>
        </main>
    );
}
