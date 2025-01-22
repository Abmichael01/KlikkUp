import Navbar from "@/components/Dashboard/Header/Navbar";
import Sidebar from "@/components/Dashboard/Sidebar/Sidebar";
import React from "react";
import { Outlet } from "react-router";

const DashboardLayout: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow">
        <Navbar />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
