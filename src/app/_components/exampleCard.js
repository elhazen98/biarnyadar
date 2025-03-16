import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export const ExampleCard = ({
    title,
    roastComment,
    lifeExpectancy,
    firstDiseaseRisk,
}) => {
    return (
        <Card className="bg-gradient-to-r from-indigo-900 to-violet-900 border-none">
            <CardContent>
                <div className="flex justify-center items-center flex-col space-y-6">
                    <h2 className="text-white font-bold text-2xl">{title}</h2>
                    <div className="grid grid-cols-3 grid-rows-2 gap-4">
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/20 shadow-md col-span-2 row-span-2">
                            <div className="flex items-center mb-4">
                                <p className="flex text-white font-bold items-center text-xl">
                                    Comment
                                </p>
                            </div>
                            <p className="text-white text-lg">{roastComment}</p>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/20 shadow-md flex flex-col items-center">
                            <div className="flex items-center mb-4">
                                <div className="text-white font-bold w-full text-center text-xl">
                                    Life Expectancy
                                </div>
                            </div>
                            <div className="text-white text-8xl w-full text-center font-bold">
                                {lifeExpectancy}
                            </div>
                            <div className="text-white">Years</div>
                        </div>
                        <div className="p-6 rounded-2xl bg-white/5 border border-white/20 shadow-md flex flex-col items-center">
                            <div className="flex items-center mb-4">
                                <p className="text-white font-bold items-center text-xl">
                                    Disease Risk
                                </p>
                            </div>
                            <div className="text-white">
                                {firstDiseaseRisk.map((disease) => {
                                    return (
                                        <div key={disease.type}>
                                            💊 {disease.type}:{" "}
                                            {disease.percentage} %
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
