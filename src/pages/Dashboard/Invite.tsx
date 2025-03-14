"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Copy,
  Trophy,
  Medal,
  UserPlus,
  Users,
  // ChevronUp,
  // ChevronDown,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const leaderboard = [
  { username: "John Doe", invites: 10 },
  { username: "Jane Smith", invites: 15 },
  { username: "Michael Johnson", invites: 20 },
  { username: "Emily Davis", invites: 25 },
  { username: "Sarah Wilson", invites: 30 },
  { username: "David Brown", invites: 35 },
  { username: "Sophia Green", invites: 40 },
  { username: "Michael Wilson", invites: 45 },
  { username: "Emily Thompson", invites: 50 },
  { username: "David Johnson", invites: 55 },
];

const Invite: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const referralCode = "HG977h";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "Your referral code has been copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Referral Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-none bg-blue-950 text-white shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-300">Total Invites</p>
                <p className="mt-1 text-3xl font-semibold">30</p>
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
                <p className="mt-1 text-3xl font-semibold">15,000</p>
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
                <p className="mt-1 text-3xl font-semibold">#4</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
                <Medal className="h-6 w-6 text-secondary" />
              </div>
            </div>
            <div className="mt-4 text-xs text-blue-300">
              <span className="text-green-400">Top 10%</span> of all users
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Referral Code Card */}
      <Card className="border-none bg-blue-950 text-white shadow-md">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-secondary" />
            Your Referral Code
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 text-wrap sm:grid-cols-2 sm:flex-row gap-4 items-center">
            <div className="relative w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-blue-600/20 blur-xl "></div>
              <div className="relative flex items-center justify-between bg-blue-900/50 rounded-lg border border-white/10 p-4 w-full">
                <div>
                  <p className="text-xs text-blue-300 mb-1">
                    Share this code with friends
                  </p>
                  <p className="text-2xl font-mono font-bold tracking-wider">
                    {referralCode}
                  </p>
                </div>
                <Button
                  onClick={copyToClipboard}
                  className="bg-secondary hover:bg-secondary/90"
                >
                  <Copy />
                  {copied ? "Copied" : "Copy"}
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-blue-900/50 rounded-lg border border-white/10 p-4 h-full">
              <div>
                <p className="text-sm text-blue-300">Referral Link</p>
                <p className="text-sm font-mono font-bold tracking-wider text-wrap">
                  https://urkelcodes.com/invite/{referralCode}
                </p>
              </div>
              <Button
                className="bg-secondary hover:bg-secondary/90 text-white float-right"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `https://urkelcodes.com/invite/${referralCode}`
                  );
                  toast({
                    title: "Copied to clipboard",
                    description:
                      "Your referral link has been copied to clipboard",
                  });
                }}
              >
                <Copy className="h-4 w-4" />
                Copy Link
              </Button>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg bg-blue-900/30 p-4 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
                <Trophy className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="font-medium">Earn 500 points per referral</p>
                <p className="text-sm text-blue-300">
                  Invite friends to earn more points
                </p>
              </div>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              <UserPlus className="h-4 w-4 mr-2" />
              Invite Friends
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard */}
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
                  <TableHead className="text-blue-300 w-[100px]">
                    Status
                  </TableHead>
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
                  Share your referral code with more friends to increase your
                  rank
                </p>
              </div>
              <Button className="bg-secondary hover:bg-secondary/90 text-white whitespace-nowrap">
                Share Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Invite;
