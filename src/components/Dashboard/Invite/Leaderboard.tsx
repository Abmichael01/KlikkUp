import React from "react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/useAuthStore";
import { useShareDialogStore } from "@/stores/useShareDialogStore";
import { ReferralUser } from "@/types";
import GradientCard from "@/components/ui/GradientCard";

interface LeaderboardProps {
  leaderboard: ReferralUser[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ leaderboard }) => {
  const username = useAuthStore((state) => state.user?.username);
  const openShareDialog = useShareDialogStore((state) => state.openDialog);

  const leaderboardMessage = `Check out the leaderboard on KlikkUp and join the fun! Use my referral link to sign up: https://urkelcodes.com/leaderboard`;

  return (
    <GradientCard bg="from-blue-950 to" className="border-none bg-blue-950 text-white shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-secondary" />
          Referral Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-white/10 overflow-hidden bg-blue-950">
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-900/50 hover:bg-blue-900/50">
                <TableHead className="w-[80px] text-blue-300">Rank</TableHead>
                <TableHead className="text-blue-300">Username</TableHead>
                <TableHead className="text-blue-300 w-[100px]">Referrals</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboard?.map((user, index) => (
                <TableRow
                  key={index}
                  className={`
                    border-b border-white/5 hover:bg-blue-900/30
                    ${user.username === username ? "bg-blue-900/30" : ""}
                  `}
                >
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      {index < 3 ? (
                        <div
                          className={`
                          flex h-6 w-6 items-center justify-center rounded-full mr-2
                          ${index === 0 ? "bg-yellow-700" : ""}
                          ${index === 1 ? "bg-green-700" : ""}
                          ${index === 2 ? "bg-amber-700" : ""}
                        `}
                        >
                          {index + 1}
                        </div>
                      ) : (
                        <span className="ml-2">{index + 1}</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900/50 text-white uppercase">
                        <span>{user.username.charAt(0)}</span>
                      </div>
                      <span>{user.username}</span>
                      {user.username === username && (
                        <span className="text-xs bg-blue-900/50 px-2 py-0.5 rounded text-blue-300">
                          You
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{user?.total_referrals}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableCaption className="text-blue-300 py-3">
              Top 100 referrers this month
            </TableCaption>
          </Table>
        </div>

        <div className="mt-6 rounded-lg bg-blue-900/30 p-4 border border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-medium">Want to climb the leaderboard?</h3>
              <p className="text-sm text-blue-300">
                Share your referral code with more friends to increase your rank
              </p>
            </div>
            <Button
              className="bg-secondary hover:bg-secondary/90 text-white whitespace-nowrap"
              onClick={() => openShareDialog(leaderboardMessage)}
            >
              Share Now
            </Button>
          </div>
        </div>
      </CardContent>
    </GradientCard>
  );
};

export default Leaderboard;
