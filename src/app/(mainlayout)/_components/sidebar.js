import { prisma } from "@/utils/prisma";
import Link from "next/link";

export const Sidebar = async ({ userId }) => {
  const results = (await prisma.result.findMany()).filter(
    (result) => result.userId === userId
  );
  return (
    <div className="max-w-md w-1/6 border-1 border-red-700">
      <div className="p-4 h-full space-y-4">
        <div className="border-1 border-red-700">History</div>
        <div className="space-y-2">
          {results.map((result) => (
            <Link href={`/result/${result.id}`} key={result.id}>
              {result.createdAt.toString()}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
