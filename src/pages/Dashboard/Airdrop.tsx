import React from "react";
import partyEmoji from "@/assets/images/partyEmoji.png";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import CircleWave from "@/components/CircleWave";

const Airdrop: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="bg-primary/50 px-10 py-14 border shadow-lg rounded-xl flex flex-col md:flex-row justify-between items-center gap-10 relative overflow-hidden">
        <CircleWave className="rotate-180" />
        <h2 className=" fancy-font text-4xl text-center md:text-start md:text-5xl leading-tight">
          The NEXT <span className="text-white">AIRDROP</span> IS ON THE 21ST OF
          MAY, 2025
        </h2>
        <img src={partyEmoji} alt="" className="w-full md:w-[300px]" />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl fancy-font font-semibold text-primary">
          Continue to farm
        </h2>
        <DotLottieReact
          src="/lottiefiles/hammer.json"
          loop
          autoplay
          className="w-full lg:w-[600px]"
        />
        <h2 className="text-2xl font-bold text-center">
          You can decide to keep your points until the future project is
          revealed
        </h2>
      </div>
    </div>
  );
};

export default Airdrop;
