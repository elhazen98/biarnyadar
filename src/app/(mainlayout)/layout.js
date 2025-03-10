import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Sidebar } from "./_components/sidebar";

export default async function Layout({ children }) {
    return (
        <div
            name="mainbackground"
            className="h-screen flex flex-col justify-between bg-gradient-to-br from-slate-950 to-gray-800 text-white"
        >
            <Header name={"testname"} email={"test@mail.com"} />
            <div className="flex h-full">
                <Sidebar userId={"37ca9848-34f0-40db-b285-934d4ef01ae0"} />
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
