import Navbar from "@/components/Dashboard/Header/Navbar";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import Taskbar from "@/components/Dashboard/Taskbar/Taskbar";
import React from "react";
import { Outlet } from "react-router";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex relative">
      <Sidebar />
      <Taskbar />
      <div className="flex-grow">
        <Navbar />
        <div className="p-5 pb-40">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
