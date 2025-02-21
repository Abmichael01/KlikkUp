import Navbar from "@/components/Admin/Header/Navbar";
import Sidebar from "@/components/Admin/Header/Sidebar";
import React from "react";
import { Outlet } from "react-router";
const AdminLayout: React.FC = () => {
  return (
      <div className="flex relative">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className=" sm:p-6 pb-40 p-3 space-y-6  min-h-screen w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
