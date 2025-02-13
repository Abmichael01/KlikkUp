import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownCircleIcon, LogOut, SidebarClose, SidebarOpen, User } from "lucide-react";
import { useSidebarStore } from "@/stores/sidebarStore";
import { useLogout } from "@/api/mutations";
import { useAuthStore } from "@/stores/useAuthStore";
import { useNavigate } from "react-router";

const Navbar: React.FC = () => {
  const toggle = useSidebarStore((state) => state.toggle);
  const isOpen = useSidebarStore((state) => state.isOpen);
  const { mutate } = useLogout()
  const { logout, user } = useAuthStore()
  const navigate = useNavigate();

  const logoutUser = () => {
    mutate(undefined, {
      onSuccess: () => {
        logout()
        navigate("/auth/login", { replace: true })
      }
    })
  }


  return (
    <div className="px-5 py-5 border-b flex items-center justify-between sticky top-0 right-0 bg-white z-30">
      <div className="flex items-center gap-2 cursor-pointer" onClick={toggle}>
        {isOpen? <SidebarClose size={24} /> : <SidebarOpen size={24} />}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer" asChild>
          <div className="flex gap-2 items-center ">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold">
              {user && user.username[0].toUpperCase()}
            </div>
            <h2>{user && user.username}</h2>
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
          <DropdownMenuItem onClick={logoutUser}>
            <LogOut />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navbar;
