import React from "react"
import { CardContent } from "@/components/ui/card"
import { BookOpen, CheckCircle, TrendingUp } from "lucide-react"
import { StoriesData } from "@/types"
import GradientCard from "@/components/ui/GradientCard";

interface Props {
  data: StoriesData;
}

const StatsCards: React.FC<Props> = ({  data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <GradientCard className="border-none text-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-300">Available Stories</p>
              <p className="mt-1 text-3xl font-semibold">{data.new_stories?.length}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
              <BookOpen className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <div className="mt-4 text-xs text-blue-300">
            <span className="text-green-400">4 new</span> stories this week
          </div>
        </CardContent>
      </GradientCard>

      <GradientCard className="border-none text-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-300">Stories Read</p>
              <p className="mt-1 text-3xl font-semibold">{data.stories_read?.length}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
              <CheckCircle className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <div className="mt-4 text-xs text-blue-300">
            <span className="text-green-400">+3</span> from last month
          </div>
        </CardContent>
      </GradientCard>

      <GradientCard className="border-none bg-blue-950 text-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-300">Points Earned</p>
              <p className="mt-1 text-3xl font-semibold">{data.points_earned}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
              <TrendingUp className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <div className="mt-4 text-xs text-blue-300">
            <span className="text-green-400">↑ 8%</span> from last month
          </div>
        </CardContent>
      </GradientCard>
    </div>
  )
}

export default StatsCards
