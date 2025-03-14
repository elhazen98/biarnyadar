import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { prisma } from "@/utils/prisma";
import { ExampleCard } from "./exampleCard";

export const ExampleCarousel = async () => {
    const firstExample = await prisma.result.findUnique({
        where: {
            id: "7f726f4f-80dd-468c-9de1-32720ee7eeba",
        },
    });
    const secondExample = await prisma.result.findUnique({
        where: {
            id: "b9e2e28b-a082-42d9-a4f5-bead47679d4c",
        },
    });
    const thirdExample = await prisma.result.findUnique({
        where: {
            id: "d0554c75-52b5-4c7a-be39-1c5396dea7a0",
        },
    });

    const firstDiseaseRisk = JSON.parse(firstExample.diseaseRisk);
    const secondDiseaseRisk = JSON.parse(secondExample.diseaseRisk);
    const thirdDiseaseRisk = JSON.parse(thirdExample.diseaseRisk);

    return (
        <Carousel>
            <CarouselContent>
                <CarouselItem>
                    <ExampleCard
                        title={firstExample.title}
                        roastComment={firstExample.roastComment}
                        lifeExpectancy={firstExample.lifeExpectancy}
                        firstDiseaseRisk={firstDiseaseRisk}
                    />
                </CarouselItem>
                <CarouselItem>
                    <ExampleCard
                        title={secondExample.title}
                        roastComment={secondExample.roastComment}
                        lifeExpectancy={secondExample.lifeExpectancy}
                        firstDiseaseRisk={secondDiseaseRisk}
                    />
                </CarouselItem>
                <CarouselItem>
                    <ExampleCard
                        title={thirdExample.title}
                        roastComment={thirdExample.roastComment}
                        lifeExpectancy={thirdExample.lifeExpectancy}
                        firstDiseaseRisk={thirdDiseaseRisk}
                    />
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};
