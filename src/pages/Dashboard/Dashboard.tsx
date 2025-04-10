"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ClipboardListIcon, CopyIcon, Flame, UserPlus, TrendingUp, Award, ChevronRight } from "lucide-react"
import Overview from "@/components/Dashboard/Dashboard/Overview"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import RecentActivities from "@/components/Dashboard/Dashboard/RecentActivities"
import {useAuthStore} from "@/stores/useAuthStore.ts";
import GradientCard from "@/components/ui/GradientCard"

const Dashboard: React.FC = () => {
    const user = useAuthStore(state => state.user)
  return (
    <div className="w-full">

      <div className="space-y-6">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Simplified Overview Card */}
          <GradientCard bg="from-blue-950 to-blue-950" className="col-span-2 border-none text-white shadow-md flex-grow">
            <Overview />
          </GradientCard>

          {/* Streak Card */}
          <Card className="border-none shrink-0 bg-blue-950 text-white shadow-md w-full md:w-[300px] lg:w-[400px]">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Flame className="h-5 w-5 text-orange-400" />
                Current Streak
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <p className="text-3xl font-bold">56</p>
                  <p className="text-sm text-blue-300">days</p>
                </div>
                <div className="rounded-full bg-blue-900/50 px-3 py-1 text-xs font-medium text-blue-300">
                  +2 this week
                </div>
              </div>

              <div className="mt-4 flex justify-between gap-1">
                {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                  <div key={index} className="flex flex-col items-center gap-1">
                    <p className="text-xs text-blue-300">{day}</p>
                    <div className={`h-1.5 w-5 rounded-full ${index < 4 ? "bg-orange-400" : "bg-blue-800"}`}></div>
                  </div>
                ))}
              </div>

              <p className="mt-3 text-xs text-blue-300">3 more days for a perfect week</p>
            </CardContent>
          </Card>
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
                      {user?.point_balance} <span className="text-sm">Klikks</span>
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
                  <p className="mt-1 text-3xl font-semibold">Level {user?.current_level}</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-800/50">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Progress to Level 4</span>
                  <span>{user?.percent_xp_in_level}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-blue-950">
                  <Progress value={user?.percent_xp_in_level} className="h-full bg-gradient-to-r from-blue-400 to-indigo-400" />
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
                    120 <span className="text-sm">tasks</span>
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
                      {user?.total_referrals} <span className="text-sm">users</span>
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
            <div className="flex gap-2">
              <input
                type="text"
                value={user?.username}
                className="flex-grow rounded-md border border-white/20 bg-white/10 p-2 text-white"
                readOnly
              />
              <Button className="bg-secondary hover:bg-secondary/90">
                <CopyIcon className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="text-sm">
                <span className="text-blue-300">Referral Bonus:</span> 500 points per referral
              </div>
              <Button variant="link" className="text-blue-300 hover:text-white p-0">
                View Leaderboard <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <RecentActivities />
      </div>
    </div>
  )
}

export default Dashboard

