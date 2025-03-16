"use client";

import { useActionState } from "react";
import { FcGoogle } from "react-icons/fc";
import { oauthAction } from "./action";

export const OauthButton = () => {
    const [_, formAction, pending] = useActionState(oauthAction, null);
    return (
        <form action={formAction}>
            <button
                type="submit"
                className="rounded-sm w-full text-gray-400 flex gap-2 justify-center items-center hover:brightness-150 duration-150"
            >
                <i>
                    <FcGoogle />
                </i>
                Continue with Google
            </button>
        </form>
    );
};
