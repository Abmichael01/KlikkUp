import MainPadding from "@/layouts/MainPadding"
import { ChevronRightCircle, Star } from "lucide-react"
import type React from "react"

const whys = [
  {
    title: "Simple & User-Friendly",
    description: "A platform designed with you in mind, easy to navigate and enjoy.",
    icon: "🌟",
  },
  {
    title: "Earn While You Learn",
    description: "Enjoy content while accumulating valuable points for your engagement.",
    icon: "💰",
  },
  {
    title: "Future Investment",
    description: "Build your portfolio with a platform that grows with you.",
    icon: "📈",
  },
  {
    title: "Your Time is Valued",
    description: "We recognize and reward your time and engagement on our platform.",
    icon: "⏰",
  },
]

const WhyJoin: React.FC = () => {
  return (
    <MainPadding className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 fancy-font">
          Why{" "}
          <span className="text-primary relative">
            Join
            <Star className="absolute -top-6 -right-8 text-secondary w-8 h-8 animate-pulse" />
          </span>{" "}
          Klikk Up
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {whys.map((why, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="bg-primary p-4 flex items-center">
                <div className="bg-white rounded-full p-2 mr-4">
                  <span className="text-2xl" role="img" aria-label={why.title}>
                    {why.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white">{why.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600">{why.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainPadding>
  )
}

export default WhyJoin

