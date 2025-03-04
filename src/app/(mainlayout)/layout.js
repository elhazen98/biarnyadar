import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import { Sidebar } from "./_components/sidebar";

export default async function Layout({ children }) {
    return (
        <div className="h-screen border-1 border-red-700 flex flex-col justify-between">
            <Header />
            <div className="flex h-full">
                <Sidebar />
                <div className="w-full flex items-center justify-center border-1 border-red-700">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}
