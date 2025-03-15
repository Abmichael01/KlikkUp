"use client"

import type React from "react"
import { MapPin, CheckCircle, Clock, Calendar, TrendingUp, Users, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

// Group roadmap items into phases
const phases = [
  {
    name: "Phase 1: Foundation",
    description: "Building the core platform and community",
    items: [
      { title: "Launch of The KlikkUp points farming", completed: true },
      { title: "Launch of referral program", completed: false },
      { title: "Social quest", completed: false },
      { title: "Load testing", completed: false },
      { title: "Building community", completed: false },
    ],
  },
  {
    name: "Phase 2: Growth",
    description: "Expanding user base and platform capabilities",
    items: [
      { title: "5,000 Activations", completed: false },
      { title: "10,000 Activations", completed: false },
      { title: "50,000 Activations", completed: false },
      { title: "100,000 Activations", completed: false },
      { title: "Daily rewards", completed: false },
    ],
  },
  {
    name: "Phase 3: Development",
    description: "Building and testing the initial project",
    items: [
      { title: "Building of initial project", completed: false },
      { title: "Test running the initial project", completed: false },
      { title: "1,000,000 Activations", completed: false },
      { title: "Eligibility checking", completed: false },
      { title: "Conversion of points to $Coins", completed: false },
    ],
  },
  {
    name: "Phase 4: Launch",
    description: "Official launch and beyond",
    items: [
      { title: "Social launch of the initial project", completed: false },
      { title: "End of KlikkUp farming program", completed: false },
      { title: "Journey to the initial project", completed: false },
      { title: "Launching on App Store", completed: false },
      { title: "Initial project Airdrop and Listing Q3 2030", completed: false },
    ],
  },
]

// Calculate overall progress
const calculateProgress = () => {
  const totalItems = phases.reduce((acc, phase) => acc + phase.items.length, 0)
  const completedItems = phases.reduce((acc, phase) => acc + phase.items.filter((item) => item.completed).length, 0)

  return Math.round((completedItems / totalItems) * 100)
}

const Roadmap: React.FC = () => {
  const progress = calculateProgress()

  return (
    <div className="flex flex-col gap-10">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-none bg-blue-950 text-white shadow-md">
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
                {1} of {phases.length} phases completed
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none bg-blue-950 text-white shadow-md">
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
              <span className="text-green-400">1/5</span> milestones completed
            </div>
          </CardContent>
        </Card>

        <Card className="border-none bg-blue-950 text-white shadow-md">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-300">Community Size</p>
                <p className="mt-1 text-3xl font-semibold">24,567</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-900/50">
                <Users className="h-6 w-6 text-secondary" />
              </div>
            </div>
            <div className="mt-4 text-xs text-blue-300">
              <span className="text-green-400">Growing</span> steadily
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Timeline View */}
      <Card className="border-none bg-blue-950 text-white shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-secondary" />
            Project Timeline
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative flex flex-col gap-2 pt-2 pb-4">
            <div className="absolute left-[22px] top-8 bottom-0 w-[2px] bg-blue-800"></div>

            {phases.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="mb-6 last:mb-0">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={cn(
                      "z-10 flex h-11 w-11 items-center justify-center rounded-full border-2",
                      phaseIndex === 0 ? "bg-secondary border-secondary" : "bg-blue-900 border-blue-800",
                    )}
                  >
                    <span className="text-sm font-bold">{phaseIndex + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{phase.name}</h3>
                    <p className="text-sm text-blue-300">{phase.description}</p>
                  </div>
                </div>

                <div className="ml-5 pl-10 border-l-2 border-blue-800">
                  <div className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={cn(
                          "flex items-center gap-3 p-3 rounded-lg transition-colors",
                          item.completed
                            ? "bg-blue-900/50 border border-secondary/30"
                            : "bg-blue-900/20 border border-blue-800",
                        )}
                      >
                        <div
                          className={cn(
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                            item.completed ? "bg-secondary/20 text-secondary" : "bg-blue-900 text-blue-300",
                          )}
                        >
                          {item.completed ? <CheckCircle className="h-5 w-5" /> : <MapPin className="h-5 w-5" />}
                        </div>
                        <span className={item.completed ? "text-white" : "text-blue-300"}>{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="border-none bg-blue-900 text-white shadow-md">
        <CardContent className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-medium">Want to help us reach our goals faster?</h3>
              <p className="text-sm text-blue-300">
                Invite friends and complete tasks to accelerate our roadmap progress
              </p>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 text-white whitespace-nowrap">
              Invite Friends <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Roadmap

