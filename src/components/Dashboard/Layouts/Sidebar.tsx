import { cn } from "@/lib/utils";
import {
  BookOpen,
  ClipboardList,
  Gift,
  HomeIcon,
  UserPlus,
  Waypoints,
} from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router"; // React Router's useLocation

const navs = [
  { icon: HomeIcon, name: "Dashboard", path: "/dashboard" },
  { icon: UserPlus, name: "Invite", path: "/invite" },
  { icon: ClipboardList, name: "Tasks", path: "/tasks?tab=new-tasks" },
  { icon: BookOpen, name: "Stories", path: "/stories?tab=new-stories" },
  { icon: Gift, name: "Airdrop", path: "/airdrop" },
  { icon: Waypoints, name: "Roadmap", path: "/roadmap" },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-[61px] hover:w-[200px] border-r h-[100vh] flex-col gap-5 bg-blue- items-center justify-center px-2 sticky top-0 left-0 group transition-all duration-500 hidden md:flex">
      {navs.map((nav, index) => (
        <Link
          to={nav.path}
          key={index}
          className={cn(
            "flex items-center gap-2 w-full py-2 px-[12px] rounded-xl hover:bg-gray-100 cursor-pointer overflow-hidden",
            nav.path.includes(location.pathname) &&
              "bg-primary/20 text-blue-700 hover:bg-primary/20"
          )}
        >
        
          <div>
          <nav.icon className="size-5"  />
          </div>
          <p className="opacity-0 group-hover:opacity-100 transition-all">
            {nav.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
