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
import { LogOut, LucideBell, Settings } from "lucide-react";
import { useAuthStore } from "@/stores/useAuthStore";
import { useQueryClient } from "@tanstack/react-query";
import { useLogout } from "@/api/mutations";
import { useNavigate } from "react-router";
import { useAnnouncementStore } from "@/stores/announcementStore";

const Navbar: React.FC = () => {
  const { logout, user } = useAuthStore.getState();
  const navigate = useNavigate();
  const { setIsOpen } = useAnnouncementStore();
  const queryClient = useQueryClient();
  const { mutate } = useLogout();
  return (
    <div className="px-5 py-4 border-b flex items-center justify-between sticky top-0 right-0 bg-white z-30">
      <div className="flex items-center gap-2">
        <Logo icon />
      </div>

      <div className="flex items-center gap-5">
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer" asChild>
            <div className="relative w-full text-center overflow-hidden px-4 py-1.5 rounded-full bg-green-700 shadow-md shadow-green-700 flex items-center gap-2 text-xs text-white font-bold border-[2px] border-green-900 hover:scale-[1.05] transition-all duration-500">
              <span className="relative z-[1]">Specials</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-600 via-green-900 to-green-600 blur-md"></span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => navigate("/courses")}>
              <div className="relative w-full text-center overflow-hidden px-4 py-1.5 rounded-full bg-secondary shadow-md shadow-secondary flex items-center gap-2 text-xs text-secondary-foreground font-bold border-[2px] border-orange-400 hover:scale-[1.05] transition-all duration-500">
                <span className="relative z-[1]">Free Courses</span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-300 via-orange-700 to-orange-300 blur-md"></span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/giveaway")}>
              <div className="relative w-full text-center overflow-hidden px-4 py-1.5 rounded-full bg-primary shadow-md shadow-primary flex items-center gap-2 text-xs text-white font-bold border-[2px] border-blue-800 hover:scale-[1.05] transition-all duration-500">
                <span className="relative z-[1]">Giveaway</span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-900 to-blue-600 blur-md"></span>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div
          onClick={() => setIsOpen(true)}
          className="relative p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 cursor-pointer group"
        >
          <LucideBell className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-red-500 ring-2 ring-white animate-pulse">
            <span className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-75"></span>
          </span>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer" asChild>
            <div className="flex gap-1 items-center ">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-lg uppercase">
                {user?.username[0]}
              </div>
              <h2></h2>
              {/* <ChevronDownCircleIcon
                size={20}
                className="text-foreground/60 "
              /> */}
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/settings")}>
              <Settings />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                document.cookie = "";
                mutate(undefined, {
                  onSuccess: (data) => {
                    console.log(data);
                    queryClient.invalidateQueries({ queryKey: ["user"] });
                  },
                });
                logout();
              }}
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
