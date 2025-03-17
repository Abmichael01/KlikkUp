import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Clock, BookMarked, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router"

interface StoryCardProps {
  story: {
    id: number
    title: string
    description: string
    points: number
    readTime: string
    category: string
    isNew: boolean
  }
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  return (
    <Card className="h-full border-none bg-blue-900 text-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center justify-center py-12 bg-gradient-to-b from-blue-950 via-gray-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0,transparent_70%)]"></div>
        <BookOpen className="w-16 h-16 text-secondary relative z-10" />
        {story.isNew && <Badge className="absolute top-3 right-3 bg-secondary text-white">New</Badge>}
      </div>
      <CardContent className="p-5 flex flex-col gap-3">
        <div>
          <h3 className="font-semibold text-lg">{story.title}</h3>
          <p className="text-sm text-blue-300 mt-1">{story.description}</p>
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-blue-300" />
            <span className="text-xs text-blue-300">{story.readTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookMarked className="h-3.5 w-3.5 text-blue-300" />
            <span className="text-xs text-blue-300">{story.category}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-blue-800">
          <div className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4 text-secondary" />
            <span className="font-bold">{story.points}</span>
            <span className="text-xs text-blue-300">Klikks</span>
          </div>
          <Link to="/story/8828282" className="bg-secondary px-8 text-sm py-2 hover:bg-secondary/90 rounded-full">
            Read
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

export default StoryCard
