import React from "react";
import TypewriterComp from "@/components/Typewriter";
import { Button } from "@/components/ui/button";
import { ClipboardListIcon, CopyIcon, Hammer, UserPlus } from "lucide-react";
import Banner from "@/components/Dashboard/Banner";

const waysToEarn = [
  "Welcome Back!",
  "Complete tasks and earn rewards",
  "Read stories to earn more points",
  "Start earning now for the future!",
];

const Dashboard: React.FC = () => {
  return (
    <div className="bg-primary text-white">
      <div className="flex flex-col gap-8">
        {/* Banner Section */}
        <Banner className="bg-white/10 border-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl fancy-font text-wrap text-center md:text-start">
            <TypewriterComp array={waysToEarn} />
          </h2>
        </Banner>

        {/* Stats Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Referral Code Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4">My Referral Code</h2>
            <div className="flex gap-2">
              <input
                type="text"
                value="Your_Referral_Code"
                className="border border-white/20 bg-white/10 text-white rounded-md p-2 flex-grow"
                readOnly
              />
              <Button
                variant={"outline"}
                className="hover:bg-white/20 text-secondary border-secondary"
              >
                <CopyIcon className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Points Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-bold mb-4">My Points</h2>
            <div className="text-3xl font-semibold">
              120,000 <span className="text-sm">Klikks</span>
            </div>
          </div>

          {/* Tasks Completed Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <ClipboardListIcon className="h-10 w-10 text-secondary" />
              <div>
                <h2 className="text-xl font-bold">Tasks Completed</h2>
                <div className="text-3xl font-semibold">
                  120 <span className="text-sm">tasks</span>
                </div>
              </div>
            </div>
          </div>

          {/* Streak Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <Hammer className="h-10 w-10 text-secondary" />
              <div>
                <h2 className="text-xl font-bold">Streak</h2>
                <div className="text-3xl font-semibold">
                  56 <span className="text-sm">Days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Invites Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="flex items-center gap-4">
              <UserPlus className="h-10 w-10 text-secondary" />
              <div>
                <h2 className="text-xl font-bold">Invites</h2>
                <div className="text-3xl font-semibold">
                  11 <span className="text-sm">Invites</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;