import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";

export default function Home() {
    return (
        <div>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">
                Click me
            </Button>
            <Slider defaultValue={[33]} max={100} step={1} />
            <Input />
        </div>
    );
}
