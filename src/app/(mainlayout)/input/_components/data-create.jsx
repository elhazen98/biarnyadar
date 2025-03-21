"use client";

import { useActionState, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { dataInputAction } from "../action";
import { startTransition } from "react";
import { BiLeftArrowAlt } from "react-icons/bi";
import { BiRightArrowAlt } from "react-icons/bi";

export const DataInput = ({ userId }) => {
    const [activeTab, setActiveTab] = useState("basic-info");
    const [progress, setProgress] = useState(20);
    const [state, formAction, pending] = useActionState(dataInputAction, null);

    const [formData, setFormData] = useState({
        userId: userId,
        age: "",
        sex: "",
        height: "",
        weight: "",
        fastfood: "",
        oily: "",
        sugar: "",
        fruit: "",
        workout: "",
        sleepTime: "",
        smoking: "",
        alcohol: "",
        location: "",
        stress: "",
        roastLevel: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSelectChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        startTransition(() => {
            formAction(formData);
        });
    };

    const goToNext = () => {
        if (activeTab === "basic-info") {
            setActiveTab("diet");
            setProgress(40);
        } else if (activeTab === "diet") {
            setActiveTab("activity");
            setProgress(60);
        } else if (activeTab === "activity") {
            setActiveTab("risk-factors");
            setProgress(80);
        } else if (activeTab === "risk-factors") {
            setActiveTab("preferences");
            setProgress(100);
        }
    };

    const goToBack = () => {
        if (activeTab === "diet") {
            setActiveTab("basic-info");
            setProgress(20);
        } else if (activeTab === "activity") {
            setActiveTab("diet");
            setProgress(40);
        } else if (activeTab === "risk-factors") {
            setActiveTab("activity");
            setProgress(60);
        } else if (activeTab === "preferences") {
            setActiveTab("risk-factors");
            setProgress(80);
        }
    };

    return (
        <div className="h-full text-slate-200">
            <div className="w-full">
                <h2 className="font-bold text-2xl mb-6">
                    {" "}
                    Tell us about your lifestyle
                </h2>

                <div className="flex mb-1">
                    <div className="w-full bg-indigo-950 h-1 relative p-2 rounded-xl">
                        <div
                            className="absolute top-0 left-0 h-full bg-violet-200 p-2 rounded-xl duration-300"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>

                <div className="flex justify-between text-xs mb-6 mt-2">
                    <span>Start</span>
                    <span>Finish</span>
                </div>

                <div className="grid grid-cols-5 gap-1 mb-6 font-bold">
                    <button
                        className={`py-2 px-4 rounded font-bold ${
                            activeTab === "basic-info"
                                ? "bg-violet-200 text-black"
                                : "bg-indigo-950 text-gray-400 hover:bg-violet-200 hover:text-black duration-150"
                        }`}
                        onClick={() => {
                            setActiveTab("basic-info");
                            setProgress(20);
                        }}
                    >
                        Basic Info
                    </button>
                    <button
                        className={`py-2 px-4 rounded ${
                            activeTab === "diet"
                                ? "bg-violet-200 text-black"
                                : "bg-indigo-950 text-gray-400 hover:bg-violet-200 hover:text-black duration-150"
                        }`}
                        onClick={() => {
                            setActiveTab("diet");
                            setProgress(40);
                        }}
                    >
                        Diet
                    </button>
                    <button
                        className={`py-2 px-4 rounded ${
                            activeTab === "activity"
                                ? "bg-violet-200 text-black"
                                : "bg-indigo-950 text-gray-400 hover:bg-violet-200 hover:text-black duration-150"
                        }`}
                        onClick={() => {
                            setActiveTab("activity");
                            setProgress(60);
                        }}
                    >
                        Activity
                    </button>
                    <button
                        className={`py-2 px-4 rounded ${
                            activeTab === "risk-factor"
                                ? "bg-violet-200 text-black"
                                : "bg-indigo-950 text-gray-400 hover:bg-violet-200 hover:text-black duration-150"
                        }`}
                        onClick={() => {
                            setActiveTab("risk-factors");
                            setProgress(80);
                        }}
                    >
                        Risk Factors
                    </button>
                    <button
                        className={`py-2 px-4 rounded ${
                            activeTab === "preferences"
                                ? "bg-violet-200 text-black"
                                : "bg-indigo-950 text-gray-400 hover:bg-violet-200 hover:text-black duration-150"
                        }`}
                        onClick={() => {
                            setActiveTab("preferences");
                            setProgress(100);
                        }}
                    >
                        Preferences
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="rounded-lg p-6 bg-gradient-to-r to-indigo-950 from-violet-950">
                        {activeTab === "basic-info" && (
                            <div>
                                <h2 className="text-2xl font-bold mb-1">
                                    Basic Information
                                </h2>
                                <p className="text-gray-400 mb-6 text-sm">
                                    Tell us about your physical attributes
                                </p>
                                <input
                                    name="userId"
                                    value={userId}
                                    onChange={handleChange}
                                    hidden
                                />
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="age"
                                            className="text-sm"
                                        >
                                            Age
                                        </Label>
                                        <Input
                                            id="age"
                                            name="age"
                                            type="text"
                                            value={formData.age}
                                            onChange={handleChange}
                                            placeholder="Input your age"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="sex"
                                            className="text-sm"
                                        >
                                            Sex
                                        </Label>
                                        <Select
                                            value={formData.sex}
                                            onValueChange={(value) =>
                                                handleSelectChange("sex", value)
                                            }
                                        >
                                            <SelectTrigger className="rounded-md text-slate-200">
                                                <SelectValue placeholder="Select your gender" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="male">
                                                    Male
                                                </SelectItem>
                                                <SelectItem value="female">
                                                    Female
                                                </SelectItem>
                                                <SelectItem value="other">
                                                    Other
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="height"
                                            className="text-sm"
                                        >
                                            Height (cm)
                                        </Label>
                                        <Input
                                            id="height"
                                            type="text"
                                            name="height"
                                            value={formData.height}
                                            onChange={handleChange}
                                            placeholder="Input your height"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="weight"
                                            className="text-sm"
                                        >
                                            Weight (kg)
                                        </Label>
                                        <Input
                                            id="weight"
                                            type="text"
                                            name="weight"
                                            value={formData.weight}
                                            onChange={handleChange}
                                            placeholder="Input your weight"
                                        />
                                    </div>
                                </div>

                                <div className="flex justify-end mt-6">
                                    <Button
                                        className="bg-slate-200 hover:bg-indigo-800 text-black rounded hover:text-slate-200"
                                        onClick={goToNext}
                                        type="button"
                                    >
                                        Next{" "}
                                        <span className="ml-1">
                                            <BiRightArrowAlt />
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        )}

                        {activeTab === "diet" && (
                            <div>
                                <h2 className="text-2xl font-bold mb-1">
                                    Diet
                                </h2>
                                <p className="text-gray-400 mb-6 text-sm">
                                    Tell us about your eating habits
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="fastfood"
                                            className="text-sm"
                                        >
                                            How often do you eat fast food /
                                            junk food?
                                        </Label>
                                        <Select
                                            value={formData.fastfood}
                                            onValueChange={(value) =>
                                                handleSelectChange(
                                                    "fastfood",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="border border-gray-800 text-white rounded-md">
                                                <SelectValue placeholder="Select option" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Almost everyday">
                                                    Almost everyday.
                                                </SelectItem>
                                                <SelectItem value="3-5 times a week">
                                                    3-5 times a week.
                                                </SelectItem>
                                                <SelectItem value="1-2 times a week">
                                                    1-2 times a week
                                                </SelectItem>
                                                <SelectItem value="I rarely eat fast food">
                                                    I rarely eat fast food.
                                                </SelectItem>
                                                <SelectItem value="I never eat fast food">
                                                    I never eat fast food.
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="oily"
                                            className="text-sm"
                                        >
                                            {" "}
                                            How often do you eat oily or fried
                                            food, including coconut milk-based
                                            dishes?
                                        </Label>
                                        <Select
                                            value={formData.oily}
                                            onValueChange={(value) =>
                                                handleSelectChange(
                                                    "oily",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="border border-gray-800 text-white rounded-md">
                                                <SelectValue placeholder="Select option" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Almost everyday">
                                                    Almost everyday.
                                                </SelectItem>
                                                <SelectItem value="3-5 times a week">
                                                    3-5 times a week
                                                </SelectItem>
                                                <SelectItem value="1-2 times a week">
                                                    1-2 times a week
                                                </SelectItem>
                                                <SelectItem value="I rarely eat oily or fried food">
                                                    I rarely eat oily or fried
                                                    food.
                                                </SelectItem>
                                                <SelectItem value="I never oily or fried food">
                                                    I never oily or fried food.
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="sugar"
                                            className="text-sm"
                                        >
                                            How often do you consume sugary
                                            foods and drinks?
                                        </Label>
                                        <Select
                                            value={formData.sugar}
                                            onValueChange={(value) =>
                                                handleSelectChange(
                                                    "sugar",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="border border-gray-800 text-white rounded-md">
                                                <SelectValue placeholder="Select option" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="I can only drink sugary beverages">
                                                    I can only drink sugary
                                                    beverages.
                                                </SelectItem>
                                                <SelectItem value="Almost every day">
                                                    Almost every day.
                                                </SelectItem>
                                                <SelectItem value="3-5 times a week">
                                                    3-5 times a week.
                                                </SelectItem>
                                                <SelectItem value="I rarely eat or drink anything sugary">
                                                    I rarely eat or drink
                                                    anything sugary.
                                                </SelectItem>
                                                <SelectItem value="I never consume sugary foods and drinks">
                                                    I never consume sugary foods
                                                    and drinks.
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="fruit"
                                            className="text-sm"
                                        >
                                            How often do you eat vegetables and
                                            fruits?
                                        </Label>
                                        <Select
                                            value={formData.fruit}
                                            onValueChange={(value) =>
                                                handleSelectChange(
                                                    "fruit",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="border border-gray-800 text-white rounded-md">
                                                <SelectValue placeholder="Select option" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="never">
                                                    Almost never.
                                                </SelectItem>
                                                <SelectItem value="rarely">
                                                    1-2 times a week.
                                                </SelectItem>
                                                <SelectItem value="sometimes">
                                                    3-5 times a week.
                                                </SelectItem>
                                                <SelectItem value="often">
                                                    At least once a day.
                                                </SelectItem>
                                                <SelectItem value="daily">
                                                    Every meal, consistently
                                                    throughout the day.
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="flex justify-between mt-6">
                                    <Button
                                        className="bg-slate-950 text-white hover:bg-indigo-800"
                                        onClick={goToBack}
                                        type="button"
                                    >
                                        <span className="mr-1">
                                            <BiLeftArrowAlt />
                                        </span>
                                        Back
                                    </Button>
                                    <Button
                                        className="bg-slate-200 hover:bg-indigo-800 text-black rounded hover:text-slate-200"
                                        onClick={goToNext}
                                        type="button"
                                    >
                                        Next{" "}
                                        <span className="ml-1">
                                            <BiRightArrowAlt />
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        )}

                        {activeTab === "activity" && (
                            <div>
                                <h2 className="text-2xl font-bold mb-1">
                                    Daily Activity
                                </h2>
                                <p className="text-gray-400 mb-6 text-sm">
                                    Tell us about your physical activity and
                                    sleep
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="workout"
                                            className="text-sm"
                                        >
                                            How often do you work out?
                                        </Label>
                                        <Select
                                            value={formData.workout}
                                            onValueChange={(value) =>
                                                handleSelectChange(
                                                    "workout",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="border border-gray-800 text-white rounded-md">
                                                <SelectValue placeholder="Select option" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Never. I have no regular physical activity">
                                                    Never. I have no regular
                                                    physical activity
                                                </SelectItem>
                                                <SelectItem value="Rarely. A few times a month">
                                                    Rarely. A few times a month
                                                </SelectItem>
                                                <SelectItem value="1-2 times a week.">
                                                    1-2 times a week.
                                                </SelectItem>
                                                <SelectItem value="3-5 times a week">
                                                    3-5 times a week
                                                </SelectItem>
                                                <SelectItem value="Every day. I have onsistent and active lifestyle.">
                                                    Every day. I have consistent
                                                    and active lifestyle.
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="sleepTime"
                                            className="text-sm"
                                        >
                                            How would you describe your sleep
                                            quality?
                                        </Label>
                                        <Select
                                            value={formData.sleepTime}
                                            onValueChange={(value) =>
                                                handleSelectChange(
                                                    "sleepTime",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="rounded-md border border-gray-800 text-white">
                                                <SelectValue placeholder="Select option" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Terrible, always sleep-deprive">
                                                    Terrible, always
                                                    sleep-deprive
                                                </SelectItem>
                                                <SelectItem value="Poor, often feel exhausted">
                                                    Poor, often feel exhausted
                                                </SelectItem>
                                                <SelectItem value="Average, sometimes feel tired">
                                                    Average, sometimes feel
                                                    tired
                                                </SelectItem>
                                                <SelectItem value="Good, mostly well-rested">
                                                    Good, mostly well-rested
                                                </SelectItem>
                                                <SelectItem value="Excellent, always feel refreshed">
                                                    Excellent, always feel
                                                    refreshed
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="flex justify-between mt-6">
                                    <Button
                                        className="bg-slate-950 text-white hover:bg-indigo-800"
                                        onClick={goToBack}
                                        type="button"
                                    >
                                        <span className="mr-1">
                                            <BiLeftArrowAlt />
                                        </span>
                                        Back
                                    </Button>
                                    <Button
                                        className="bg-slate-200 hover:bg-indigo-800 text-black rounded hover:text-slate-200"
                                        onClick={goToNext}
                                        type="button"
                                    >
                                        Next{" "}
                                        <span className="ml-1">
                                            <BiRightArrowAlt />
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        )}

                        {activeTab === "risk-factors" && (
                            <div>
                                <h2 className="text-2xl font-bold mb-1">
                                    Risk Factors
                                </h2>
                                <p className="text-gray-400 mb-6 text-sm">
                                    Tell us about potential health risk factors
                                </p>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="smoking"
                                            className="text-sm"
                                        >
                                            Do you smoke or vape?
                                        </Label>
                                        <Select
                                            value={formData.smoking}
                                            onValueChange={(value) =>
                                                handleSelectChange(
                                                    "smoking",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="rounded-md border border-gray-800 text-white">
                                                <SelectValue placeholder="Select option" />
                                            </SelectTrigger>
                                            <SelectContent className="bg-black text-white border-gray-800">
                                                <SelectItem value="I smoke regularly (daily or almost every day)">
                                                    I smoke regularly (daily or
                                                    almost every day)
                                                </SelectItem>
                                                <SelectItem value="I vape regularly (daily or almost every day)">
                                                    {" "}
                                                    I vape regularly (daily or
                                                    almost every day)
                                                </SelectItem>
                                                <SelectItem value="I smoke and vape (both habits regularly)">
                                                    I smoke and vape (both
                                                    habits regularly)
                                                </SelectItem>
                                                <SelectItem value="Occasionally (only socially or a few times a month)">
                                                    Occasionally (only socially
                                                    or a few times a month)
                                                </SelectItem>
                                                <SelectItem value="I never smoke or vape">
                                                    I never smoke or vape
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="alcohol"
                                            className="text-sm"
                                        >
                                            How often do you drink alcohol?
                                        </Label>
                                        <Select
                                            value={formData.alcohol}
                                            onValueChange={(value) =>
                                                handleSelectChange(
                                                    "alcohol",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="rounded-md border border-gray-800 text-white">
                                                <SelectValue placeholder="Select option" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Almost every day">
                                                    Almost every day
                                                </SelectItem>
                                                <SelectItem value="Frequently, 2-3 times a week">
                                                    Frequently, 2-3 times a week
                                                </SelectItem>
                                                <SelectItem value="Occasionally, a few times a month">
                                                    Occasionally, a few times a
                                                    month
                                                </SelectItem>
                                                <SelectItem value="Rarely, only on special occasions">
                                                    Rarely, only on special
                                                    occasions
                                                </SelectItem>
                                                <SelectItem value="I never drink alcohol">
                                                    I never drink alcohol
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="location"
                                            className="text-sm"
                                        >
                                            Where do you live?
                                        </Label>
                                        <Select
                                            value={formData.location}
                                            onValueChange={(value) =>
                                                handleSelectChange(
                                                    "location",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="rounded-md border border-gray-800 text-white">
                                                <SelectValue placeholder="Select option" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Urban (High population density, lots of buildings, traffic, and pollution)">
                                                    Urban (High population
                                                    density, lots of buildings,
                                                    traffic, and pollution)
                                                </SelectItem>
                                                <SelectItem value="Suburban (Residential areas near cities, mix of nature and urban life)">
                                                    Suburban (Residential areas
                                                    near cities, mix of nature
                                                    and urban life)
                                                </SelectItem>
                                                <SelectItem value="Rural (Countryside, low population density, more natural surroundings)">
                                                    Rural (Countryside, low
                                                    population density, more
                                                    natural surroundings)
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="stress"
                                            className="text-sm"
                                        >
                                            How would you rate your current
                                            stress level?
                                        </Label>
                                        <Select
                                            value={formData.stress}
                                            onValueChange={(value) =>
                                                handleSelectChange(
                                                    "stress",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="rounded-md border border-gray-800 text-white">
                                                <SelectValue placeholder="Select option" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Very high (Constant stress, affecting daily life)">
                                                    Very high (Constant stress,
                                                    affecting daily life)
                                                </SelectItem>
                                                <SelectItem value="High (Often feel overwhelmed and anxious)">
                                                    High (Often feel overwhelmed
                                                    and anxious)
                                                </SelectItem>
                                                <SelectItem value="Moderate (Feel stressed regularly but can cope)">
                                                    Moderate (Feel stressed
                                                    regularly but can cope)
                                                </SelectItem>
                                                <SelectItem value="Low (Occasional stress but manageable)">
                                                    Low (Occasional stress but
                                                    manageable)
                                                </SelectItem>
                                                <SelectItem value="Very low (Calm, rarely feel stressed)">
                                                    Very low (Calm, rarely feel
                                                    stressed)
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="flex justify-between mt-6">
                                    <Button
                                        className="bg-slate-950 text-white hover:bg-indigo-800"
                                        onClick={goToBack}
                                        type="button"
                                    >
                                        <span className="mr-1">
                                            <BiLeftArrowAlt />
                                        </span>
                                        Back
                                    </Button>
                                    <Button
                                        className="bg-slate-200 hover:bg-indigo-800 text-black rounded hover:text-slate-200"
                                        onClick={goToNext}
                                        type="button"
                                    >
                                        Next{" "}
                                        <span className="ml-1">
                                            <BiRightArrowAlt />
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        )}

                        {activeTab === "preferences" && (
                            <div>
                                <h2 className="text-2xl font-bold mb-1">
                                    Coffee Preferences
                                </h2>
                                <p className="text-gray-400 mb-6 text-sm">
                                    Tell us about your coffee preferences (
                                    Roasting Preferences )
                                </p>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label
                                            htmlFor="roastLevel"
                                            className="text-sm"
                                        >
                                            Select roast level
                                        </Label>
                                        <Select
                                            value={formData.roastLevel}
                                            onValueChange={(value) =>
                                                handleSelectChange(
                                                    "roastLevel",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="rounded-md border border-gray-800 text-white">
                                                <SelectValue placeholder="Select option" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="humble">
                                                    Light Roast
                                                </SelectItem>
                                                <SelectItem value="mid">
                                                    Medium Roast
                                                </SelectItem>
                                                <SelectItem value="high">
                                                    Espresso Roast
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="flex justify-between mt-6">
                                    <Button
                                        className="bg-slate-950 text-white hover:bg-indigo-800"
                                        onClick={goToBack}
                                        type="button"
                                    >
                                        <span className="mr-1">
                                            <BiLeftArrowAlt />
                                        </span>
                                        Back
                                    </Button>
                                    <Button
                                        disabled={pending}
                                        className="bg-slate-200 hover:bg-indigo-800 text-black rounded hover:text-slate-200"
                                        type="submit"
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};
