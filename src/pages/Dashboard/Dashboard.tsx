import React from "react";
import TypewriterComp from "@/components/Typewriter";
import { Button } from "@/components/ui/button";
import { ClipboardListIcon, CopyIcon, Hammer, UserPlus } from "lucide-react";
import Banner from "@/components/Dashboard/Banner";

const waysToEarn = [
  "Welcome Back!",
  "Complete tasks and earn rewards",
  "Read stories to earn more points",
  "Start eaning now for the future!",
];

const Dashboard: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <Banner className="bg-primary/40">
          <h2 className="text-3xl sm:text-4xl md:text-5xl fancy-font text-wrap text-center md:text-start">
            <TypewriterComp array={waysToEarn} />
          </h2>
          
        </Banner>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-10">
          <div className="bg-primary/70 w-full rounded-xl p-5 py-10 flex flex-col gap-3 shadow-lg">
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

          <div className="bg-primary/70 w-full rounded-xl px-8 py-10 flex items-center justify-between gap-3 shadow-lg">
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold">My Points</h2>
              <div className="flex justify-between gap-2 text-3xl">
                <h1>
                  120, 000 <span className="text-sm font-semibold">Klikks</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-primary/70 w-full rounded-xl px-8 py-10 flex items-center justify-between gap-3 shadow-lg group">
            <ClipboardListIcon className="h-14 w-14 text-purple-900 group-hover:shake" />
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold">Tasks Completed</h2>
              <div className="flex justify-between gap-2 text-3xl">
                <h1>
                  120 <span className="text-sm font-semibold">tasks</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-primary/70 w-full rounded-xl px-8 py-10 flex items-center justify-between gap-3 shadow-lg group">
            <Hammer className="h-14 w-14 text-orange-900 group-hover:shake" />
            <div className="flex flex-col gap-3">
              <h2 className="text-xl font-bold">Streak</h2>
              <div className="flex justify-between gap-2 text-3xl">
                <h1>
                  {" "}
                  56 Days <span className="text-sm font-semibold">Streaks</span>
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-primary/70 w-full rounded-xl px-8 py-10 flex items-center justify-between gap-3 shadow-lg group">
            <UserPlus className="h-14 w-14 text-green-900 group-hover:shake" />
            <div>
              <h2 className="text-xl font-bold">Invites</h2>
              <div className="flex justify-between gap-2 text-3xl">
                <h1>
                  {" "}
                  11 <span className="text-sm font-semibold">Invites</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
