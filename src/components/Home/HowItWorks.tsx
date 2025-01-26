import MainPadding from "@/layouts/MainPadding";
import { Check } from "lucide-react";
import React from "react";

const steps = [
  "Sign up and get a bonus of 500 points.",
  "Complete tasks (reading, watching, engaging).",
  "Earn points.",
  "Convert points into tokens.",
  "Withdraw or use tokens in the ecosystem."
];

const HowItWorks: React.FC = () => {
  return (
    <MainPadding className="flex flex-col items-center justify-center bg-primary py-20">
      <h2 className=" text-2xl md:text-4xl text-center text-white fancy-font font-bold w-full">
        Here is How it works
      </h2>
      <div className="flex flex-col gap-6  mt-6 w-fit">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex gap-3 items-center "
          >
            <div className="rounded-full bg-white text-primary p-3">
              <Check size={17} />
            </div>
           <p className="text-lg">{step}</p>
          </div>
        ))}
      </div>
    </MainPadding>
  );
};

export default HowItWorks;
