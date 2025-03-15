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
import { useAuthStore } from "@/stores/useAuthStore";

const Navbar: React.FC = () => {
  const { logout } = useAuthStore.getState()
  return (
    <div className="px-5 py-4 border-b flex items-center justify-between sticky top-0 right-0 bg-white z-30">
      <div className="flex items-center gap-2">
        <Logo icon />
      </div>

      <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer" asChild>
          <div className="flex gap-1 items-center ">
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg">U</div>
            <h2></h2>
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
          <DropdownMenuItem 
            onClick={logout}
          >
            <LogOut />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
