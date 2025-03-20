"use client"

import type React from "react"
import { useState, useEffect } from "react"
import StatsCards from "@/components/Dashboard/Airdrop/StatsCards"
import CountdownTimer from "@/components/Dashboard/Airdrop/CountdownTimer"
import AnimationSection from "@/components/Dashboard/Airdrop/AnimationSection"
import AdditionalInfo from "@/components/Dashboard/Airdrop/AdditionalInfo"
import SpecialAirdrop from "@/components/Dashboard/Airdrop/SpecialAirdrop"

const Airdrop: React.FC = () => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const targetDate = new Date("2025-05-21T00:00:00")
      const currentDate = new Date()
      const difference = targetDate.getTime() - currentDate.getTime()

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      return { days, hours, minutes, seconds }
    }

    setTimeRemaining(calculateTimeRemaining())

    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col gap-10">
      <StatsCards />
      <SpecialAirdrop />
      <CountdownTimer timeRemaining={timeRemaining} />
      <AnimationSection />
      <AdditionalInfo />
    </div>
  )
}

export default Airdrop

