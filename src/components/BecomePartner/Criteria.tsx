"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Star, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react"


const Criteria: React.FC = () => {
  const socialMediaCriteria = [
    {
      platform: "Instagram",
      icon: Instagram,
      requirement: "10,000+ Followers",
      color: "from-pink-500 to-purple-600",
    },
    {
      platform: "Facebook",
      icon: Facebook,
      requirement: "10,000+ Followers",
      color: "from-blue-600 to-blue-800",
    },
    {
      platform: "Twitter/X",
      icon: Twitter,
      requirement: "10,000+ Followers",
      color: "from-gray-800 to-black",
    },
    {
      platform: "WhatsApp",
      icon: MessageCircle,
      requirement: "5,000+ Views",
      color: "from-green-500 to-green-700",
    },
  ]

  return (
    <div className="mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4 px-3 py-1 bg-orange-50 text-orange-600 border-orange-200">
          <Star className="w-3.5 h-3.5 mr-1" /> Partner Requirements
        </Badge>
        <h2 className="text-3xl font-bold text-gray-800 mb-4 fancy-font">Do You Qualify?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          To become a KlikkUp partner, you need to meet our minimum social media requirements on at least one platform.
        </p>
      </div>

      {/* Criteria Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {socialMediaCriteria.map((criteria) => {
          const IconComponent = criteria.icon
          return (
            <Card key={criteria.platform} className="relative hover:shadow-lg transition-shadow duration-300 rounded-full">
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${criteria.color} flex items-center justify-center text-white`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{criteria.platform}</h3>
                <Badge variant="outline" className="bg-gray-50">
                  {criteria.requirement}
                </Badge>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Requirements Note */}
      <Card className="bg-blue-50 border-blue-200 mb-8">
        <CardContent className="p-6">
          <div className="flex items-start space-x-3">
            <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">Important Note</h4>
              <p className="text-blue-700 text-sm">
                You only need to meet the requirement for <strong>ONE</strong> of these platforms to qualify as a
                partner. We'll verify your follower count or view statistics during the application process.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>


      {/* Additional Info */}
      <div className="text-center mt-8">
        <p className="text-gray-600 text-sm">
          Questions about the requirements?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Contact our support team
          </a>
        </p>
      </div>
    </div>
  )
}

export default Criteria
