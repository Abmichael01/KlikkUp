"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import {
  ClipboardListIcon,
  UserPlus,
  TrendingUp,
  Award,
  ChevronRight,
} from "lucide-react";
import Overview from "@/components/Dashboard/Dashboard/Overview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import RecentActivities from "@/components/Dashboard/Dashboard/RecentActivities";
import { useAccountOverviewData } from "@/api/queries";
import { AccountOverviewData, RecentActivity } from "@/types";
import CopyButton from "@/components/ui/CopyButton";
import StreakCard from "@/components/Dashboard/Dashboard/StreakCard";
import PageIsLoading from "@/components/Dashboard/PageIsLoading";

const Dashboard: React.FC = () => {
  const { data, isLoading } = useAccountOverviewData();

  if (isLoading) return <PageIsLoading />

  return (
    <div className="w-full">
      <div className="space-y-6">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-6">
          <Overview data={data as AccountOverviewData} />
          <StreakCard data={data} />
        </div>

        {/* Stats Grid Section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Points Card */}
          <Card className="border-none bg-blue-900 text-white shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-300">Total Points</p>
                  <p className="mt-1 text-3xl font-semibold">
                    {data?.point_balance}{" "}
                    <span className="text-sm">Klikks</span>
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-800/50">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div className="mt-4 text-xs text-blue-300">
                <span className="text-green-400">↑ 12%</span> from last month
              </div>
            </CardContent>
          </Card>

          {/* Level Card */}
          <Card className="border-none bg-blue-900 text-white shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-300">Current Level</p>
                  <p className="mt-1 text-3xl font-semibold">
                    Level {data?.current_level}
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-800/50">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Progress to Level 4</span>
                  <span>{data?.percent_xp_in_level}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-blue-950">
                  <Progress
                    value={data?.percent_xp_in_level}
                    className="h-full bg-gradient-to-r from-blue-400 to-indigo-400"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tasks Card */}
          <Card className="border-none bg-blue-900 text-white shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-300">Tasks Completed</p>
                  <p className="mt-1 text-3xl font-semibold">
                    {data?.total_activities_done}{" "}
                    <span className="text-sm">tasks</span>
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-800/50">
                  <ClipboardListIcon className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div className="mt-4 text-xs text-blue-300">
                <span className="text-green-400">↑ 8%</span> from last week
              </div>
            </CardContent>
          </Card>

          {/* Invites Card */}
          <Card className="border-none bg-blue-900 text-white shadow-md">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-blue-300">Total Invites</p>
                  <p className="mt-1 text-3xl font-semibold">
                    {data?.total_referrals}{" "}
                    <span className="text-sm">users</span>
                  </p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-800/50">
                  <UserPlus className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div className="mt-4 text-xs text-blue-300">
                <span className="text-green-400">+3</span> new this month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Referral Code Card */}
        <Card className="border-none bg-blue-900 text-white shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">My Referral Code</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <input
                type="text"
                value={data?.username}
                className="flex-grow w-full rounded-md border border-white/20 bg-white/10 p-2 text-white"
                readOnly
              />
              <CopyButton
                textToCopy={data?.username as string}
                className="bg-secondary hover:bg-secondary/90"
              />
            </div>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between">
              <div className="text-sm text-center">
                <span className="text-blue-300 ">Referral Bonus:</span> 500
                points per referral
              </div>
              <Button
                variant="link"
                className="text-blue-300 hover:text-white p-0"
              >
                View Leaderboard <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <RecentActivities data={data?.recent_activities as RecentActivity[]} />
      </div>
    </div>
  );
};

export default Dashboard;
