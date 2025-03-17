"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import StatsCards from "@/components/Dashboard/Stories/StatsCards"
import StoryCard from "@/components/Dashboard/Stories/StoryCard"

const stories = [
  {
    id: 1,
    title: "Platform Origin Story",
    description: "Learn about how our platform was created",
    points: 2000,
    readTime: "5 min",
    category: "History",
    isNew: true,
  },
  {
    id: 2,
    title: "User Success Stories",
    description: "Read about how users are succeeding",
    points: 1000,
    readTime: "3 min",
    category: "Community",
    isNew: true,
  },
  {
    id: 3,
    title: "Future Roadmap",
    description: "Discover what's coming next for the platform",
    points: 5000,
    readTime: "10 min",
    category: "Updates",
    isNew: false,
  },
  {
    id: 4,
    title: "Founder's Journey",
    description: "The story behind our founder's vision",
    points: 1000,
    readTime: "7 min",
    category: "History",
    isNew: true,
  },
  {
    id: 5,
    title: "Community Guidelines",
    description: "Understanding our community values",
    points: 1000,
    readTime: "5 min",
    category: "Community",
    isNew: false,
  },
  {
    id: 6,
    title: "Platform Features",
    description: "Detailed overview of key features",
    points: 1000,
    readTime: "8 min",
    category: "Guide",
    isNew: false,
  },
  {
    id: 7,
    title: "Weekly Update",
    description: "Latest news and platform changes",
    points: 1000,
    readTime: "4 min",
    category: "Updates",
    isNew: true,
  },
  {
    id: 8,
    title: "Getting Started Guide",
    description: "Essential tips for new users",
    points: 1000,
    readTime: "6 min",
    category: "Guide",
    isNew: false,
  },
  {
    id: 9,
    title: "Behind the Scenes",
    description: "Meet the team building the platform",
    points: 1000,
    readTime: "5 min",
    category: "Community",
    isNew: true,
  },
]

const tabs = [
  {
    label: "New stories",
    slug: "new-stories",
  },
  {
    label: "Old stories",
    slug: "old-stories",
  },
]

const Stories: React.FC = () => {
  const [currentTab, setCurrentTab] = useState("new-stories")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredStories = stories.filter((story) => {
    const matchesSearch =
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTab = currentTab === "new-stories" ? story.isNew : !story.isNew
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
                placeholder="Search stories..."
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

      {/* Stories Grid */}
      {filteredStories.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredStories.map((story) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <StoryCard story={story} />
            </motion.div>
          ))}
        </div>
      ) : (
        <Card className="border-none bg-blue-900 text-white shadow-md">
          <CardContent className="py-12 flex flex-col items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-blue-950 flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold">No stories found</h3>
            <p className="text-blue-300 mt-2">Try adjusting your search or filter criteria</p>
            <Button
              className="mt-6 bg-secondary hover:bg-secondary/90 text-white"
              onClick={() => {
                setSearchQuery("")
                setCurrentTab("new-stories")
              }}
            >
              Reset Filters
            </Button>
          </CardContent>
        </Card>
      )}

      {/* View All Stories */}
      <Card className="border-none bg-blue-900 text-white shadow-md">
        <CardContent className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-medium">Looking for more stories?</h3>
              <p className="text-sm text-blue-300">Check back regularly for new content to read and earn points</p>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              View All Stories <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Stories

