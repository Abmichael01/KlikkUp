import Logo from "@/components/Logo/Logo";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/stores/sidebarStore";
import { BookOpen, ClipboardList, Gift, LayoutDashboard, Ticket, Users, Waypoints } from 'lucide-react';
import React from "react";
import { Link, useLocation } from "react-router"; // Note: Changed to react-router-dom

const navs = [
  { icon: LayoutDashboard, name: "Dashboard", path: "/admin/dashboard" },
  { icon: Users, name: "Users", path: "/admin/users" },
  { icon: Ticket, name: "Coupon", path: "/admin/coupon" },
  { icon: ClipboardList, name: "Tasks", path: "/admin/tasks" },
  { icon: BookOpen, name: "Stories", path: "/admin/stories" },
  { icon: Gift, name: "Airdrop", path: "/airdrop" },
  { icon: Waypoints, name: "Roadmap", path: "/roadmap" },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  const isOpen = useSidebarStore((state) => state.isOpen);

  return (
    <div
      className={cn(
        "lg:border-r h-[100vh] flex-col py-5 bg-white items-center gap-10 px-3 lg:sticky fixed flex-shrink-0 top-0 right-[-300px] lg:left-0 transition-all duration-500 flex z-[5] border-l",
        isOpen ? "w-[200px] right-0" : "w-[70px] right-[-300px]"
      )}
    >
      <div className="flex items-center gap-3 w-full relative z-[1]">
        <div className="flex-shrink-0">
          <Logo icon size={40} />
        </div>
        <div
          className={cn(
            "flex flex-col text-gray-600 transition-opacity duration-500",
            isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"
          )}
        >
          <h1 className="text-xl font-semibold fancy-font whitespace-nowrap">KlikkUp</h1>
          <p className="text-sm text-gray-500 whitespace-nowrap">Admin Panel</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center w-full">
        {navs.map((nav, index) => (
          <Link
            to={nav.path}
            key={index}
            className={cn(
              "flex items-center gap-4 w-full py-3 px-3 rounded-lg hover:bg-gray-200 cursor-pointer overflow-hidden",
              nav.path.includes(location.pathname) &&
                "bg-primary text-white hover:bg-primary/90"
            )}
          >
            <div className="flex-shrink-0">
              <nav.icon className="w-5 h-5" />
            </div>
            <p
              className={cn(
                "transition-opacity duration-500 text-sm font-medium whitespace-nowrap",
                isOpen ? "opacity-100 w-auto" : "opacity-0 w-0 overflow-hidden"
              )}
            >
              {nav.name}
            </p>
          </Link>
        ))}
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-[-1]">

        </div>
      )}
    </div>
  );
};

export default Sidebar;