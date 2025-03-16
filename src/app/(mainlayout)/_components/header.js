import Avatar from "boring-avatars";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutButton } from "./logout/logoutbutton";
import Image from "next/image";
import { BiChevronDown } from "react-icons/bi";

export const Header = ({ name, email }) => {
    return (
        <header className="w-full p-4 flex justify-between">
            <div className="text-2xl flex space-x-2 items-center">
                <Image
                    src="/biarnyadar.svg"
                    width={20}
                    height={20}
                    alt="biarnyadar logo"
                />
                biar<span className="font-bold">nyadar</span>
            </div>
            <DropdownMenu className>
                <DropdownMenuTrigger>
                    <div className="flex space-x-2 items-center">
                        <div className="text-right font-bold flex items-center">
                            <div>{name}</div>
                            <button>
                                <BiChevronDown size={24} />
                            </button>
                        </div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-4">
                    <DropdownMenuLabel className="flex justify-between items-center">
                        <div className="flex space-x-2 items-center mr-4">
                            <div className="">
                                <div className="font-bold">{name}</div>
                                <div>{email}</div>
                            </div>
                        </div>
                        <Avatar
                            name={name}
                            size={24}
                            colors={[
                                "#fb6900",
                                "#f63700",
                                "#004853",
                                "#007e80",
                                "#00b9bd",
                            ]}
                        />
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="flex bg-violet-500 justify-center text-slate-200 font-bold hover:bg-indigo-800 duration-150">
                        <LogoutButton />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
};
