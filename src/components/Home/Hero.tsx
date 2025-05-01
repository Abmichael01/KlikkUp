import type React from "react";
import { MousePointerClick, ArrowRight } from "lucide-react";
import GlidingButton from "../ui/GlidingButton";
import MainPadding from "@/layouts/MainPadding";
import { Link } from "react-router";

const Hero: React.FC = () => {
  return (
    <MainPadding className="relative py-20 overflow-hidden bg-primary text-primary-foreground">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[800px] h-[800px] border-2 border-primary-foreground/20 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse opacity-20"></div>
        <div className="absolute w-[600px] h-[600px] border-2 border-primary-foreground/30 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse opacity-30 animation-delay-1000"></div>
        <div className="absolute w-[400px] h-[400px] border-2 border-primary-foreground/40 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse opacity-40 animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
        id="hero"
      >
        <h1 className="text-6xl sm:text-7xl font-bold font-exo mb-6 leading-tight">
          Turn Your <span className="text-foreground">Time</span> Into{" "}
          <span className="text-foreground">Rewards</span>
        </h1>
        <p className="text-xl mb-8 text-primary-foreground/80 max-w-2xl">
          Earn Points. Unlock Your Gaming Power. Testing Auto deployment haaha again
        </p>
        <div className="flex flex-col items-center sm:flex-row gap-4 justify-center">
          <Link to="/auth/register">
            <GlidingButton className="px-8 py-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground  font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">
              <MousePointerClick className="mr-2" />
              Get Started Now!
            </GlidingButton>
          </Link>
          <Link to="/auth/login">
            <GlidingButton className="px-8 py-3 text-primary-foreground font-semibold transition-all duration-300 ease-in-out transform hover:scale-105">
              Login Now
              <ArrowRight className="ml-2" />
            </GlidingButton>
          </Link>
        </div>
      </div>
    </MainPadding>
  );
};

export default Hero;
