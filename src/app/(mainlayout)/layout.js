// import { auth } from "@/libs/auth";

import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

export default async function Layout({ children }) {
    // const session = await auth();
    // if (!session) {
    //     redirect("/login");
    // }

    // const results = await prisma.results.findMany();

    return (
        <div className="h-screen border-1 border-red-700 flex flex-col justify-between">
            <Header />
            <div className="flex h-full">
                <div className="max-w-md w-1/6 border-1 border-red-700">
                    <div className="p-4 h-full space-y-4">
                        <div className="border-1 border-red-700">History</div>
                        <div className="space-y-2">
                            <div className="border-1 border-red-700">
                                History 1
                            </div>
                            <div className="border-1 border-red-700">
                                History 2
                            </div>
                            <div className="border-1 border-red-700">
                                History 3
                            </div>
                            <div className="border-1 border-red-700">
                                History 4
                            </div>
                            <div className="border-1 border-red-700">
                                History 5
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center border-1 border-red-700">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}
