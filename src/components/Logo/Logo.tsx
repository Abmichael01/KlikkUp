import { cn } from "@/lib/utils";
import React from "react";
import logoImg from "@/assets/icons/logo.svg";
import logo2Img from "@/assets/icons/logo2.svg";
import { Link } from "react-router";

interface LogoProps {
  className?: string;
  white?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, white }) => {
  return (
    <Link to="/" className="flex items-center gap-1 text-2xl fancy-font">
      {white 
      ? <img src={logo2Img} alt="logo" className="w-[28px] h-[28px]" />
      : <img src={logoImg} alt="logo" className="w-[28px] h-[28px]" />
    }
      {!white && (
        <span className={cn("font-bold text-primary", className)}>KlikkUp</span>
      )}
    </Link>
  );
};

export default Logo;
