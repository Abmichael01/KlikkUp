import { cn } from "@/lib/utils";
import React from "react";

interface CircleWavaProps {
    className?: string
}


const CircleWave: React.FC<CircleWavaProps> = ({ className }) => {
  return (
    <div>
      <div className={cn(
        "w-[800px] h-[800px] border border-primary shadow-2xl shadow-primary/80 rounded-full flex items-center justify-center  absolute top-0 left-1/2 translate-x-[-50%] translate-y-[5%]  animate-pulse -z-10",
        className
      )}>
        <div className="w-[600px] h-[600px] border border-primary shadow-2xl shadow-primary/80 rounded-full flex items-center justify-center">
          <div className="w-[400px] h-[400px] border border-primary shadow-2xl shadow-primary/80 rounded-full flex items-center justify-center"></div>
        </div>
      </div>
    </div>
  );
};

export default CircleWave;
