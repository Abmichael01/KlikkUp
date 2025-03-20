import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "lucide-react"
import { motion } from "framer-motion"

interface CountdownTimerProps {
  timeRemaining: {
    days: number
    hours: number
    minutes: number
    seconds: number
  }
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeRemaining }) => {
  return (
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
  )
}

export default CountdownTimer
