"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Confetti from "react-confetti-boom"
import { Award, Calendar, Flame, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { useDialog } from "@/hooks/useDialog"

interface CheckinSuccessProps {
  streaks: number
}

export default function CheckinSuccess({ streaks }: CheckinSuccessProps) {
  const { open, setOpen } = useDialog("checkinSuccess")
  const [showConfetti, setShowConfetti] = useState(false)

  // Control confetti timing
  useEffect(() => {
    if (open) {
      // Slight delay before showing confetti for better UX
      const timer = setTimeout(() => setShowConfetti(true), 300)
      return () => clearTimeout(timer)
    } else {
      setShowConfetti(false)
    }
  }, [open])

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent className="border-none bg-transparent p-0 shadow-none flex justify-center">
        {showConfetti && (
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <Confetti
              mode="boom"
              x={0.5}
              y={0.5}
              particleCount={580}
              spreadDeg={50}
              colors={["#FFD700", "#FF69B4", "#00FFFF", "#FF4500", "#00FF00"]}
              launchSpeed={1.5}
              effectCount={1}
            />
          </div>
        )}

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 15 }}
              className="relative z-40 overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-blue-950 p-4 shadow-2xl w-[300px]"
            >
              <Button
                size="icon"
                variant="ghost"
                className="absolute right-2 top-2 h-8 w-8 text-gray-400 hover:bg-gray-800 hover:text-white"
                onClick={() => setOpen(false)}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>

              <div className="flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-1 flex items-center gap-1 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1"
                >
                  <Calendar className="h-3 w-3 text-blue-400" />
                  <span className="text-xs font-medium text-blue-400">Check-in Successful!</span>
                </motion.div>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                  className="relative mb-6 mt-4"
                >
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-lg" />
                  <div className="relative flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 p-1">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-900">
                      <Flame className="h-7 w-7 text-blue-400" />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mb-1 flex items-center gap-2"
                >
                  <h2 className="text-4xl font-bold text-white">{streaks}</h2>
                  <div className="flex flex-col items-start">
                    <span className={cn("text-lg font-semibold", streaks > 10 ? "text-blue-400" : "text-gray-300")}>
                      {streaks === 1 ? "Day" : "Days"}
                    </span>
                    <span className="text-xs text-gray-400">streak</span>
                  </div>
                </motion.div>

                <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8 }}>
                  {streaks >= 7 && (
                    <div className="mb-2 flex items-center gap-1 rounded-full border border-blue-300/30 bg-blue-300/10 px-3 py-1">
                      <Award className="h-3 w-3 text-blue-300" />
                      <span className="text-xs font-medium text-blue-300">
                        {streaks >= 30 ? "Monthly Warrior!" : streaks >= 14 ? "2-Week Champion!" : "Week Completed!"}
                      </span>
                    </div>
                  )}

                  <p className="mb-3 text-xs text-gray-300">Keep up the great work!</p>

                  <div className="relative">
                    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 opacity-70 blur-sm" />
                    <Button
                      onClick={() => setOpen(false)}
                      className="relative w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 text-sm py-1"
                    >
                      Continue
                    </Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </AlertDialogContent>
    </AlertDialog>
  )
}
