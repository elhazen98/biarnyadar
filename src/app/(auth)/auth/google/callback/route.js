import { cookies } from "next/headers";
import { google } from "@/utils/arctic";
import { redirect } from "next/navigation";
import { prisma } from "@/utils/prisma";

export async function GET(req) {
    const query = req.nextUrl.searchParams;
    const code = query.get("code");

    const cookiesStore = await cookies();
    const codeVerifier = cookiesStore.get("codeVerifier")?.value;

    const tokens = await google.validateAuthorizationCode(code, codeVerifier);
    const accessToken = tokens.accessToken();

    const res = await fetch(
        "https://openidconnect.googleapis.com/v1/userinfo",
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    const userData = await res.json();

    const user = await prisma.user.findUnique({
        where: {
            email: userData.email,
        },
    });

    if (!user) {
        const newUser = await prisma.user.create({
            data: {
                name: userData.name,
                email: userData.email,
            },
        });

        const newSession = await prisma.session.create({
            data: {
                userId: newUser.id,
                createdAt: new Date(),
                expires: new Date(Date.now() + 2 * 60 * 60 * 1000),
            },
        });

        cookiesStore.set("sessionId", newSession.id, {
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            expires: newSession.expires,
        });

        redirect("/input");
    }

    const newSession = await prisma.session.create({
        data: {
            userId: user.id,
            createdAt: new Date(),
            expires: new Date(Date.now() + 2 * 60 * 60 * 1000),
        },
    });

    cookiesStore.set("sessionId", newSession.id, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        expires: newSession.expires,
    });

    redirect("/input");
}
