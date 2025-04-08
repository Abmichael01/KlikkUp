import React from "react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";
import GradientCard from "@/components/ui/GradientCard";

const ReferralBonus: React.FC = () => {
  return (
    <GradientCard className="border-none bg-blue-950 text-white shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-secondary" />
          Referral Bonus
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg bg-blue-900/30 p-4 border border-white/5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
              <Trophy className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <p className="font-medium">Refer 50 users in a month</p>
              <p className="text-sm text-blue-300">
                and receive 100,000 Naira
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </GradientCard>
  );
};

export default ReferralBonus;
