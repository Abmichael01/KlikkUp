"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { ClipboardListIcon, CopyIcon, Flame, UserPlus, TrendingUp, Award, ChevronRight } from "lucide-react"
import Overview from "@/components/Dashboard/Dashboard/Overview"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const Dashboard: React.FC = () => {
  return (
    <div className="w-full">

      <div className="space-y-6">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Simplified Overview Card */}
          <Card className="col-span-2 border-none bg-blue-950 text-white shadow-md flex-grow">
            <Overview />
          </Card>

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
                    120,000 <span className="text-sm">Klikks</span>
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
                  <p className="mt-1 text-3xl font-semibold">Level 3</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-800/50">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Progress to Level 4</span>
                  <span>75%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-blue-950">
                  <Progress value={75} className="h-full bg-gradient-to-r from-blue-400 to-indigo-400" />
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
                    11 <span className="text-sm">users</span>
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
                value="URKEL2024"
                className="flex-grow rounded-md border border-white/20 bg-white/10 p-2 text-white"
                readOnly
              />
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/20">
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
        <Card className="border-none bg-blue-900 text-white shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Completed task", task: "Daily login", points: "+10", time: "Today, 9:30 AM" },
                { action: "Level up", task: "Reached Level 3", points: "+50", time: "Yesterday" },
                { action: "Referral bonus", task: "New user joined", points: "+500", time: "2 days ago" },
                { action: "Completed task", task: "Profile update", points: "+25", time: "3 days ago" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-blue-400"></div>
                    <div>
                      <p className="font-medium">{item.action}</p>
                      <p className="text-sm text-blue-300">{item.task}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-400">{item.points}</p>
                    <p className="text-xs text-blue-300">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Button variant="link" className="text-blue-300 hover:text-white">
                View All Activity
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard

