import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Banner from "@/components/Dashboard/Banner";

const Airdrop: React.FC = () => {
  return (
    <div className="flex flex-col gap-10">
      <Banner>
        <h2 className=" fancy-font  text-center text-5xl leading-tight">
          The NEXT <span className="text-white">AIRDROP</span> IS ON THE 21ST OF
          MAY, 2025
        </h2>
      </Banner>

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
