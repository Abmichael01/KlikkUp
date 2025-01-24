import CircleWave from "@/components/CircleWave";
import Logo from "@/components/Logo/Logo";
import React from "react";
import { Outlet } from "react-router";

const AuthLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-primary">
      {/* Left section */}
      <div className="relative w-1/2 flex-shrink-0 hidden md:flex overflow-hidden bg-white h-full justify-center items-center">
        <CircleWave className="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] scale-[0.7] md:scale-100 z-20" />
        <div className="scale-[2.5] sm:scale-[4]">
          <Logo />
        </div>
      </div>

      {/* Right section */}
      <div className="relative bg-primary flex-grow sm:px-20 min-[500px]:px-14 px-10 overflow-y-auto overflow-hidden pb-20">
        <div className="h-fit max-w-full">
          {/* Background gradient */}
          
            <div className="absolute top-0 right-[-50px] h-[60%] w-[100px] rotate-[40deg] bg-gradient-to-b from-white/80 to-primary z-0 auth-gradient"></div>
         

          {/* Form container */}
          <div className="relative z-10 mt-24">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
