"use client";

import { useActionState } from "react";
import { dataInputAction } from "../action";

export const DataInput = ({ userId }) => {
    const [state, formAction, pending] = useActionState(dataInputAction, null);
    return (
        <section>
            <form
                className="space-y-2 space-x-2 grid grid-cols-2"
                action={formAction}
            >
                <input name="userId" defaultValue={userId} hidden />
                <div className="col-span-2 text-left text-2xl">
                    Basic Information
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="age">Age</label>
                    <input
                        name="age"
                        placeholder="Input Umur"
                        className="border border-gray-500 px-2 py-2 w-full"
                        type="number"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="sex">Sex</label>
                    <select name="sex" className="h-full border">
                        <option name="male">Male</option>
                        <option name="female">Female</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="height">Height</label>
                    <input
                        name="height"
                        placeholder="Height in (cm)"
                        className="border border-gray-500 px-2 py-2 w-full"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="weight">Weight</label>
                    <input
                        name="weight"
                        placeholder="Weight in (kg)"
                        className="border border-gray-500 px-2 py-2 w-full"
                    />
                </div>

                <div className="col-span-2 text-left text-2xl">Diet</div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="fastfood" className="flex flex-col gap-2">
                        How often do you eat fast food / junk food?
                    </label>
                    <select
                        name="fastfood"
                        className="border bg-white text-black"
                    >
                        <option>Almost everyday.</option>
                        <option>3-5 times a week.</option>
                        <option>1-2 times a week.</option>
                        <option>I rarely eat fast food.</option>
                        <option>I never eat fast food.</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="oily" className="flex flex-col gap-2">
                        How often do you eat oily or fried food, including
                        coconut milk-based dishes?
                    </label>
                    <select name="oily" className="border bg-white text-black">
                        <option>Almost everyday.</option>
                        <option>3-5 times a week.</option>
                        <option>1-2 times a week.</option>
                        <option>I rarely eat oily or fried food.</option>
                        <option>I never oily or fried food.</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="sugar" className="flex flex-col gap-2">
                        How often do you consume sugary foods and drinks?
                    </label>
                    <select name="sugar" className="border bg-white text-black">
                        <option>I can only drink sugary beverages.</option>
                        <option>Almost every day.</option>
                        <option>3-5 times a week.</option>
                        <option>I rarely eat or drink anything sugary.</option>
                        <option>
                            I never consume sugary foods and drinks.
                        </option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="fruit" className="flex flex-col gap-2">
                        How often do you eat vegetables and fruits?
                    </label>
                    <select name="fruit" className="border bg-white text-black">
                        <option>Almost never.</option>
                        <option>1-2 times a week.</option>
                        <option>3-5 times a week.</option>
                        <option>At least once a day.</option>
                        <option>
                            Every meal, consistently throughout the day.
                        </option>
                    </select>
                </div>
                <div className="col-span-2 text-left text-2xl">
                    Daily Activity
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="workout" className="flex flex-col gap-2">
                        How often do you work out?
                    </label>
                    <select
                        name="workout"
                        className="border bg-white text-black"
                    >
                        <option>
                            Never. I have no regular physical activity
                        </option>
                        <option>Rarely. A few times a month.</option>
                        <option>1-2 times a week.</option>
                        <option>3-5 times a week.</option>
                        <option>
                            Every day. I have onsistent and active lifestyle.
                        </option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="sleepTime" className="flex flex-col gap-2">
                        How would you describe your sleep quality?
                    </label>
                    <select
                        name="sleepTime"
                        className="border bg-white text-black"
                    >
                        <option>Terrible, always sleep-deprived</option>
                        <option>Poor, often feel exhausted</option>
                        <option>Average, sometimes feel tired</option>
                        <option>Good, mostly well-rested</option>
                        <option>Excellent, always feel refreshed</option>
                    </select>
                </div>
                <div className="text-left text-2xl col-span-2">Risk Factor</div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="smoking" className="flex flex-col gap-2">
                        Do you smoke or vape?
                    </label>
                    <select
                        name="smoking"
                        className="border bg-white text-black"
                    >
                        <option>
                            I smoke regularly (daily or almost every day)
                        </option>
                        <option>
                            I vape regularly (daily or almost every day)
                        </option>
                        <option>
                            I smoke and vape (both habits regularly)
                        </option>
                        <option>
                            Occasionally (only socially or a few times a month)
                        </option>
                        <option>I never smoke or vape</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="alcohol" className="flex flex-col gap-2">
                        How often do you drink alcohol?
                    </label>
                    <select
                        name="alcohol"
                        className="border bg-white text-black"
                    >
                        <option>Almost every day</option>
                        <option>Frequently, 2-3 times a week</option>
                        <option>Occasionally, a few times a month</option>
                        <option>Rarely, only on special occasions</option>
                        <option>I never drink alcohol</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="location" className="flex flex-col gap-2">
                        Where do you live?
                    </label>
                    <select
                        name="location"
                        className="border bg-white text-black"
                    >
                        <option>
                            Urban (High population density, lots of buildings,
                            traffic, and pollution)
                        </option>
                        <option>
                            Suburban (Residential areas near cities, mix of
                            nature and urban life)
                        </option>
                        <option>
                            Rural (Countryside, low population density, more
                            natural surroundings)
                        </option>
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="stress" className="flex flex-col gap-2">
                        How would you rate your current stress level?
                    </label>
                    <select
                        name="stress"
                        className="border bg-white text-black"
                    >
                        <option>
                            Very high (Constant stress, affecting daily life)
                        </option>
                        <option>
                            High (Often feel overwhelmed and anxious)
                        </option>
                        <option>
                            Moderate (Feel stressed regularly but can cope)
                        </option>
                        <option>Low (Occasional stress but manageable)</option>
                        <option>Very low (Calm, rarely feel stressed)</option>
                    </select>
                </div>
                <div className="flex flex-col gap-2 col-span-2">
                    <label
                        htmlFor="roastLevel"
                        className="flex flex-col gap-2 text-2xl"
                    >
                        Select roast level
                    </label>
                    <select
                        name="roastLevel"
                        className="border bg-white text-black"
                    >
                        <option name="RoastLevel1" value="humble">
                            Humble Roasting
                        </option>
                        <option name="RoastLevel2" value="mid">
                            Medium Roasting
                        </option>
                        <option name="RoastLevel3" value="high">
                            High Roasting
                        </option>
                    </select>
                </div>

                <button
                    disabled={pending}
                    className="bg-indigo-700 text-white text-center align-middle rounded-full col-span-2 p-4"
                >
                    Confirm Input
                </button>
                {state?.status === "error" && (
                    <div className="text-red-500 font-semibold">
                        {state.message}
                    </div>
                )}
            </form>
        </section>
    );
};
