import MainPadding from "@/layouts/MainPadding";
import React from "react";

const Banner1: React.FC = () => {
  return (
    <MainPadding>
      <div className="bg-primary/80 backdrop-blur-md text-white text-center py-14 relative overflow-hidden rounded-xl px-4 sm:px-8">
        {/* Background Circle Effect */}
        <div className="w-[300px] sm:w-[500px] md:w-[700px] lg:w-[800px] rotate-180 h-[300px] sm:h-[500px] md:h-[700px] lg:h-[800px] border border-primary shadow-2xl shadow-primary/80 rounded-full flex items-center justify-center absolute top-0 left-1/2 translate-x-[-50%] translate-y-[5%] animate-pulse -z-10">
          <div className="w-[200px] sm:w-[400px] md:w-[600px] h-[200px] sm:h-[400px] md:h-[600px] border border-primary shadow-2xl shadow-primary/80 rounded-full flex items-center justify-center">
            <div className="w-[100px] sm:w-[300px] md:w-[400px] h-[100px] sm:h-[300px] md:h-[400px] border border-primary shadow-2xl shadow-primary/80 rounded-full"></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-5 items-center justify-center text-wrap">
          <div className="flex flex-col gap-5 items-center justify-center text-3xl sm:text-4xl md:text-5xl fancy-font">
            <h1>------- Klikk -------</h1>
            <h1>------- Earn Airdrop -------</h1>
            <h1>------- Repeat! -------</h1>
          </div>
          <h1 className="text-base sm:text-lg md:text-xl px-2">
            Don’t just consume content – get rewarded for it. Sign up and start
            farming now!
          </h1>
          <div className="flex flex-wrap gap-5 items-center justify-center">
            <button className="bg-white text-primary py-3 px-6 sm:px-8 md:px-10 rounded-full hover:bg-primary hover:text-white transition">
              Get Started Now!
            </button>
            <button className="bg-transparent text-white py-3 px-6 sm:px-8 md:px-10 border border-white rounded-full hover:bg-white hover:text-primary transition">
              Buy Coupon
            </button>
          </div>
        </div>
      </div>
    </MainPadding>
  );
};

export default Banner1;
