import { cn } from "@/lib/utils";
import {
  File,
  Gift,
  HomeIcon,
  ListCheck,
  UserPlus,
  Waypoints,
} from "lucide-react";
import React from "react";
import { useLocation } from "react-router"; // React Router's useLocation

const navs = [
  { icon: <HomeIcon />, name: "Dashboard", path: "/dashboard" },
  { icon: <UserPlus />, name: "Invite", path: "/invite" },
  { icon: <ListCheck />, name: "Tasks", path: "/tasks" },
  { icon: <File />, name: "Stories", path: "/stories" },
  { icon: <Gift />, name: "Airdrop", path: "/airdrop" },
  { icon: <Waypoints />, name: "Roadmap", path: "/roadmap" },
];

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-[75px] hover:w-[200px] border-r h-[100vh] flex-col gap-6 items-center justify-center px-2 sticky top-0 left-0 group transition-all duration-500 hidden md:flex">
      {navs.map((nav, index) => (
        <div
          key={index}
          className={cn(
            "flex items-center gap-2 w-full py-3 px-4 rounded-lg hover:bg-gray-200 cursor-pointer overflow-hidden",
            location.pathname === nav.path &&
              "bg-primary text-white hover:bg-primary/90 "
          )}
        >
          <div>{nav.icon}</div>
          <p className="opacity-0 group-hover:opacity-100 transition-all">
            {nav.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
