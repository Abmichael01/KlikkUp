import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LeaderboardProps {
  leaderboard: { username: string; invites: number }[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ leaderboard }) => {
  return (
    <Card className="border-none bg-blue-950 text-white shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-secondary" />
          Referral Leaderboard
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-white/10 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-blue-900/50 hover:bg-blue-900/50">
                <TableHead className="w-[80px] text-blue-300">Rank</TableHead>
                <TableHead className="text-blue-300">Username</TableHead>
                <TableHead className="text-blue-300 w-[100px]">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboard.map((user, index) => (
                <TableRow
                  key={index}
                  className={`
                    border-b border-white/5 hover:bg-blue-900/30
                    ${index === 3 ? "bg-blue-900/30" : ""}
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
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900/50 text-white">
                        <span>{user.username.charAt(0)}</span>
                      </div>
                      <span>{user.username}</span>
                      {index === 3 && (
                        <span className="text-xs bg-blue-900/50 px-2 py-0.5 rounded text-blue-300">
                          You
                        </span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell>{user.invites}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableCaption className="text-blue-300 py-3">
              Top 10 referrers this month
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
            <Button className="bg-secondary hover:bg-secondary/90 text-white whitespace-nowrap">
              Share Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Leaderboard;
