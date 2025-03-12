import { prisma } from "@/utils/prisma";
import Link from "next/link";

export const Sidebar = async ({ userId }) => {
    const results = await prisma.result.findMany({
        where: { userId },
    });
    return (
        <div className="max-w-md w-1/6 pl-4 pr-4">
            <div className="h-full border border-slate-700/50 rounded-xl from-gray-800/20 to-gray-700/20 backdrop-blur-md shadow-lg bg-gradient-to-b">
                <div className="p-4 h-full space-y-4">
                    <div className="h-full flex flex-col justify-between">
                        <div>
                            <div className="font-bold text-xl mb-8">
                                History
                            </div>
                            <div className="flex flex-col gap-2"></div>
                            {results.map((result) => (
                                <Link
                                    className=""
                                    href={`/result/${result.inputId}`}
                                    key={result.inputId}
                                >
                                    <div className="w-full text-sm rounded-lg transition duration-150 text-slate-300 hover:bg-purple-300 hover:text-slate-900 hover:shadow-lg p-2 bg-slate-700/50 font-bold">
                                        {result.title}
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <Link
                            href={"/input"}
                            className="text-center rounded-full text-md py-2 px-4 bg-gradient-to-r from-indigo-800 to-purple-800 hover:brightness-150 duration-150"
                        >
                            Add New Input
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
