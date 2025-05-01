import type React from "react"
import { Coins, Globe, Zap } from "lucide-react"
import MainPadding from "@/layouts/MainPadding"
import { motion } from "framer-motion"

const reasons = [
  {
    icon: Coins,
    title: "Earn While You Engage",
    description: "Every action counts towards rewards.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Join a growing network of users and content creators.",
  },
]

const WhyChooseUs: React.FC = () => {
  return (
    <MainPadding className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center fancy-font"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose KlikkUp?
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white/10 rounded-lg p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              <reason.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center bg-white/10 rounded-lg p-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <p className="text-lg mb-6">
            KlikkUp is more than just a platform – it's a movement towards a fairer, user-centric digital economy. Join
            us today and start earning while you engage!
          </p>
          <a
            href="#join-now"
            className="inline-flex items-center bg-secondary text-primary px-6 py-3 rounded-full font-semibold hover:bg-secondary-light transition-colors duration-300 group"
          >
            Join the Movement
            <Zap className="ml-2 group-hover:animate-pulse" />
          </a>
        </motion.div>
      </div>
    </MainPadding>
  )
}

export default WhyChooseUs

