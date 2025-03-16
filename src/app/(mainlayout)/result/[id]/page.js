"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { aiAction, submitFeedback, clearResult, getFeedback } from "./action";
import FeedbackModal from "../_components/feedback";

export default function Page() {
    const router = useRouter();
    const { id } = useParams();

    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userRating, setUserRating] = useState(0);
    const [hasRated, setHasRated] = useState(false);

    const [starRating, setStarRating] = useState(0);

    const fetchFeedback = async () => {
        try {
            const feedbackResponse = await getFeedback(id);
            if (feedbackResponse.success && feedbackResponse.feedback) {
                setUserRating(feedbackResponse.feedback.rating);
                setStarRating(feedbackResponse.feedback.rating);
                setHasRated(true);
                return true;
            }
            return false;
        } catch (feedbackErr) {
            return false;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await aiAction(id);

                if (response.error) {
                    setError(response.message);
                } else {
                    setResult(response);
                    await fetchFeedback();
                }
            } catch (err) {
                setError("Failed to load results. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const handleFeedbackSubmit = async (rating, comment, likeScore) => {
        try {
            const response = await submitFeedback(
                id,
                rating,
                comment,
                likeScore
            );

            if (response.success) {
                setUserRating(rating);
                setStarRating(rating);
                setHasRated(true);
                setIsModalOpen(false);
            } else {
                throw new Error(response.message);
            }
        } catch (err) {
            alert("Failed to submit feedback. Please try again.");
        }
    };

    const handleClearResult = async () => {
        if (window.confirm("Are you sure you want to clear this result?")) {
            try {
                const response = await clearResult(id);
                if (response.success) {
                    router.push("/input");
                }
            } catch (err) {
                console.log("Failed to clear result:", err);
            }
        }
    };

    const renderStars = (rating) => {
        return Array(5)
            .fill()
            .map((_, i) => (
                <span
                    key={i}
                    className={`text-2xl ${
                        i < rating ? "text-yellow-400" : "text-gray-400"
                    }`}
                >
                    ★
                </span>
            ));
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                <p className="mt-4 text-white">Analyzing your health data...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-full text-white">
                <h2 className="text-xl font-bold mb-4">Something went wrong</h2>
                <p>{error}</p>
                <button
                    onClick={() => router.push("/")}
                    className="mt-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                >
                    Go back
                </button>
            </div>
        );
    }

    if (!result) {
        return null;
    }

    let parsedDiseaseRisks;

    try {
        parsedDiseaseRisks = JSON.parse(result.diseaseRisk);
        if (typeof parsedDiseaseRisks === "string") {
            parsedDiseaseRisks = JSON.parse(parsedDiseaseRisks);
        }
    } catch (error) {
        parsedDiseaseRisks = [];
    }

    return (
        <div className="flex flex-col w-full h-full text-white">
            <div className="flex flex-col justify-between pr-4 h-full">
                <div className="">
                    <h2 className="text-2xl font-bold mb-4">
                        {result.title || "Here's the Result"}
                    </h2>

                    <div>
                        <div className="bg-gradient-to-r to-indigo-950 from-violet-950 rounded-md p-6 mb-4 border-l-4 border-indigo-500 shadow-lg">
                            <h3 className="text-xl font-bold mb-3 text-indigo-300">
                                Health Assessment
                            </h3>
                            <div className="text-white leading-relaxed">
                                {result.roastComment
                                    .split(". ")
                                    .map((sentence, index) =>
                                        sentence.trim() ? (
                                            <p key={index} className="mb-2">
                                                {sentence.trim() +
                                                    (sentence.endsWith(".")
                                                        ? ""
                                                        : ".")}
                                            </p>
                                        ) : null
                                    )}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="md:col-span-2 bg-gradient-to-r to-indigo-950 from-violet-950 rounded-md p-5 shadow-md border-l-4 border-violet-500">
                                <h3 className="text-lg font-bold mb-3 text-purple-300">
                                    Disease Risk:
                                </h3>
                                <div className="text-white">
                                    {parsedDiseaseRisks &&
                                    parsedDiseaseRisks.length > 0 ? (
                                        <ul className="ml-4 space-y-2">
                                            {parsedDiseaseRisks?.map(
                                                (risk, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex items-start"
                                                    >
                                                        <span className="inline-block mr-2 text-violet-400">
                                                            •
                                                        </span>
                                                        <span className="text-gray-100">
                                                            Type: {risk.type} ,
                                                            Percentage :{" "}
                                                            {risk.percentage}%
                                                        </span>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    ) : (
                                        <p className="ml-4 text-gray-400">
                                            No specific disease risks identified
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="bg-indigo-950 rounded-md p-5 flex flex-col items-center justify-center shadow-md border-t-4 border-emerald-500">
                                <h3 className="text-lg font-bold mb-3 text-emerald-300">
                                    Life expectancy
                                </h3>
                                <div className="text-7xl font-bold text-white">
                                    {result.lifeExpectancy}
                                </div>
                                <div className="text-green-300 text-sm mt-2">
                                    years
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r to-indigo-950 from-violet-950 rounded-md p-6 mb-6 shadow-lg border-l-4 border-amber-500">
                            <h3 className="text-xl font-bold mb-3 text-amber-300">
                                Recommendation
                            </h3>
                            <div className="text-white leading-relaxed">
                                {result.recommendation
                                    .split(". ")
                                    .map((sentence, index) =>
                                        sentence.trim() ? (
                                            <p key={index} className="mb-2">
                                                <span className="text-yellow-400">
                                                    ✓
                                                </span>{" "}
                                                {sentence.trim() +
                                                    (sentence.endsWith(".")
                                                        ? ""
                                                        : ".")}
                                            </p>
                                        ) : null
                                    )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center bg-indigo-950 rounded-md p-5 shadow-md">
                    <div className="flex items-center mb-4 sm:mb-0">
                        <div className="flex items-center">
                            {renderStars(starRating)}
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md font-medium transition duration-200 ease-in-out transform hover:scale-105"
                        >
                            {hasRated ? "Update rating" : "Rate result"}
                        </button>
                        <button
                            onClick={handleClearResult}
                            className="px-5 py-2 bg-rose-600 hover:bg-rose-500 rounded-md font-medium transition duration-200 ease-in-out transform hover:scale-105"
                        >
                            Clear result
                        </button>
                    </div>
                </div>
            </div>

            <FeedbackModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleFeedbackSubmit}
                initialRating={userRating}
            />
        </div>
    );
}
