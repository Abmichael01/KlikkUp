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
import { Link, useLocation } from "react-router"; // React Router's useLocation

const navs = [
  { icon: <HomeIcon />, name: "Dashboard", path: "/dashboard" },
  { icon: <UserPlus />, name: "Invite", path: "/invite" },
  { icon: <ListCheck />, name: "Tasks", path: "/tasks" },
  { icon: <File />, name: "Stories", path: "/stories" },
  { icon: <Gift />, name: "Airdrop", path: "/airdrop" },
  { icon: <Waypoints />, name: "Roadmap", path: "/roadmap" },
];

const Taskbar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-full fixed border-t py-5 bg-white gap-6 items-center justify-between px-2 bottom-0 left-0 flex md:hidden">
      {navs.map((nav, index) => (
        <Link
            to={nav.path}
          key={index}
          className={cn(
            "flex items-center gap-2 w-fit py-3 px-3 hover:text-primary/70 rounded-lg cursor-pointer overflow-hidden",
            location.pathname === nav.path &&
              "text-primary"
          )}
        >
          <div>{nav.icon}</div>
        </Link>
      ))}
    </div>
  );
};

export default Taskbar;
