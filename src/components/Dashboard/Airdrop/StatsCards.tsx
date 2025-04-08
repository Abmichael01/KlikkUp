import React from "react"
import { CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Gift } from "lucide-react"
import GradientCard from "@/components/ui/GradientCard";

const StatsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <GradientCard className="border-none text-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-300">Your Points</p>
              <p className="mt-1 text-3xl font-semibold">120,000</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
              <TrendingUp className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <div className="mt-4 text-xs text-blue-300">
            <span className="text-green-400">Eligible</span> for next airdrop
          </div>
        </CardContent>
      </GradientCard>

      <GradientCard className="border-none text-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-300">Total Participants</p>
              <p className="mt-1 text-3xl font-semibold">24,567</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
              <Users className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <div className="mt-4 text-xs text-blue-300">
            <span className="text-green-400">+1,245</span> this month
          </div>
        </CardContent>
      </GradientCard>

      <GradientCard className="border-none text-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-300">Previous Airdrops</p>
              <p className="mt-1 text-3xl font-semibold">2</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
              <Gift className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <div className="mt-4 text-xs text-blue-300">
            <span className="text-green-400">100%</span> distribution rate
          </div>
        </CardContent>
      </GradientCard>
    </div>
  )
}

export default StatsCards
