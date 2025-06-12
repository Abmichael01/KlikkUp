import { CardContent } from '@/components/ui/card'
import GradientCard from '@/components/ui/GradientCard'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Trophy, Users, CheckCircle, Star, Zap, UsersIcon } from 'lucide-react'
import { motion } from 'framer-motion'

// Mock data (replace with API data later)
const giveawayTips = [
    {
        id: 1,
        title: "Complete Daily Tasks",
        content: "Stay active and complete tasks regularly to increase your chances.",
        icon: CheckCircle,
        color: "text-green-400"
    },
    {
        id: 2,
        title: "Maintain High Activity",
        content: "Users with consistent platform engagement have higher chances of winning.",
        icon: Star,
        color: "text-yellow-400"
    },
    {
        id: 3,
        title: "Refer More Users",
        content: "Invite your friends to join KlikkUp and boost your winning chances.",
        icon: UsersIcon,
        color: "text-blue-400"
    }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const Giveaway: React.FC = () => {
  // Replace with actual API state
  const isGiveawayActive = true
  const totalParticipants = 47832 // Replace with real data
  const timeLeft = "15 days" // Replace with real countdown

  if (!isGiveawayActive) {
    return (
      <GradientCard>
        <CardContent className="text-center p-12">
          <Trophy className="w-16 h-16 text-white/50 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">No Active Giveaway</h2>
          <p className="text-white/80 text-lg">Check back later for new giveaway announcements!</p>
        </CardContent>
      </GradientCard>
    )
  }

  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Giveaway Card */}
      <motion.div variants={itemVariants}>
        <GradientCard className="border-2 border-blue-400/30">
          <CardContent className="text-center p-12">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
              <h1 className="text-5xl font-bold text-white mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                ₦5,000,000
              </h1>
              <p className="text-2xl text-white/90 mb-2">Grand Giveaway!</p>
              <p className="text-white/70 mb-8 text-lg">For All Active KlikkUp Users</p>
              
              <div className="flex justify-center items-center gap-8 mb-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-white/80 mb-1">
                    <Users className="w-5 h-5" />
                    <span className="text-sm font-medium">Participants</span>
                  </div>
                  <p className="text-2xl font-bold text-blue-300">{totalParticipants.toLocaleString()}</p>
                </div>
                
                <div className="w-px h-12 bg-white/20"></div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-white/80 mb-1">
                    <Zap className="w-5 h-5" />
                    <span className="text-sm font-medium">Time Left</span>
                  </div>
                  <p className="text-2xl font-bold text-orange-300">{timeLeft}</p>
                </div>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg px-8 py-3 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
              >
                🎉 Participate Now
              </Button>
            </motion.div>
          </CardContent>
        </GradientCard>
      </motion.div>

      {/* Competition Stats */}
      <motion.div variants={itemVariants}>
        <GradientCard bg="bg-gradient-to-br from-purple-900 to-indigo-950">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">Competition Overview</h2>
              <p className="text-white/70">You're competing with thousands of users for the grand prize!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-1">{totalParticipants.toLocaleString()}</h3>
                <p className="text-white/60 text-sm">Total Participants</p>
              </div>
              
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-1">₦5M</h3>
                <p className="text-white/60 text-sm">Prize Pool</p>
              </div>
              
              <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                <Zap className="w-12 h-12 text-orange-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-white mb-1">{timeLeft}</h3>
                <p className="text-white/60 text-sm">Remaining</p>
              </div>
            </div>
          </CardContent>
        </GradientCard>
      </motion.div>

      {/* Tips Section */}
      <motion.div variants={itemVariants}>
        <GradientCard bg="bg-gradient-to-br from-emerald-900 to-teal-950">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-3">How to be a Lucky Winner</h2>
              <p className="text-white/70 text-lg">Follow these tips to maximize your chances of winning</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {giveawayTips.map((tip, index) => {
                const IconComponent = tip.icon
                return (
                  <motion.div
                    key={tip.id}
                    className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-white/20"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-white/10 rounded-full mr-4 group-hover:bg-white/20 transition-colors">
                        <IconComponent className={`w-6 h-6 ${tip.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-white/90">
                        {tip.title}
                      </h3>
                    </div>
                    <p className="text-white/70 leading-relaxed group-hover:text-white/80">
                      {tip.content}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </CardContent>
        </GradientCard>
      </motion.div>
    </motion.div>
  )
}

export default Giveaway