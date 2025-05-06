import React from "react"
import { TrendingUp, Clock, Users } from "lucide-react"
import { CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import GradientCard from "@/components/ui/GradientCard"
import { RoadmapData, RoadmapItem } from "@/types"



const StatsCards: React.FC<{data: RoadmapData }> = ({ data }) => {
  const roadmapItems = data?.roadmap as RoadmapItem[]
  const completedItems = roadmapItems?.filter(item => item.completed)?.length
  const calculateProgress = () => {
    const totalItems = roadmapItems?.length
    const completedItems = roadmapItems?.filter((item) => item.completed)?.length
  
    return Math.round((completedItems / totalItems) * 100)
  }
  const progress = calculateProgress()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <GradientCard className="border-none text-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-300">Roadmap Progress</p>
              <p className="mt-1 text-3xl font-semibold">{progress}%</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
              <TrendingUp className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <div className="mt-3 space-y-1">
            <div className="h-2 w-full overflow-hidden rounded-full bg-blue-900/50">
              <Progress value={progress} className="h-full bg-secondary" />
            </div>
            <p className="text-xs text-blue-300">
              {completedItems} of {roadmapItems?.length} items completed
            </p>
          </div>
        </CardContent>
      </GradientCard>

      <GradientCard className="border-none text-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-300">Current Phase</p>
              <p className="mt-1 text-3xl font-semibold">Phase 1</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
              <Clock className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <div className="mt-4 text-xs text-blue-300">
            <span className="text-green-400">{completedItems}/{roadmapItems?.length}</span> milestones completed
          </div>
        </CardContent>
      </GradientCard>

      <GradientCard className="border-none text-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-300">Community Size</p>
              <p className="mt-1 text-3xl font-semibold">{data?.users_count}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
              <Users className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <div className="mt-4 text-xs text-blue-300">
            <span className="text-green-400">Growing</span> steadily
          </div>
        </CardContent>
      </GradientCard>
    </div>
  )
}

export default StatsCards
