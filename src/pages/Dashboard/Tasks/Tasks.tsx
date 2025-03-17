"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import StatsCards from "@/components/Dashboard/Tasks/StatsCards"
import TaskCard from "@/components/Dashboard/Tasks/TaskCard"

const tasks = [
  {
    id: 1,
    title: "Complete Profile",
    description: "Fill out your profile information",
    points: 500,
    difficulty: "Easy",
    estimatedTime: "5 mins",
    isNew: true,
  },
  {
    id: 2,
    title: "Upload Documents",
    description: "Upload necessary documents",
    points: 1000,
    difficulty: "Medium",
    estimatedTime: "10 mins",
    isNew: true,
  },
  {
    id: 3,
    title: "Attend Orientation",
    description: "Participate in the orientation session",
    points: 1500,
    difficulty: "Medium",
    estimatedTime: "30 mins",
    isNew: false,
  },
  {
    id: 4,
    title: "Complete Survey",
    description: "Provide feedback through the survey",
    points: 700,
    difficulty: "Easy",
    estimatedTime: "7 mins",
    isNew: true,
  },
  {
    id: 5,
    title: "Join Community",
    description: "Join the community forum",
    points: 800,
    difficulty: "Easy",
    estimatedTime: "3 mins",
    isNew: false,
  },
  {
    id: 6,
    title: "Read Guidelines",
    description: "Read the community guidelines",
    points: 300,
    difficulty: "Easy",
    estimatedTime: "8 mins",
    isNew: false,
  },
  {
    id: 7,
    title: "Weekly Check-in",
    description: "Check-in with your mentor",
    points: 1000,
    difficulty: "Medium",
    estimatedTime: "15 mins",
    isNew: true,
  },
  {
    id: 8,
    title: "Complete Training",
    description: "Finish the training modules",
    points: 2000,
    difficulty: "Hard",
    estimatedTime: "1 hr",
    isNew: false,
  },
  {
    id: 9,
    title: "Submit Assignment",
    description: "Submit your first assignment",
    points: 2500,
    difficulty: "Hard",
    estimatedTime: "2 hrs",
    isNew: true,
  },
];



const tabs = [
  {
    label: "New tasks",
    slug: "new-tasks",
  },
  {
    label: "Old tasks",
    slug: "old-tasks",
  },
]

const Tasks: React.FC = () => {
  const [currentTab, setCurrentTab] = useState("new-tasks")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = currentTab === "new-tasks" ? task.isNew : !task.isNew
    return matchesSearch && matchesTab
  })

  return (
    <div className="flex flex-col gap-6">
      <StatsCards />

      {/* Search and Filter */}
      <Card className="border-none bg-blue-950 text-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-blue-300" />
              <Input
                placeholder="Search tasks..."
                className="pl-9 bg-blue-900 border-blue-800 text-white placeholder:text-blue-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  className={cn(
                    "text-center px-6 py-2 text-sm font-medium rounded-lg border border-blue-800 transition-colors",
                    tab.slug === currentTab
                      ? "bg-secondary text-white"
                      : "bg-blue-950/50 text-blue-300 hover:bg-blue-950",
                  )}
                  onClick={() => setCurrentTab(tab.slug)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tasks Grid */}
      {filteredTasks.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTasks.map((task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <TaskCard task={task} />
            </motion.div>
          ))}
        </div>
      ) : (
        <Card className="border-none bg-blue-900 text-white shadow-md">
          <CardContent className="py-12 flex flex-col items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-blue-950 flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold">No tasks found</h3>
            <p className="text-blue-300 mt-2">Try adjusting your search or filter criteria</p>
            <Button
              className="mt-6 bg-secondary hover:bg-secondary/90 text-white"
              onClick={() => {
                setSearchQuery("")
                setCurrentTab("new-tasks")
              }}
            >
              Reset Filters
            </Button>
          </CardContent>
        </Card>
      )}

      {/* View All Tasks */}
      <Card className="border-none bg-blue-900 text-white shadow-md">
        <CardContent className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-medium">Looking for more tasks?</h3>
              <p className="text-sm text-blue-300">Check back regularly for new tasks to complete and earn points</p>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              View All Tasks <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Tasks