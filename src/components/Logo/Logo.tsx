import { cn } from "@/lib/utils";
import React from "react";
import logoImg from "@/assets/icons/logo.svg";
import { Link } from "react-router";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" className="flex items-center gap-1 text-2xl fancy-font">
      <img src={logoImg} alt="logo" className="w-[28px] h-[28px]" />
      <span className={cn("font-bold text-primary", className)}>
        KlikkUp
      </span>
    </Link>
  );
};

export default Logo;
