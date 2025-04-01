import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, CheckCircle, TrendingUp } from "lucide-react"
import { TasksData } from "@/types"

interface Props {
  data: TasksData
}

const StatsCards: React.FC<Props> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="border-none bg-blue-950 text-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-300">Available Tasks</p>
              <p className="mt-1 text-3xl font-semibold">{data?.available_tasks?.length}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
              <BookOpen className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <div className="mt-4 text-xs text-blue-300">
            <span className="text-green-400">4 new</span> tasks this week
          </div>
        </CardContent>
      </Card>

      <Card className="border-none bg-blue-950 text-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-300">Tasks Completed</p>
              <p className="mt-1 text-3xl font-semibold">{data.completed_tasks.length}</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
              <CheckCircle className="h-6 w-6 text-secondary" />
            </div>
          </div>
          <div className="mt-4 text-xs text-blue-300">
            <span className="text-green-400">+3</span> from last month
          </div>
        </CardContent>
      </Card>

      <Card className="border-none bg-blue-950 text-white shadow-md">
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
      </Card>
    </div>
  )
}

export default StatsCards
