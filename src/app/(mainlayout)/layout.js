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

    const name = session.user.name;
    const id = session.user.id;
    const email = session.user.email;

    return (
        <div
            name="mainbackground"
            className="min-h-screen flex flex-col justify-between bg-slate-950 text-slate-200"
        >
            <Header name={name} email={email} />
            <div className="flex flex-grow h-full">
                <Sidebar userId={id} />
                <div className="w-full">
                    <div className="flex items-center justify-center h-full">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
