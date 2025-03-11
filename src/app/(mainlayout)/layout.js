import { auth } from "@/lib/auth";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Sidebar } from "./_components/sidebar";
import { redirect } from "next/navigation";

export default async function Layout({ children }) {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    return (
        <div
            name="mainbackground"
            className="h-screen flex flex-col justify-between bg-gradient-to-br from-slate-950 to-gray-800 text-white"
        >
            <Header name={session.user.name} email={session.user.email} />
            <div className="flex h-full">
                <Sidebar userId={session.user.id} />
                <div className="w-full pr-4">
                    <div className="flex items-center justify-center h-full border border-slate-700/50 rounded-xl from-gray-800/20 to-gray-700/20 backdrop-blur-md shadow-lg bg-gradient-to-b">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
