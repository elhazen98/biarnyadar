"use client";

import { useActionState } from "react";
import { logoutAction } from "./logout";

export const LogoutButton = ({ sessionId }) => {
    const [state, formAction, pending] = useActionState(logoutAction, null);

    return (
        <form action={formAction}>
            <button>Logout</button>
        </form>
    );
};
