import { auth } from "@/lib/auth";
import { DataInput } from "./_components/data-create";

export default async function Page() {
    const session = await auth();
    const userId = session.user.id;

    return (
        <main className="max-w-xl m-auto py-2">
            <DataInput userId={userId} />
        </main>
    );
}
