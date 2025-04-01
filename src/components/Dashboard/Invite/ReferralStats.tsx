import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { UserPlus, Trophy, Medal } from "lucide-react";
import {ReferralsData} from "@/types";

interface Props {
  data: ReferralsData;
}

const ReferralStats: React.FC<Props> = ({data}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="border-none bg-blue-950 text-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-300">Total Invites</p>
              <p className="mt-1 text-3xl font-semibold">{data?.total_referrals}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
              <UserPlus className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <div className="mt-4 text-xs text-blue-300">
            <span className="text-green-400">↑ 5</span> from last month
          </div>
        </CardContent>
      </Card>

      <Card className="border-none bg-blue-950 text-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-300">Points Earned</p>
              <p className="mt-1 text-3xl font-semibold">{data?.points_earned}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
              <Trophy className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <div className="mt-4 text-xs text-blue-300">
            <span className="text-green-400">500 points</span> per referral
          </div>
        </CardContent>
      </Card>

      <Card className="border-none bg-blue-950 text-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-300">Leaderboard Rank</p>
              <p className="mt-1 text-3xl font-semibold">#{data.rank}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
              <Medal className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <div className="mt-4 text-xs text-blue-300">
            <span className="text-green-400">{data.percentage_rank}%</span> of all users
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReferralStats;
