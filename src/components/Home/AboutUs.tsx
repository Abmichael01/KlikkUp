import type React from "react"
import { Check, Zap, Star } from "lucide-react"
import MainPadding from "@/layouts/MainPadding"
import { motion } from "framer-motion"

const activities = ["Reading stories", "Watching YouTube videos", "Completing tasks & challenges"]

const AboutUs: React.FC = () => {
  return (
    <MainPadding className="relative bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" id="about-us">
        <div className="absolute w-96 h-96 bg-secondary opacity-10 rounded-full -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-secondary opacity-10 rounded-full -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center relative fancy-font"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us – KlikkUp
          <Star className="absolute top-0 right-0 text-secondary animate-spin-slow" size={24} />
        </motion.h1>
        <motion.div
          className="space-y-6 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-center mb-8 text-2xl font-semibold">
            Welcome to KlikkUp – The Future of Reward-Based Engagement!
          </p>
          <p className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            At KlikkUp, we believe that your time and engagement should be rewarded. Our platform is designed to
            revolutionize the way users interact with content by allowing them to earn points through simple activities
            like:
          </p>
          <ul className="space-y-4 my-8">
            {activities.map((activity, index) => (
              <motion.li
                key={index}
                className="flex items-center bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
              >
                <Check className="text-secondary mr-4 flex-shrink-0" />
                <span>{activity}</span>
              </motion.li>
            ))}
          </ul>
          <p className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            These points can later be converted into tokens, giving you real value for your participation!
          </p>
        </motion.div>
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <a
            href="#learn-more"
            className="inline-flex items-center bg-secondary text-primary px-6 py-3 rounded-full font-semibold hover:bg-secondary-light transition-colors duration-300 group"
          >
            Learn More
            <Zap className="ml-2 group-hover:animate-pulse" />
          </a>
        </motion.div>
      </div>
    </MainPadding>
  )
}

export default AboutUs

