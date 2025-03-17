"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, CheckCircle, Clock, ArrowLeft, TrendingUp, Timer } from "lucide-react"
import { Link } from "react-router"
import { toast } from "@/hooks/use-toast"
import { motion, useInView } from "framer-motion"
import { Progress } from "@/components/ui/progress"

// Mock story data - in a real app, you would fetch this from an API
const mockStory = {
  id: "1",
  title: "Platform Origin Story",
  content: `
    In the early days of 2023, a small team of developers and designers gathered in a cramped office space with a vision to revolutionize the way people interact with digital content.

    The idea was simple yet ambitious: create a platform that rewards users for their engagement and participation. The team believed that users should be compensated for the value they bring to platforms, rather than having their data harvested without compensation.

    The first few months were challenging. The team worked tirelessly, often pulling all-nighters to build the initial prototype. They faced numerous technical hurdles and had to pivot their approach several times. But their determination never wavered.

    By mid-2023, they had a working prototype that they began testing with a small group of users. The feedback was overwhelmingly positive, with users particularly excited about the points system and the potential for future rewards.

    As word spread, more users joined the platform, creating a vibrant community of early adopters. These users provided invaluable feedback that helped shape the platform's development.

    The team expanded, bringing in experts in blockchain technology, user experience design, and community management. Each new team member brought fresh perspectives and ideas that enriched the platform.

    By the end of 2023, the platform had grown significantly, with thousands of active users engaging with content, completing tasks, and earning points. The team secured funding from investors who believed in their vision of a user-centric digital ecosystem.

    2024 marked a year of rapid growth and innovation. New features were added, the user interface was refined, and partnerships were formed with content creators and brands. The platform's unique approach to user rewards gained attention in the tech industry, with several publications featuring articles about the innovative model.

    The points system evolved into a sophisticated ecosystem, with users able to earn points through various activities and redeem them for a growing list of rewards. The introduction of the referral program further accelerated growth, as satisfied users invited friends and family to join.

    Today, the platform continues to grow and evolve. The team remains committed to their original vision: creating a digital space where users are valued and rewarded for their contributions. They are constantly exploring new ways to enhance the user experience and expand the rewards ecosystem.

    The journey has been challenging but rewarding. From a small idea in a cramped office to a thriving platform with a dedicated community, the story of our platform is a testament to the power of innovation, perseverance, and putting users first.

    As we look to the future, we are excited about the possibilities that lie ahead. New technologies, expanding partnerships, and a growing community all point to a bright future for our platform and its users.

    Thank you for being part of this journey. Whether you're a new user or have been with us from the beginning, you are an essential part of our story. Together, we are building something truly special.
  `,
  readTime: "5 min",
  category: "History",
  points: 2000,
}

// Minimum reading time in seconds
const MIN_READING_TIME = 120 // 1 minute

const Story: React.FC = () => {
  const [isCompleted, setIsCompleted] = useState(false)
  const [elapsedTime, setElapsedTime] = useState(0)
  const buttonRef = useRef(null)

  // Use Framer Motion's useInView to detect when the button is in view
  const isInView = useInView(buttonRef, { once: true, amount: 0.5 })

  // In a real app, you would fetch the story based on ID or route params
  const story = mockStory

  // Start timer when component mounts
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedTime((prev) => {
        if (prev >= MIN_READING_TIME) {
          clearInterval(timer)
          return MIN_READING_TIME
        }
        return prev + 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Calculate time progress percentage
  const timeProgress = Math.min((elapsedTime / MIN_READING_TIME) * 100, 100)

  // Format remaining time
  const formatRemainingTime = () => {
    const remaining = Math.max(MIN_READING_TIME - elapsedTime, 0)
    const minutes = Math.floor(remaining / 60)
    const seconds = remaining % 60
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  // Check if both conditions are met: scrolled to bottom and minimum time elapsed
  const canComplete = isInView && elapsedTime >= MIN_READING_TIME

  const handleComplete = () => {
    setIsCompleted(true)

    // In a real app, you would make an API call to mark the story as read
    // and award points to the user
    toast({
      title: "Story completed!",
      description: `You've earned ${story.points} points for reading this story.`,
    })
  }

  // Format content with paragraphs
  const formattedContent = story.content.split("\n\n").map((paragraph, index) => (
    <p key={index} className="mb-4">
      {paragraph}
    </p>
  ))

  return (
    <div className="container mx-auto max-w-3xl">
      <div className="mb-6">
        <Link to="/stories" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Stories
        </Link>
      </div>

      <Card className="border-none bg-blue-950 text-white shadow-md w-full">
        <CardHeader className="border-b border-blue-800 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-blue-300">
              <BookOpen className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-300">
              <Clock className="h-4 w-4" />
              <span>{story.readTime} read</span>
            </div>
          </div>
          <CardTitle className="text-2xl mt-2 text-white">{story.title}</CardTitle>
        </CardHeader>

        {/* Reading timer progress */}
        <div className="px-6 py-2 border-b border-blue-800">
          <div className="flex items-center justify-between text-xs text-blue-300 mb-1">
            <span className="flex items-center">
              <Timer className="h-3 w-3 mr-1" />
              Reading time
            </span>
            {elapsedTime < MIN_READING_TIME ? (
              <span>{formatRemainingTime()} remaining</span>
            ) : (
              <span className="text-green-400">Minimum time reached</span>
            )}
          </div>
          <Progress value={timeProgress} className="h-1 bg-blue-900/50" />
        </div>

        <CardContent className="p-6 text-blue-100">{formattedContent}</CardContent>

        <CardFooter ref={buttonRef} className="flex justify-between items-center border-t border-blue-800 p-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-secondary" />
            <div className="text-sm">
              <span className="font-medium text-secondary">{story.points}</span>
              <span className="text-blue-300 ml-1">points upon completion</span>
            </div>
          </div>

          <Button
            onClick={handleComplete}
            disabled={!canComplete || isCompleted}
            className={isCompleted ? "bg-green-600 hover:bg-green-700" : "bg-secondary hover:bg-secondary/90"}
          >
            {isCompleted ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Completed
              </>
            ) : (
              "Mark as Done"
            )}
          </Button>
        </CardFooter>
      </Card>

      {!canComplete && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 left-0 right-0 mx-auto w-max z-10"
        >
          <div className="p-3 bg-blue-900/80 text-blue-300 border border-blue-800 rounded-md text-sm flex items-center backdrop-blur-sm shadow-lg">
            {!isInView ? (
              <>
                <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                <p>Continue reading to the end to earn points</p>
              </>
            ) : elapsedTime < MIN_READING_TIME ? (
              <>
                <Timer className="h-4 w-4 mr-2 flex-shrink-0" />
                <p>Please wait {formatRemainingTime()} before completing</p>
              </>
            ) : null}
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default Story

