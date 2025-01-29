import MainPadding from "@/layouts/MainPadding"
import { Check } from "lucide-react"
import type React from "react"

const steps = [
  {
    title: "Sign Up",
    description: "Create an account and get a bonus of 500 points.",
    icon: "🎉",
  },
  {
    title: "Complete Tasks",
    description: "Engage in reading, watching videos, and interactive content.",
    icon: "✅",
  },
  {
    title: "Earn Points",
    description: "Accumulate points for each completed task.",
    icon: "🏆",
  },
  {
    title: "Convert to Tokens",
    description: "Transform your earned points into valuable tokens.",
    icon: "💱",
  },
  {
    title: "Use or Withdraw",
    description: "Spend tokens in the ecosystem or withdraw them.",
    icon: "💰",
  },
]

const HowItWorks: React.FC = () => {
  return (
    <MainPadding className="bg-primary py-20">
      <div className="max-w-4xl mx-auto" id="how-it-works">
        <h2 className="text-3xl md:text-5xl text-center text-white fancy-font font-bold mb-12">How It Works</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <h3 className="text-xl font-bold text-primary">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
              <div className="mt-4 flex items-center text-secondary">
                <Check size={20} className="mr-2" />
                <span className="font-semibold">Step {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainPadding>
  )
}

export default HowItWorks

