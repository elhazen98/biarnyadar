import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-500 text-white">
      <div className="container mx-auto px-6 py-6 max-w-7xl">
        <header className="flex justify-between items-center py-4 mb-8 ">
          <div className="font-bold text-2xl bg-clip-text">biarnyadar.</div>
        </header>
        <section className="py-12 md:py-20 text-center">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-6 ">
            30 tahun lagi kamu masih hidup.
          </h1>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-10">
            Yakin?
          </h2>
          <Link href="/register">
            <Button className="rounded-full text-lg font-bold shadow-lg py-6 px-8 bg-gradient-to-r from-blue-900 to-gray-500 hover:brightness-150 animate-pulse">
              Try biarnyadar. Now
            </Button>
          </Link>
        </section>
        <section className="py-12 md:py-16 text-center">
          <h2 className="font-bold text-3xl text-center mb-10">Description</h2>
          <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-gray-500/20 rounded-2xl backdrop-blur-sm shadow-lg">
            <p className="text-lg leading-relaxed">
              biarnyadar.com is an AI-powered web application that analyzes your
              daily habits and health data to predict your life expectancy,
              potential disease risks, and suggest a healthier lifestyle. With a
              touch of sarcastic roasting, this app makes users aware of their
              unhealthy choices in a fun yet effective way.
            </p>
          </div>
        </section>
        <section className="py-12 md:py:16">
          <h2 className="font-bold text-3xl text-center mb-8">How To Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mr-6 flex items-start bg-gradient-to-r from-blue-900/20 to-gray-500/20 rounded-2xl backdrop-blur-sm shadow-lg p-6">
              <div className="rounded-full bg-gray-400 mr-4 w-10 h-10 flex justify-center items-center shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Create your Profile</h3>
                <p>sign-up for free account and gets the benefit</p>
              </div>
            </div>
            <div className="flex items-start mr-6 bg-gradient-to-r from-blue-900/20 to-gray-500/20 rounded-2xl backdrop-blur-sm shadow-lg p-6">
              <div className="rounded-full w-10 h-10 bg-gray-400 mr-4 flex justify-center items-center shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Filling Our Input Form
                </h3>
                <p>
                  Complete our detailed assessment about your lifestyle habits
                </p>
              </div>
            </div>
            <div className="mr-6 flex items-start bg-gradient-to-r from-blue-900/20 to-gray-500/20 p-6 rounded-2xl backdrop-blur-sm shadow-lg">
              <div className="mr-4 rounded-full w-10 h-10 bg-gray-400 flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Get your Result</h3>
                <p>see the sarcastic result from anything in your life</p>
              </div>
            </div>
            <div className="flex mr-6 rounded-2xl items-center bg-gradient-to-r from-blue-900/20 to-gray-500/20 p-6 backdrop-blur-sm shadow-lg">
              <div className="mr-4 rounded-full h-10 w-10 bg-gray-400 shrink-0 flex justify-center items-center">
                4
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Track Your Progress</h3>
                <p>
                  Monitor changes, update your information, save your history.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Examples</h2>
          <Card className="bg-gray-400/20 border-none rounded-2xl shadow-lg overflow-hidden backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex justify-center items-center flex-col space-y-6">
                <h2 className="text-white font-bold text-2xl">
                  What our AI looks like
                </h2>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 to-gray-400/20">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full p-6 mr-4"></div>
                    <div>
                      <p className="text-white font-bold">Sarcastic Mode</p>
                    </div>
                  </div>
                  <p className="text-white italic">
                    "Oh wow, look at you, a true pioneer of modern laziness!
                    Your diet is basically a science experiment gone wrong, and
                    your workout routine? Yeah, blinking doesn’t count as
                    cardio. With sleep patterns that scream ‘I have no idea what
                    circadian rhythm means,’ your body is basically running on
                    spite and caffeine at this point. But hey, who needs
                    longevity when you can have instant gratification and
                    chronic fatigue? Keep going like this, and your body might
                    just file for early retirement. But if—just if—you don’t
                    want your heart giving up on you like an old iPhone battery,
                    maybe try something radical, like drinking actual water or
                    walking further than the distance from your couch to the
                    fridge. Just a thought."
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-900/20 to-gray-400/20">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full p-6 mr-4"></div>
                    <div>
                      <p className="text-white font-bold">Humble Mode</p>
                    </div>
                  </div>
                  <p className="text-white italic">
                    "Hey, no judgment, but your body might appreciate a little
                    more love. Right now, it's running on low fuel, bad sleep,
                    and some questionable food choices, which might not be the
                    best long-term strategy. The good news? Small tweaks—like
                    drinking more water, getting a little movement in, and not
                    treating sleep like an optional side quest—can make a huge
                    difference. No need to overhaul everything overnight, just
                    start somewhere! Your future self will be very grateful."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="py-12 md:py-16">
          <h2 className="text-3xl font-bold text-center mb-8">Disclaimer</h2>
          <div className=" p-6 bg-gradient-to-r from-red-500/20 to-gray-500 rounded-2xl backdrop-blur-sm shadow-sm">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="rounded-full p-4 shrink-0 bg-red-900/60 flex justify-center items-center">
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
                  Biarnyadar provides predictions and assessments based on
                  statistical models and data analytics. These predictions are
                  not guaranteed and should not replace professional medical,
                  financial, or legal advice. Always consult with qualified
                  professionals for important life decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16">
          <h2 className="text-3xl text-center font-bold mb-8">
            Privacy Policy
          </h2>
          <div className="rounded-2xl bg-gradient-to-r from-blue-700/20 to-gray-500 p-6 shadow-lg backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="bg-blue-900/60 rounded-full p-4 shrink-0 flex justify-center items-center">
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
                  At Biarnyadar, we take your privacy seriously. All personal
                  data is encrypted and stored securely.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer className="py-8 mt-16 border-t border-white/20">
          <div className="text-center text-white">
            &copy; {new Date().getFullYear()} Biarnyadar. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
