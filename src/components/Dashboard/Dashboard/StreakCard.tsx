import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Flame, Calendar, Star, Award, Sparkles } from "lucide-react"

interface StreakCardProps {
  data?: {
    streak: number
  }
}

const StreakCard = ({ data }: StreakCardProps) => {
  const streak = data?.streak || 0

  // Determine streak status and icon
  const getStreakStatus = () => {
    if (streak >= 10) return { label: "Legendary!", icon: <Award className="h-4 w-4 text-yellow-300" /> }
    if (streak >= 7) return { label: "Impressive!", icon: <Sparkles className="h-4 w-4 text-blue-300" /> }
    if (streak >= 3) return { label: "On fire!", icon: <Flame className="h-4 w-4 text-orange-400" /> }
    return { label: "", icon: null }
  }

  const streakStatus = getStreakStatus()

  return (
    <Card className="border-none shrink-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white shadow-xl w-full md:w-[300px] lg:w-[400px] rounded-xl overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 h-32 w-32 bg-gradient-radial from-blue-800/30 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 h-24 w-24 bg-gradient-radial from-blue-800/20 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDRhODAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10" />

      <CardHeader className="pb-2 relative z-10">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-lg font-bold">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 p-1.5 rounded-lg shadow-md relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <Flame className="h-5 w-5 text-white drop-shadow-sm" />
            </div>
            Current Streak
          </div>

          {streakStatus.label && (
            <div className="bg-gradient-to-r from-blue-800/60 to-blue-900/60 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-700/30 shadow-sm">
              <div className="flex items-center gap-1.5">
                {streakStatus.icon}
                <p className="text-xs font-medium text-blue-100">{streakStatus.label}</p>
              </div>
            </div>
          )}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10 pt-2">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-end gap-3">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-orange-500/30 to-transparent rounded-full blur-xl group-hover:from-orange-500/40 transition-all duration-300" />

              {/* Streak number container */}
              <div className="relative p-5 bg-gradient-to-br from-blue-800/90 to-blue-900 rounded-full border border-blue-700/50 shadow-inner flex items-center justify-center group-hover:from-blue-800 group-hover:to-blue-800/80 transition-all duration-300">
                {/* Subtle inner ring */}
                <div className="absolute inset-2 rounded-full border border-blue-700/20"></div>

                {/* Streak number */}
                <p className="text-5xl font-extrabold bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 bg-clip-text text-transparent drop-shadow-sm">
                  {streak}
                </p>
              </div>
              
            </div>

            <div className="mb-3 flex flex-col">
              <div className="flex items-center gap-1.5">
                <p className="text-lg font-medium text-blue-100">{streak === 1 ? "day" : "days"}</p>
                {streak >= 3 && <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />}
              </div>

              {streak > 0 && (
                <p className="text-xs text-blue-300 mt-1">
                  Started {streak-1 > 0 && streak} {streak-1 === 0 ? "Today" : "days ago"}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-blue-700/30 to-transparent my-3"></div>

        <div className="flex items-center gap-2 bg-gradient-to-r from-blue-800/40 to-blue-900/40 backdrop-blur-sm px-4 py-3 rounded-xl border border-blue-700/20">
          <Calendar className="h-4 w-4 text-blue-300" />
          <p className="text-sm text-blue-200 font-medium">Come back tomorrow to keep your streak</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default StreakCard
