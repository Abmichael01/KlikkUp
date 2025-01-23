import { cn } from "@/lib/utils";
import {
    BookOpen,
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
  { icon: <ListCheck />, name: "Tasks", path: "/tasks?tab=new-tasks" },
  { icon: <BookOpen />, name: "Stories", path: "/stories?tab=new-stories" },
  { icon: <Gift />, name: "Airdrop", path: "/airdrop" },
  { icon: <Waypoints />, name: "Roadmap", path: "/roadmap" },
];

const Taskbar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-full fixed border-t py-5 bg-white gap-6 items-center justify-between px-6 bottom-0 left-0 flex md:hidden z-40">
      {navs.map((nav, index) => (
        <Link
            to={nav.path}
          key={index}
          className={cn(
            "flex items-center gap-2 w-fit hover:text-primary/70 rounded-lg cursor-pointer overflow-hidden",
            nav.path.includes(location.pathname) &&
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
