import React from "react";
import Logo from "@/components/Logo/Logo";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownCircleIcon, LogOut, User } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <div className="px-5 py-5 border-b flex items-center justify-between sticky top-0 right-0 bg-white z-30">
      <div className="flex items-center gap-2">
        <Logo />
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer" asChild>
          <div className="flex gap-2 items-center ">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <h2>Urkelcodes</h2>
            <ChevronDownCircleIcon size={20} className="text-foreground/60 " />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <User />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LogOut />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
