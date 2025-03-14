import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExampleCarousel } from "./_components/example";

export default function Home() {
    return (
        <div className="bg-gradient-to-b to-gray-800 from-slate-950 text-white">
            <div className="fixed flex w-full shadow-lg z-50 backdrop-blur-lg py-8 justify-center">
                <header className="w-7xl flex justify-between px-4 items-center">
                    <div className="text-2xl ">
                        👻 biar<span className="font-bold">nyadar</span>
                    </div>
                    <div className="">
                        <Link
                            href="/login"
                            className="font-semibold px-4 py-2 text-slate-400 rounded-full items-center hover:text-white duration-150"
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className="font-semibold px-4 py-2 bg-white text-slate-950 rounded-full items-center hover:bg-indigo-800 hover:text-white duration-150"
                        >
                            Sign Up
                        </Link>
                    </div>
                </header>
            </div>
            <div className="m-auto max-w-7xl w-3/4">
                <section>
                    <section className="h-screen p-24">
                        <div className="flex flex-col items-center justify-center text-center h-[calc(100vh-256px)] gap-12">
                            <div className="space-y-4">
                                <h1 className="text-9xl">Enjoying life?</h1>
                                {/* <h1></h1> */}
                                <h1 className="text-6xl font-bold">
                                    Your body might not agree.
                                </h1>
                            </div>
                            <h2 className="text-slate-400 sm:text-xl md:text-2xl">
                                {"Let's check before it's too late."}
                            </h2>
                            <Link
                                href="/register"
                                className="flex items-center"
                            >
                                <Button className="rounded-full text-xl py-6 px-8 bg-gradient-to-r from-indigo-800 to-purple-800 hover:brightness-150 animate-pulse">
                                    Try{" "}
                                    <span className="font-bold">
                                        biarnyadar
                                    </span>{" "}
                                    Now
                                </Button>
                            </Link>
                        </div>
                        <div className="flex justify-around items-center h-32 font-semibold text-slate-400">
                            <Link
                                href="#description"
                                className="hover:text-white duration-150"
                            >
                                Description
                            </Link>
                            <Link
                                href="#how-to-use"
                                className="hover:text-white duration-150"
                            >
                                How To Use
                            </Link>
                            <Link
                                href="#examples"
                                className="hover:text-white duration-150"
                            >
                                Examples
                            </Link>
                            <Link
                                href="#disclaimer"
                                className="hover:text-white duration-150"
                            >
                                Disclaimer
                            </Link>
                            <Link
                                href="#privacy-policy"
                                className="hover:text-white duration-150"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </section>
                    <section id="description" className="pt-28">
                        <h2 className="font-bold text-3xl text-center mb-10">
                            Description
                        </h2>
                        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl backdrop-blur-sm shadow-lg">
                            <p className="text-lg leading-relaxed text-center">
                                <span className="font-bold">biarnyadar</span>{" "}
                                {
                                    "helps you reflect on your lifestyle and how it impacts your health. By analyzing your habits—diet, exercise, sleep, stress, and more—our AI provides insights into your well-being, potential health risks, and life expectancy. It's not about fear, but awareness. Small changes today can lead to a healthier future."
                                }
                            </p>
                        </div>
                    </section>
                    <section id="how-to-use" className="pt-28">
                        <h2 className="font-bold text-3xl text-center mb-8">
                            How To Use
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex items-start bg-slate-800 border border-slate-700 rounded-2xl backdrop-blur-sm shadow-lg p-6">
                                <div className="font-bold rounded-full bg-gradient-to-r from-indigo-900 to-purple-900 mr-4 w-10 h-10 flex justify-center items-center shadow-xl">
                                    1
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">
                                        Create your Profile
                                    </h3>
                                    <p>
                                        Sign-up for free account and gets the
                                        benefit.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start bg-slate-800 border border-slate-700 rounded-2xl backdrop-blur-sm shadow-lg p-6">
                                <div className="font-bold rounded-full bg-gradient-to-r from-indigo-900 to-purple-900 mr-4 w-10 h-10 flex justify-center items-center shadow-xl">
                                    2
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">
                                        Filling Our Input Form
                                    </h3>
                                    <p>
                                        Complete our detailed assessment about
                                        your lifestyle habits
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start bg-slate-800 border border-slate-700 rounded-2xl backdrop-blur-sm shadow-lg p-6">
                                <div className="font-bold rounded-full bg-gradient-to-r from-indigo-900 to-purple-900 mr-4 w-10 h-10 flex justify-center items-center shadow-xl">
                                    3
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">
                                        Get your Result
                                    </h3>
                                    <p>
                                        see the sarcastic result from anything
                                        in your life
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start bg-slate-800 border border-slate-700 rounded-2xl backdrop-blur-sm shadow-lg p-6">
                                <div className="font-bold rounded-full bg-gradient-to-r from-indigo-900 to-purple-900 mr-4 w-10 h-10 flex justify-center items-center shadow-xl">
                                    4
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2">
                                        Track Your Progress
                                    </h3>
                                    <p>
                                        Monitor changes, update your
                                        information, save your history.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="examples" className="pt-28">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            Examples
                        </h2>
                        <ExampleCarousel />
                    </section>
                    <section id="disclaimer" className="pt-28">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Disclaimer
                        </h2>
                        <div className=" p-6 bg-gradient-to-br from-rose-500 to-rose-900 rounded-2xl backdrop-blur-sm shadow-sm">
                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                <div className="rounded-full p-4 shrink-0 bg-red-900/60 shadow-lg flex justify-center items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-8 h-8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-2 text-center sm:text-left">
                                        Important Notice
                                    </h3>
                                    <p className="text-lg">
                                        <span className="font-bold">
                                            biarnyadar
                                        </span>{" "}
                                        provides health predictions and
                                        lifestyle assessments based on
                                        statistical models and data analysis.
                                        These insights are for informational
                                        purposes only and are not a substitute
                                        for professional medical, financial, or
                                        legal advice. While we aim for accuracy,
                                        no prediction is guaranteed. Always
                                        consult a qualified professional before
                                        making important health or life
                                        decisions
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="privacy-policy" className="pt-28">
                        <h2 className="text-3xl text-center font-bold mb-8">
                            Privacy Policy
                        </h2>
                        <div className="rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-900 p-6 shadow-lg backdrop-blur-sm">
                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                <div className="bg-emerald-900 rounded-full p-4 shrink-0 flex justify-center items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-8 h-8"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-center sm:text-left mb-2">
                                        Your data secure with us
                                    </h3>
                                    <p className="text-lg">
                                        At{" "}
                                        <span className="font-bold">
                                            biarnyadar
                                        </span>
                                        , we take your privacy seriously. All
                                        personal data you provide is encrypted
                                        and securely stored. We do not sell,
                                        share, or misuse your information. Your
                                        inputs are used solely to generate
                                        insights and are not retained beyond
                                        what is necessary for analysis. We
                                        follow strict security measures to
                                        protect your data, ensuring
                                        confidentiality and compliance with best
                                        privacy practices. Your health is
                                        personal, and so is your data.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <footer className="py-8 mt-16 border-t border-white/20">
                    <div className="text-center text-white">
                        &copy; {new Date().getFullYear()} biarnyadar | All
                        rights reserved.
                    </div>
                </footer>
            </div>
        </div>
    );
}
