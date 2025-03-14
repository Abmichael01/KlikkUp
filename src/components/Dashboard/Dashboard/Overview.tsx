"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function Overview() {
  const [checkedIn, setCheckedIn] = useState(false)
  const [points, setPoints] = useState(25)
  const [xp, setXP] = useState(75)

  const handleCheckIn = () => {
    if (!checkedIn) {
      setCheckedIn(true)
      setPoints((prev) => prev + 25)
      setXP((prev) => Math.min(prev + 10, 100))
    }
  }

  return (
    <div className="relative overflow-hidden">
      {/* Dynamic background shapes */}
      <motion.div
        className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-white/5 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/5 blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      />

      <div className="p-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* User info and level */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-800/50 text-white">
                <span className="text-xl font-semibold">U</span>
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight">Urkelcodes</h2>
                <p className="text-xs text-blue-300 mt-0.5">Earning Overview</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <p className="text-xs text-blue-300">Level 3</p>
                  <span className="inline-flex h-5 items-center rounded-full bg-blue-900/60 px-2 text-xs font-medium">
                    {xp}/100 XP
                  </span>
                </div>
                <p className="text-xs font-medium">Level 4</p>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-blue-900/50">
                <Progress value={xp} className="h-full bg-gradient-to-r from-blue-400 to-indigo-400" />
              </div>
              <p className="text-xs text-blue-300">{100 - xp} XP needed to reach Level 4</p>
            </div>
          </div>

          {/* Check-in button */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 rounded-lg bg-blue-900/40 p-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-800/50">
                <span className="text-lg font-bold">{points}</span>
              </div>
              <div>
                <p className="text-xs text-blue-300">Today's Points</p>
                <p className="text-sm font-medium">Check in daily to earn more</p>
              </div>
            </div>

            <Button
              onClick={handleCheckIn}
              disabled={checkedIn}
              className={`w-full ${
                checkedIn
                  ? "bg-blue-800/50 text-blue-300"
                  : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4" />
                {checkedIn ? "Checked In Today" : "Daily Check-In (+25 points)"}
              </div>
            </Button>
          </div>
        </div>

        {/* Card number - keeping the banking card aesthetic */}
        <div className="mt-6 flex justify-between items-center">
          <p className="text-xs tracking-widest text-blue-300 opacity-70">
            •••• •••• •••• {Math.floor(1000 + Math.random() * 9000)}
          </p>
          <p className="text-xs text-blue-300 opacity-70">
            {new Date().getFullYear()}/{(new Date().getMonth() + 1).toString().padStart(2, "0")}
          </p>
        </div>
      </div>
    </div>
  )
}

