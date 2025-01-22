import React from "react";
import Logo from "@/components/Logo/Logo";

const Navbar: React.FC = () => {
  return (
    <div className="px-5 py-5 border-b flex items-center justify-between sticky top-0 right-0 bg-white z-30">
      <div className="flex items-center gap-2">
        <Logo />
      </div>
      <div className="flex gap-2 items-center ">
        <div className="w-10 h-10 rounded-full bg-gray-300"></div>
        <h2>Urkelcodes</h2>
      </div>
    </div>
  );
};

export default Navbar;
