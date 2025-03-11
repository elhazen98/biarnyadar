"use client";

import { useActionState } from "react";
import { dataInput } from "../actions/form-create";
import { PrismaClient } from "@prisma/client";

export const DataInput = () => {
  const [state, formAction, pending] = useActionState(dataInput, null);
  return (
    <section className="">
      <form
        className="space-y-2 space-x-2  grid grid-cols-4"
        action={formAction}
      >
        <input
          name="age"
          placeholder="Input Umur"
          className="border border-gray-500 px-2 py-2 w-auto"
        />
        <input
          name="height"
          placeholder="Input Tinggi (Cm)"
          className="border border-gray-500 px-2 py-2 w-auto"
        />
        <input
          name="weight"
          placeholder="Input Berat (Kg)"
          className="border border-gray-500 px-2 py-2 w-auto"
        />
        <div className="text-center col-span-1">
          <script></script>

          <label>BMI</label>
          <input className="border w-full"></input>
        </div>

        <h3 className="col-span-4">Pilih tipe Diet anda?</h3>
        <select name="diet" className="col-span-4 border">
          <option name="JunkFood">Junk Food</option>
          <option name="MinumAir">Minum Air 8 Gelas sehari?</option>
          <option name="Sugar">Banyak Makan Gula?</option>
        </select>
        <h3 className="col-span-4">Apakah anda berolahraga?</h3>
        <select name="workout" className="col-span-4 border">
          <option name="exNever">Tidak pernah berolahraga</option>
          <option name="exOnceaWeek">1 Minggu sekali</option>
          <option name="ex23perweek">2-3x Per minggu</option>
        </select>
        <h3 className="col-span-4">Apakah anda perokok?</h3>
        <select name="smoking" className="col-span-4 border">
          <option name="Smoke">Ya</option>
          <option name="NoSmoke">Tidak</option>
        </select>
        <h3 className="col-span-4">Apakah anda suka minum alkohol?</h3>
        <select name="alcohol" className="col-span-4 border">
          <option name="Alcohol">Ya</option>
          <option name="NoAlcohol">Tidak</option>
        </select>
        <h3 className="col-span-4">Berapa lama anda tidur setiap malam?</h3>
        <select name="sleepTime" className="col-span-4 border">
          <option name="Sleep8Hours">Lebih dari 8 Jam?</option>
          <option name="SleepLess8Hours">Kurang dari 8 Jam?</option>
        </select>
        <h3 className="col-span-4">Apakah lokasi anda urban atau lokal?</h3>
        <select name="location" className="col-span-4 border">
          <option name="Urban">Urban</option>
          <option name="Rural">Rural</option>
        </select>
        <h3 className="col-span-4">Apakah stress level anda?</h3>
        <select name="stress" className="col-span-4 border">
          <option name="StressLevel1">1 - Rendah</option>
          <option name="StressLevel2">2</option>
          <option name="StressLevel3">3</option>
          <option name="StressLevel4">4</option>
          <option name="StressLevel5">5 - MAX Stress Level </option>
        </select>

        <h3 className="col-span-4">Tentukan Roast Level Anda?</h3>
        <select name="roastLevel" className="col-span-4 border">
          <option name="RoastLevel1">1 - Paling Cupu</option>
          <option name="RoastLevel2">2 - Cupu</option>
          <option name="RoastLevel3">3 - Normal</option>
          <option name="RoastLevel4">4 - Ok Lah</option>
          <option name="RoastLevel5">5 - MAX Roast Level </option>
        </select>

        <button
          disabled={pending}
          className="bg-indigo-700 text-white text-center align-middle rounded-2xl col-span-4"
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
