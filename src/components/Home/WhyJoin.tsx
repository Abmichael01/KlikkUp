import MainPadding from "@/layouts/MainPadding";
import { Check, ChevronRightCircleIcon } from "lucide-react";
import React from "react";

const whys = [
  "A simple and user friendly platform",
  "Enjoy contents while earning points",
  "Future investment",
  "Your time and engagement are valued",
];

const WhyJoin: React.FC = () => {
  return (
    <MainPadding className="flex flex-col items-center gap-10 py-20">
      <h1 className="text-3xl md:text-4xl font-semibold text-center">
        Why <span className="text-primary">Join</span> Klikk Up
      </h1>
      <div className="flex flex-col gap-6 w-full md:w-1/2">
        {whys.map((why, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 w-full"
          >
            <div className="p-3 rounded-full text-white bg-primary flex items-center justify-center">
              <ChevronRightCircleIcon className="w-8 h-8" />
            </div>
            <h2 className="px-4 py-3 md:px-8 md:py-4 border w-full shadow-lg text-base md:text-lg lg:text-xl rounded-xl text-center md:text-left">
              {why}
            </h2>
          </div>
        ))}
      </div>
    </MainPadding>
  );
};

export default WhyJoin;
