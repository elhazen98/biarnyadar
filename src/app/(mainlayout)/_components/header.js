import Avatar from "boring-avatars";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
export const Header = ({ name, email }) => {
    return (
        <header className="w-full p-4 flex justify-between bg-gray-900 text-white">
            <div
                className={`flex items-center ${montserrat.className} text-2xl`}
            >
                biar<span className="font-bold">nyadar</span>
            </div>
            <div className="flex space-x-2 items-center">
                <div className="text-right">
                    <div className="font-bold">{name}</div>
                    <div>{email}</div>
                </div>
                <Avatar
                    name={name}
                    size={40}
                    colors={[
                        "#fb6900",
                        "#f63700",
                        "#004853",
                        "#007e80",
                        "#00b9bd",
                    ]}
                />
            </div>
        </header>
    );
};
