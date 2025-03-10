import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
                        <div className="flex flex-col items-center justify-center text-center h-[calc(100vh-256px)] sm:text-6xl md:text-8xl gap-8">
                            <div className="space-y-2 ">
                                <h1>{"You've got 30 years left."}</h1>
                                {/* <h1></h1> */}
                                <h1 className="font-bold">Sure about that?</h1>
                            </div>
                            <h2 className="text-slate-400 sm:text-xl md:text-2xl">
                                {
                                    "Evaluate your quality of life—before it's too late."
                                }
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
                    <section id="description" className="pt-24">
                        <h2 className="font-bold text-3xl text-center mb-10">
                            Description
                        </h2>
                        <div className="mt-8 p-6 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl backdrop-blur-sm shadow-lg">
                            <p className="text-lg leading-relaxed text-center">
                                biarnyadar is an AI-powered web application that
                                analyzes your daily habits and health data to
                                predict your life expectancy, potential disease
                                risks, and suggest a healthier lifestyle. With a
                                touch of sarcastic roasting, this app makes
                                users aware of their unhealthy choices in a fun
                                yet effective way.
                            </p>
                        </div>
                    </section>
                    <section id="how-to-use" className="pt-24">
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
                    <section id="examples" className="pt-24">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            Examples
                        </h2>
                        <Card className="bg-gradient-to-r from-indigo-900 to-purple-900 border-none">
                            <CardContent className="">
                                <div className="flex justify-center items-center flex-col space-y-6">
                                    <h2 className="text-white font-bold text-2xl">
                                        What our AI looks like
                                    </h2>
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/20 shadow-md">
                                        <div className="flex items-center mb-4">
                                            <p className="flex text-white font-bold items-center">
                                                <span className="text-4xl pr-2">
                                                    🤨{" "}
                                                </span>
                                                Sarcastic Mode
                                            </p>
                                        </div>
                                        <p className="text-white italic">
                                            Oh wow, look at you, a true pioneer
                                            of modern laziness! Your diet is
                                            basically a science experiment gone
                                            wrong, and your workout routine?
                                            Yeah, blinking doesnt count as
                                            cardio. With sleep patterns that
                                            scream I have no idea what circadian
                                            rhythm means, your body is basically
                                            running on spite and caffeine at
                                            this point. But hey, who needs
                                            longevity when you can have instant
                                            gratification and chronic fatigue?
                                            Keep going like this, and your body
                                            might just file for early
                                            retirement. But if—just if—you dont
                                            want your heart giving up on you
                                            like an old iPhone battery, maybe
                                            try something radical, like drinking
                                            actual water or walking further than
                                            the distance from your couch to the
                                            fridge. Just a thought.
                                        </p>
                                    </div>
                                    <div className="p-6 rounded-2xl bg-white/5 border border-white/20 shadow-md">
                                        <div className="flex items-center mb-4">
                                            <p className="flex text-white font-bold items-center">
                                                <span className="text-4xl pr-2">
                                                    🫠{" "}
                                                </span>
                                                Humble Mode
                                            </p>
                                        </div>
                                        <p className="text-white italic">
                                            Hey, no judgment, but your body
                                            might appreciate a little more love.
                                            Right now, its running on low fuel,
                                            bad sleep, and some questionable
                                            food choices, which might not be the
                                            best long-term strategy. The good
                                            news? Small tweaks—like drinking
                                            more water, getting a little
                                            movement in, and not treating sleep
                                            like an optional side quest—can make
                                            a huge difference. No need to
                                            overhaul everything overnight, just
                                            start somewhere! Your future self
                                            will be very grateful.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </section>
                    <section id="disclaimer" className="pt-24 md:py-16">
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
                                        Biarnyadar provides predictions and
                                        assessments based on statistical models
                                        and data analytics. These predictions
                                        are not guaranteed and should not
                                        replace professional medical, financial,
                                        or legal advice. Always consult with
                                        qualified professionals for important
                                        life decisions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="privacy-policy" className="pt-24 md:py-16">
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
                                    <p>
                                        At Biarnyadar, we take your privacy
                                        seriously. All personal data is
                                        encrypted and stored securely.
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
