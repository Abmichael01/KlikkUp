import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Button } from "../ui/button";
import { DollarSign, MousePointerClick } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row  gap-5 items-center justify-center py-10 text-foreground relative md:overflow-hidden">
      <div className="hidden w-[800px] h-[800px] border border-primary shadow-2xl shadow-primary/80 rounded-full md:flex items-center justify-center  absolute top-0 left-1/2 translate-x-[-50%] translate-y-[5%]  animate-pulse -z-10">
        <div className="w-[600px] h-[600px] border border-primary shadow-2xl shadow-primary/80 rounded-full flex items-center justify-center">
          <div className="w-[400px] h-[400px] border border-primary shadow-2xl shadow-primary/80 rounded-full flex items-center justify-center"></div>
        </div>
      </div>
      <div className="flex  text-center md:text-start flex-col lg:flex-col gap-3 text-wrap ">
        <h2 className="text-4xl lg:text-7xl font-bold font-exo fancy-font">
          Turn <br /> Your <span className="text-primary">Time</span> <br />{" "}
          Into <span className="text-primary">Rewards</span>{" "}
        </h2>
        <h3 className="text-lg text-wrap">
          Start Earning for the Future. Start farming for the biggest project to
          come
        </h3>
        <div className="flex flex-col sm:flex-row gap-5 items-center">
          <Button className="w-fit px-10">
            <MousePointerClick />
            Get Started Now!
          </Button>
          <Button
            variant={"outline"}
            className="w-fit px-10 border-primary text-primary hover:bg-primary/20 hover:text-primary "
          >
            <DollarSign />
            Buy Coupon
          </Button>
        </div>
      </div>
      <div className="sm:w-[700px] overflow-hidden flex">
        <DotLottieReact
          src="/lottiefiles/hero2.json"
          loop
          autoplay
          className=" w-full lg:w-[800px]"
        />
      </div>
    </div>
  );
};

export default Hero;
