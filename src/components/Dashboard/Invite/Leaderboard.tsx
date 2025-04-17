import React from "react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/useAuthStore";
import { useShareDialogStore } from "@/stores/useShareDialogStore";
import { ReferralUser } from "@/types";
import GradientCard from "@/components/ui/GradientCard";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LeaderboardProps {
  leaderboard: ReferralUser[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ leaderboard }) => {
  const username = useAuthStore((state) => state.user?.username);
  const openShareDialog = useShareDialogStore((state) => state.openDialog);

  const leaderboardMessage = `Signup on KlikkUp and join the fun! Use my referral link to sign up: http://localhost:5173/auth/register?ref_code=${username}`;

  return (
    <GradientCard
      bg="from-blue-950 to"
      className="border-none bg-blue-950 text-white shadow-md"
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
          <div className=" px-2 py-2 bg-secondary/30 rounded-xl">
            <Trophy className="text-secondary h-5 w-5" />
          </div>
          Referral Leaderboard
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ScrollArea className="w-full">
          {/* Large screens: Table */}
          <div className="hidden min-[400px]:block">
            <div className="rounded-lg border border-white/10 overflow-hidden max-w-full bg-blue-950">
              <Table>
                <TableHeader>
                  <TableRow className="bg-blue-900/50 hover:bg-blue-900/50">
                    <TableHead className="w-[80px] text-blue-300">
                      Rank
                    </TableHead>
                    <TableHead className="text-blue-300">Username</TableHead>
                    <TableHead className="text-blue-300 w-[100px]">
                      Referrals
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {leaderboard.map((user, index) => (
                    <TableRow
                      key={index}
                      className={`border-b border-white/5 hover:bg-blue-900/30 ${
                        user.username === username ? "bg-blue-900/30" : ""
                      }`}
                    >
                      <TableCell className="font-medium">
                        <div className="flex items-center">
                          {index < 3 ? (
                            <div
                              className={`flex h-6 w-6 items-center justify-center rounded-full mr-2 ${
                                index === 0
                                  ? "bg-yellow-700"
                                  : index === 1
                                  ? "bg-green-700"
                                  : "bg-amber-700"
                              }`}
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
                          <div className="flex flex-col-reverse min-[400px]:flex-row break-words h-8 w-8 items-center justify-center rounded-full bg-blue-900/50 text-white uppercase">
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
                      <TableCell>{user.total_referrals}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>

                <TableCaption className="text-blue-300 py-3">
                  Top 100 referrers this month
                </TableCaption>
              </Table>
            </div>
          </div>

          {/* Small screens: Card-style */}
          <div className="min-[400px]:hidden flex flex-col gap-4 mt-2">
            {leaderboard.map((user, index) => (
              <div
                key={index}
                className={`flex flex-col gap-2 p-4 rounded-lg border border-white/10 bg-blue-900/30 ${
                  user.username === username ? "border-secondary/50" : ""
                } max-w-[400px] w-full mx-auto`}
              >
                <div className="flex max-[200px]:flex-col max-[200px]:gap-1 items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    {index < 3 ? (
                      <div
                        className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                          index === 0
                            ? "bg-yellow-700"
                            : index === 1
                            ? "bg-green-700"
                            : "bg-amber-700"
                        }`}
                      >
                        {index + 1}
                      </div>
                    ) : (
                      <span className="text-blue-300 text-sm">
                        #{index + 1}
                      </span>
                    )}
                    <span className="font-medium">{user.username}</span>
                    {user.username === username && (
                      <span className="text-xs bg-blue-900/50 px-2 py-0.5 rounded text-blue-300">
                        You
                      </span>
                    )}
                  </div>
                  <span className="text-blue-300 text-sm">
                    {user.total_referrals} ref
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-blue-900/30 p-4 border border-white/5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-medium">Want to climb the leaderboard?</h3>
                <p className="text-sm text-blue-300">
                  Share your referral code with more friends to increase your
                  rank
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
        </ScrollArea>
      </CardContent>
    </GradientCard>
  );
};

export default Leaderboard;
