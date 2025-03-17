import Navbar from "@/components/Dashboard/Header/Navbar";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import Taskbar from "@/components/Dashboard/Taskbar/Taskbar";
import React from "react";
import { Outlet } from "react-router";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex relative bg-gray-100 dark:bg-gray-800">
      <Sidebar />
      <Taskbar />
      <div className="flex-grow">
        <Navbar />
        <div className="p-2 sm:p-5 ">
          <Outlet />
        </div>
        <div className="h-24 w-full"></div>
      </div>
      
    </div>
  );
};

export default DashboardLayout;