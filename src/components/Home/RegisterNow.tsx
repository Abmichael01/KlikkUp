import { Check, MousePointerClick } from "lucide-react";
import React from "react";

const reasons = [
  "Have fun klikking",
  "Earn rewards for your time",
  "Share and invite",
  "Receive Airdrop",
];

const RegisterNow = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 py-20 border-y">
      <div className="text-center flex items-center justify-center w-full md:w-1/2 fancy-font text-3xl md:text-5xl">
        <div className="flex flex-col gap-2 md:gap-5 md:items-start justify-center">
          <h1>Register Now </h1>
          <h1 className="text-primary flex justify-center"> <MousePointerClick /> Klikk</h1>
          <h1>Receive Airdrop</h1>
        </div>
      </div>
      <div className="flex flex-col gap-5 items-start justify-center w-full  md:w-1/2">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex gap-5 items-center pb-4 border-b shadow-lg rounded-xl px-5 w-full"
          >
            <div className="bg-primary rounded-full p-3 text-white">
              <Check />
            </div>
            <h2 className=" text-xl">{reason}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegisterNow;
