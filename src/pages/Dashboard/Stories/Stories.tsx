"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import StatsCards from "@/components/Dashboard/Stories/StatsCards"
import StoryCard from "@/components/Dashboard/Stories/StoryCard"
import { useStoriesData } from "@/api/queries"
import { StoriesData, Story } from "@/types"
import PageIsLoading from "@/components/Dashboard/PageIsLoading"



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
  
  const { data, isLoading } = useStoriesData()
  
  const displayedStories = currentTab === "new-stories" ? data?.new_stories : data?.stories_read as Story[];

  const filteredStories = displayedStories

  if(isLoading) return <PageIsLoading />

  return (
    <div className="flex flex-col gap-6">
      <StatsCards data={data as StoriesData} />

      {/* Search and Filter */}
      <Card className="border-none bg-blue-950 text-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
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
      {(filteredStories?.length ?? 0) > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredStories?.map((story) => (
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

