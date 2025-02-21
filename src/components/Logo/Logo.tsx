import { cn } from "@/lib/utils";
import React from "react";
import logoImg from "@/assets/icons/logo.svg";
import logo2Img from "@/assets/icons/logo2.svg";
import { Link } from "react-router";

interface LogoProps {
  className?: string;
  white?: boolean;
  icon?: boolean;
  size?: number;
  noLink?: boolean
}

const Logo: React.FC<LogoProps> = ({ className, white, icon, size, noLink }) => {
  icon = white ? true : icon;
  return (
    <Link to={noLink ? "#" : "/"} className={cn(className, "flex items-center gap-1 text-2xl fancy-font")}>
      {white 
      ? <img src={logo2Img} alt="logo" width={size ? size : 40} height={size ? size : 40} />
      : <img src={logoImg} alt="logo" width={size ? size : 40} height={size ? size : 40} />
    }
      {!icon && (
        <span className={cn("font-bold text-primary", className)}>KlikkUp</span>
      )}
    </Link>
  );
};

export default Logo;
