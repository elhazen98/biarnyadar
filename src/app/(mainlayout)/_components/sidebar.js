import { prisma } from "@/utils/prisma";
import Link from "next/link";

export const Sidebar = async ({ userId }) => {
    const results = await prisma.result.findMany({
        where: { userId },
    });
    return (
        <div className="max-w-md w-1/6 pl-4 pr-4">
            <div className="h-full rounded-xl bg-gradient-to-b to-indigo-950 from-violet-950">
                <div className="p-4 h-full space-y-4">
                    <div className="h-full flex flex-col justify-between">
                        <div>
                            <div className="font-bold text-xl mb-8">
                                History
                            </div>
                            <div className="flex flex-col gap-2">
                                {results.map((result) => (
                                    <Link
                                        href={`/result/${result.inputId}`}
                                        key={result.inputId}
                                    >
                                        <div className="w-full text-sm rounded-lg transition duration-150 hover:bg-violet-800 hover:text-slate-200 p-2 bg-violet-500 font-bold">
                                            {result.title}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <Link
                            href={"/input"}
                            className="w-full bg-gradient-to-r from-indigo-800 to-violet-900 hover:brightness-150 font-bold py-3 rounded-full duration-150 shadow-xl text-center"
                        >
                            Add New Input
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
