"use client";

import { useActionState } from "react";
import { dataInput } from "../actions/create";
import { PrismaClient } from "@prisma/client";

export const DataInput = () => {
  const [state, formAction, pending] = useActionState(dataInput, null);

  return (
    <section>
      <form className="space-y-2" action={formAction}>
        <h3>Nama</h3>
        <input name="name" placeholder="Input Your Name" />
        <h3>Umur</h3>
        <input name="age" placeholder="Input Your Age" />
        <h3>Tinggi</h3>
        <input name="height" placeholder="Input Your Height in CM" />
        <h3>Berat</h3>
        <input name="weight" placeholder="Input Your Weight in Kg" />
        <button disabled={pending}>Confirm Input</button>
        {state?.status === "error" && (
          <div className="text-red-500 font-semibold">{state.message}</div>
        )}
      </form>
    </section>
  );
};
