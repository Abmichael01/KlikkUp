import { Check } from "lucide-react";
import React from "react";
import whyImg from "@/assets/images/why.png";

const whys = [
  "A simple and user friendly platform",
  "Enjoy contents while earning points",
  "Future investment",
  "Your time and engagement are valued",
];

const WhyJoin: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-semibold text-center">
        Why <span className="text-primary">Join</span> Klikk Up
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">
        <div className="md:flex flex-col items-center justify-center w-full md:w-1/2 hidden">
          <img src={whyImg} alt="Why Join" className="w-[200px] md:w-[300px] lg:w-[400px]" />
        </div>
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          {whys.map((why, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 w-full"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full text-white bg-primary flex items-center justify-center">
                <Check className="w-8 h-8 md:w-12 md:h-12" />
              </div>
              <h2 className="px-4 py-3 md:px-8 md:py-4 border shadow-lg text-base md:text-lg lg:text-xl rounded-xl text-center md:text-left">
                {why}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
