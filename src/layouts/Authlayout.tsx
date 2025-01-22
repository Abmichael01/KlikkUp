import CircleWave from "@/components/CircleWave";
import Logo from "@/components/Logo/Logo";
import React from "react";
import { Outlet } from "react-router";

const Authlayout: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-[100vh] h-[100vh] overflow-hidden">
      <div className="relative w-1/2 hidden justify-center items-center md:flex">
        <CircleWave className="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] scale-[0.7] md:scale-100" />
        <div className="scale-[4] sm:scale-[2.5]">
            <Logo />
        </div>
      </div>
      <div className="flex-grow h-full bg-white backdrop-blur-sm flex justify-center items-center sm:px-20 min-[500px]:px-14 px-5">
        <Outlet />
      </div>
    </div>
  );
};

export default Authlayout;
