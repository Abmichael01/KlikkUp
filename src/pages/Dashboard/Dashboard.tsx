import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import CircleWave from "@/components/CircleWave";
import TypewriterComp from "@/components/Typewriter";
import { Button } from "@/components/ui/button";
import { CopyIcon } from "lucide-react";

const waysToEarn = [
  "Welcome Back!",
  "Complete tasks and earn rewards",
  "Invite your friends and family",
  "Read stories to earn more points",
  "Of course, airdrop awaits you",
  "Start eaning now for the future!",
];

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <div className="max-w-full h-fit rounded-2xl border shadow-xl p-6 flex justify-between items-center relative overflow-hidden">
          <CircleWave className="top-1/2 left-1/2 translate-x-[-50%] rotate-180 translate-y-[-50%] absolute scale-[0.5] md:scale-100" />
          <div className="flex flex-col gap-3 md:flex-row justify-between items-center w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl fancy-font text-wrap text-center md:text-start">
              <TypewriterComp array={waysToEarn} />
            </h2>

            <DotLottieReact
              src="/lottiefiles/wave.json"
              loop
              autoplay
              className=" w-[300px]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 gap-10">
          <div className="bg-primary/40 w-full rounded-xl p-5 flex flex-col gap-3 shadow-lg">
            <h2 className="text-xl font-bold">My referral code</h2>
            <div className="flex justify-between gap-2">
              <input
                type="text"
                value="Your_Referral_Code"
                className="border p-2 rounded-md w-full"
              />
              <Button variant={"outline"} className="">
                <CopyIcon />
              </Button>
            </div>
          </div>

          <div className="bg-primary/40 w-full rounded-xl p-5 flex flex-col gap-3 shadow-lg">
            <h2 className="text-xl font-bold">My Points</h2>
            <div className="flex justify-between gap-2 text-3xl">
                <h1>120, 000 <span className="text-sm font-semibold">Klikks</span></h1>
            </div>
          </div>

          <div className="bg-primary/40 w-full rounded-xl p-5 flex flex-col gap-3 shadow-lg">
            <h2 className="text-xl font-semibold">Tasks Completed</h2>
            <div className="flex justify-between gap-2 text-3xl">
                <h1>120 <span className="text-sm font-semibold">tasks</span></h1>
            </div>
          </div>

          <div className="bg-primary/40 w-full rounded-xl p-5 flex flex-col gap-3 shadow-lg">
            <h2 className="text-xl font-semibold">Days of active farming</h2>
            <div className="flex justify-between gap-2 text-3xl">
                <h1> 56 Days <span className="text-sm font-semibold">Streaks</span></h1>
            </div>
          </div>

          <div className="bg-primary/40 w-full rounded-xl p-5 flex flex-col gap-3 shadow-lg">
            <h2 className="text-xl font-semibold">Invites</h2>
            <div className="flex justify-between gap-2 text-3xl">
                <h1> 11 <span className="text-sm font-semibold">Invites</span></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
