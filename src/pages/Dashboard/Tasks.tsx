"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Youtube, CheckCircle, Clock, TrendingUp, Search, Star, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

const tasks = [
  {
    id: 1,
    title: "Watch Product Tutorial",
    description: "Learn how to use our platform effectively",
    points: 2000,
    difficulty: "Easy",
    estimatedTime: "5 min",
    isNew: true,
  },
  {
    id: 2,
    title: "Complete User Survey",
    description: "Share your feedback about our services",
    points: 1000,
    difficulty: "Easy",
    estimatedTime: "3 min",
    isNew: true,
  },
  {
    id: 3,
    title: "Share on Social Media",
    description: "Spread the word about our platform",
    points: 5000,
    difficulty: "Medium",
    estimatedTime: "10 min",
    isNew: false,
  },
  {
    id: 4,
    title: "Refer a Friend",
    description: "Invite someone to join our platform",
    points: 1000,
    difficulty: "Easy",
    estimatedTime: "2 min",
    isNew: true,
  },
  {
    id: 5,
    title: "Complete Profile",
    description: "Fill out all your profile information",
    points: 1000,
    difficulty: "Easy",
    estimatedTime: "5 min",
    isNew: false,
  },
  {
    id: 6,
    title: "Join Discord Community",
    description: "Connect with other users on Discord",
    points: 1000,
    difficulty: "Easy",
    estimatedTime: "3 min",
    isNew: false,
  },
  {
    id: 7,
    title: "Follow on Twitter",
    description: "Stay updated with our latest news",
    points: 1000,
    difficulty: "Easy",
    estimatedTime: "1 min",
    isNew: true,
  },
  {
    id: 8,
    title: "Subscribe to Newsletter",
    description: "Get weekly updates via email",
    points: 1000,
    difficulty: "Easy",
    estimatedTime: "2 min",
    isNew: false,
  },
  {
    id: 9,
    title: "Watch Feature Showcase",
    description: "Learn about our newest features",
    points: 1000,
    difficulty: "Medium",
    estimatedTime: "8 min",
    isNew: true,
  },
]

const tabs = [
  {
    label: "New tasks",
    slug: "new-tasks",
  },
  {
    label: "Completed tasks",
    slug: "completed-tasks",
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
    <div className="flex flex-col gap-10">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-none bg-blue-950 text-white shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-300">Available Tasks</p>
                <p className="mt-1 text-3xl font-semibold">9</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
                <Clock className="h-6 w-6 text-secondary" />
              </div>
            </div>
            <div className="mt-4 text-xs text-blue-300">
              <span className="text-green-400">3 new</span> tasks this week
            </div>
          </CardContent>
        </Card>

        <Card className="border-none bg-blue-950 text-white shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-300">Completed Tasks</p>
                <p className="mt-1 text-3xl font-semibold">24</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
                <CheckCircle className="h-6 w-6 text-secondary" />
              </div>
            </div>
            <div className="mt-4 text-xs text-blue-300">
              <span className="text-green-400">+5</span> from last month
            </div>
          </CardContent>
        </Card>

        <Card className="border-none bg-blue-950 text-white shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-300">Points Earned</p>
                <p className="mt-1 text-3xl font-semibold">24,000</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
                <TrendingUp className="h-6 w-6 text-secondary" />
              </div>
            </div>
            <div className="mt-4 text-xs text-blue-300">
              <span className="text-green-400">↑ 12%</span> from last month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card className="border-none bg-blue-950 text-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-4">
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
              <Card className="h-full border-none bg-blue-900 text-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-center justify-center py-12 bg-gradient-to-b from-blue-950 via-gray-900 to-blue-950 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0,transparent_70%)]"></div>
                  <Youtube className="w-16 h-16 text-secondary relative z-10" />
                  {task.isNew && <Badge className="absolute top-3 right-3 bg-secondary text-white">New</Badge>}
                </div>
                <CardContent className="p-5 flex flex-col gap-3">
                  <div>
                    <h3 className="font-semibold text-lg">{task.title}</h3>
                    <p className="text-sm text-blue-300 mt-1">{task.description}</p>
                  </div>

                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-blue-300" />
                      <span className="text-xs text-blue-300">{task.estimatedTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 text-blue-300" />
                      <span className="text-xs text-blue-300">{task.difficulty}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-blue-800">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-secondary" />
                      <span className="font-bold">{task.points}</span>
                      <span className="text-xs text-blue-300">Klikks</span>
                    </div>
                    <Button
                      size="sm"
                      className="bg-secondary hover:bg-secondary/90 rounded-full"
                    >
                      Watch and Like
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
              <p className="text-sm text-blue-300">Check back regularly for new opportunities to earn points</p>
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

