import { auth } from "@/lib/auth";
import { DataInput } from "./_components/data-create";

export default async function Page() {
    const session = await auth();
    const userId = session.user.id;

    return (
        <main className="w-full h-full p-4">
            <div className="text-xl font-bold">Tell me about you.</div>
            <DataInput userId={userId} />
        </main>
    );
}
