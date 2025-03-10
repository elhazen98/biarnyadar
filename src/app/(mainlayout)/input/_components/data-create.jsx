"use client";

import { useActionState } from "react";
import { dataInput } from "../actions/form-create";
import { PrismaClient } from "@prisma/client";

export const DataInput = () => {
  const [state, formAction, pending] = useActionState(dataInput, null);

  return (
    <section>
      <h1>Data Input</h1>
      <form className="space-y-2 col-span-2" action={formAction}>
        <h3>Nama</h3>
        <input
          name="name"
          placeholder="Input Nama"
          className="border border-gray-500 rounded-full px-4 py-3 w-full"
        />
        <h3>Umur</h3>
        <input
          name="age"
          placeholder="Input Umur"
          className="border border-gray-500 rounded-full px-4 py-3 w-full"
        />
        <h3>Tinggi</h3>
        <input
          name="height"
          placeholder="Input Tinggi dalam CM"
          className="border border-gray-500 rounded-full px-4 py-3 w-full"
        />
        <h3>Berat</h3>
        <input
          name="weight"
          placeholder="Input Berat dalam KG"
          className="border border-gray-500 rounded-full px-4 py-3 w-full"
        />
        <input name="bmi" />
        <h3>Pilih tipe Diet anda?</h3>
        <select>
          <option name="JunkFood">Junk Food</option>
          <option name="MinumAir">Minum Air 8 Gelas sehari?</option>
        </select>
        <h3>Workout</h3>
        <select>
          <option name="JunkFood">Junk Food</option>
          <option name="MinumAir">Minum Air 8 Gelas sehari?</option>
        </select>
        <h3>Smoking</h3>
        <select>
          <option name="JunkFood">Junk Food</option>
          <option name="MinumAir">Minum Air 8 Gelas sehari?</option>
        </select>
        <h3>Alcohol</h3>
        <select>
          <option name="JunkFood">Junk Food</option>
          <option name="MinumAir">Minum Air 8 Gelas sehari?</option>
        </select>
        <h3>Sleeptime</h3>
        <select>
          <option name="JunkFood">Junk Food</option>
          <option name="MinumAir">Minum Air 8 Gelas sehari?</option>
        </select>
        <button
          disabled={pending}
          className="bg-indigo-700 text-white text-center align-middle rounded-2xl"
        >
          Confirm Input
        </button>
        {state?.status === "error" && (
          <div className="text-red-500 font-semibold">{state.message}</div>
        )}
      </form>
    </section>
  );
};
