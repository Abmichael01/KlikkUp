import React from "react";
import CircleWave from "../CircleWave";
import { cn } from "@/lib/utils";

interface BannerProps {
    className?: string;
    children?: React.ReactNode;
} 

const Banner: React.FC<BannerProps> = ({ 
    className = "",
    children
 }) => {
  return (
    <div className={cn(
        "flex justify-center items-center gap-3 p-5 py-20 border-primay border shadow-lg rounded-xl bg-primary/70 relative overflow-hidden",
        className
    )}>
      <CircleWave className="rotate-180" />
      {children}
    </div>
  );
};

export default Banner;
