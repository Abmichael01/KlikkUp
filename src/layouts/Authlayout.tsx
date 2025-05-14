import Logo from "@/components/Logo/Logo";
import { CardContent } from "@/components/ui/card";
import GradientCard from "@/components/ui/GradientCard";
import React from "react";
import { Outlet } from "react-router";

const AuthLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-primary">
      {/* Left section */}

      <GradientCard
        className="relative w-1/2 flex-shrink-0 hidden md:flex rounded-r-3xl border-0 bg-white h-full justify-center items-center border-r border-blue-300"
        bg="from-gray-900 via-gray-700 to-gray-900 "
      >
        <CardContent>
          <div className="text-8xl text-white mt-10">
            <p>Klikk.</p>
            <p>Earn..</p>
            <p>Repeat...</p>
          </div>
        </CardContent>
      </GradientCard>

      {/* Right section */}
      <div className="relative bg-primary flex-grow sm:px-20 md:px-10 lg:px-20 min-[500px]:px-14 px-10 overflow-y-auto overflow-hidden pb-20">
        <div className="h-fit max-w-full">
          {/* Background gradient */}

          <div className="absolute top-0 right-[-50px] h-[60%] w-[100px] rotate-[40deg] bg-gradient-to-b from-white/80 to-primary z-0 auth-gradient"></div>

          {/* Form container */}
          <div className="relative z-10 mt-24 flex flex-col gap-8 items-center ">
            <div className="scale-[2] bg-white rounded-full p-1">
              <Logo icon />
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
