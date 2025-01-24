import { cn } from "@/lib/utils";
import React from "react";

interface GlidingButtonProps {
    children: React.ReactNode;
    className?: string;
}

const GlidingButton: React.FC<GlidingButtonProps> = ({ children, className }) => {
  return (
    <button className={cn(
        "self-center px-10 py-3 bg-black hover:bg-black/70 relative rounded-lg group overflow-hidden", 
        className
    )}>
      <div className="absolute top-[1.5px] left-[1px]  right-[1px] w-full h-full bg-black border-t rounded-lg  group-active:top-[0.5px]"></div>
      <div className="w-[40px] h-[110px] bg-white/20 absolute top-[-10px] left-[-80px] group-hover:left-[130%] button-hover-effect"></div>
      <h2 className="relative z-10 text-white">
        {children} 
        </h2>
    </button>
  );
};

export default GlidingButton;
