"use server";
import * as arctic from "arctic";
import { google } from "@/utils/arctic";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function oauthAction(_, formData) {
    const cookiesStore = await cookies();
    const state = arctic.generateState();
    const codeVerifier = arctic.generateCodeVerifier();
    const scopes = ["openid", "profile", "email"];

    cookiesStore.set("codeVerifier", codeVerifier, {
        httpOnly: true,
    });

    const url = google.createAuthorizationURL(state, codeVerifier, scopes);

    redirect(url.href);
}
