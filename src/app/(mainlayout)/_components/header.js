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
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <div className="flex space-x-2 items-center">
                        <div className="text-right">
                            <div>{name}</div>
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
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <LogoutButton />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    );
};
