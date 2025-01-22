import CircleWave from "@/components/CircleWave";
import Logo from "@/components/Logo/Logo";
import React from "react";
import { Outlet } from "react-router";

const Authlayout: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[100vh] h-[100vh] overflow-hidden">
      <div className="relative w-1/2 flex justify-center items-center">
        <CircleWave className="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
        <div className="scale-[4]">
            <Logo />
        </div>
      </div>
      <div className="w-1/2 h-full bg-white backdrop-blur-sm flex justify-center items-center px-20">
        <Outlet />
      </div>
    </div>
  );
};

export default Authlayout;
