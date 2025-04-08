import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GradientCardProps {
    className?: string;
    children: React.ReactNode;
    bg?: string; // Optional prop for background color
}

const GradientCard: React.FC<GradientCardProps> = ({ bg, className, children, ...props }) => {
  return (
    <Card className={cn("relative overflow-hidden", className)} {...props}>
      {/* Gradient Background */}
      <div className={cn("absolute inset-0 bg-gradient-to-br from-blue-900 to-blue-950", bg)}>
        {/* Card Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg width="100%" height="100%" viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 0 10 L 40 10 M 10 0 L 10 40" stroke="white" strokeWidth="0.5" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="relative">{children}</div>
    </Card>
  );
};

export default GradientCard;
