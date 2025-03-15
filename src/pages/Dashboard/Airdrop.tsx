"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, Calendar, TrendingUp, Users, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const Airdrop: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Calculate time remaining until May 21, 2025
  useEffect(() => {
    const calculateTimeRemaining = () => {
      const targetDate = new Date("2025-05-21T00:00:00")
      const currentDate = new Date()
      const difference = targetDate.getTime() - currentDate.getTime()

      if (difference <= 0) {
        // Target date has passed
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      return { days, hours, minutes, seconds }
    }

    // Initial calculation
    setTimeRemaining(calculateTimeRemaining())

    // Update every second
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining())
    }, 1000)

    // Clean up on unmount
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col gap-10">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-none bg-blue-950 text-white shadow-md">
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
        </Card>

        <Card className="border-none bg-blue-950 text-white shadow-md">
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
        </Card>

        <Card className="border-none bg-blue-950 text-white shadow-md">
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
        </Card>
      </div>

      {/* Countdown Timer */}
      <Card className="border-none bg-blue-950 text-white shadow-md overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-secondary" />
            Countdown to Next Airdrop
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-6">
            <div className="flex gap-4 sm:gap-8 mb-6">
              <div className="flex flex-col items-center">
                <motion.div
                  key={timeRemaining.days}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl sm:text-5xl font-bold bg-blue-900/50 w-16 sm:w-24 h-16 sm:h-24 rounded-lg flex items-center justify-center mb-2 border border-blue-800"
                >
                  <span className="text-secondary">{timeRemaining.days}</span>
                </motion.div>
                <span className="text-sm text-blue-300">Days</span>
              </div>
              <div className="flex flex-col items-center">
                <motion.div
                  key={timeRemaining.hours}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl sm:text-5xl font-bold bg-blue-900/50 w-16 sm:w-24 h-16 sm:h-24 rounded-lg flex items-center justify-center mb-2 border border-blue-800"
                >
                  <span className="text-secondary">{timeRemaining.hours}</span>
                </motion.div>
                <span className="text-sm text-blue-300">Hours</span>
              </div>
              <div className="flex flex-col items-center">
                <motion.div
                  key={timeRemaining.minutes}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="text-4xl sm:text-5xl font-bold bg-blue-900/50 w-16 sm:w-24 h-16 sm:h-24 rounded-lg flex items-center justify-center mb-2 border border-blue-800"
                >
                  <span className="text-secondary">{timeRemaining.minutes}</span>
                </motion.div>
                <span className="text-sm text-blue-300">Minutes</span>
              </div>
              <div className="flex flex-col items-center">
                <div
                  
                  className="text-4xl sm:text-5xl font-bold bg-blue-900/50 w-16 sm:w-24 h-16 sm:h-24 rounded-lg flex items-center justify-center mb-2 border border-blue-800"
                >
                  <span className="text-secondary">{timeRemaining.seconds}</span>
                </div>
                <span className="text-sm text-blue-300">Seconds</span>
              </div>
            </div>
            <p className="text-center text-blue-300 max-w-md">
              The next airdrop will be distributed to all eligible participants on May 21, 2025. Continue farming points
              to increase your allocation.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Animation Section */}
      <Card className="border-none bg-blue-900 text-white shadow-md overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col items-center py-8 px-4 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0,transparent_70%)]"></div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="z-10 mb-6"
            >
              <h2 className="text-3xl fancy-font font-semibold text-secondary text-center">Continue to farm</h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="z-10 mt-6 max-w-2xl"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-center">
                You can decide to keep your points until the future project is revealed
              </h2>
              <p className="text-blue-300 text-center mt-4">
                The longer you hold and farm, the greater your potential rewards will be. Stay active in the community
                for the best results.
              </p>
            </motion.div>
          </div>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-none bg-blue-900 text-white shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-secondary" />
              Airdrop Eligibility
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Maintain a minimum of 10,000 points",
                "Complete at least 5 tasks per month",
                "Refer at least 2 active users",
                "Maintain an active streak of 30+ days",
                "Participate in community events",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="h-5 w-5 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                    <span className="text-xs text-secondary font-bold">{index + 1}</span>
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90">Check Your Eligibility</Button>
          </CardContent>
        </Card>

        <Card className="border-none bg-blue-900 text-white shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-secondary" />
              Previous Airdrops
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: "January 15, 2025", participants: "15,432", totalPoints: "2.5M" },
                { date: "October 10, 2024", participants: "8,765", totalPoints: "1.2M" },
              ].map((airdrop, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-blue-800 pb-3 last:border-0"
                >
                  <div>
                    <p className="font-medium">{airdrop.date}</p>
                    <p className="text-sm text-blue-300">{airdrop.participants} participants</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-secondary">{airdrop.totalPoints}</p>
                    <p className="text-xs text-blue-300">total points</p>
                  </div>
                </div>
              ))}
              <div className="pt-2">
                <Button variant="link" className="text-blue-300 hover:text-white p-0">
                  View All History <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Airdrop

