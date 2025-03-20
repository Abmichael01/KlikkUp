"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Gift, Clock, CheckCircle, AlertCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Define the airdrop data structure
interface AirdropData {
  id: string
  type: string
  title: string
  description: string
  rules: string[]
  eligibility: string
  deadline?: string
  isActive: boolean
}

const SpecialAirdrop: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  // This array would be replaced with an API call in a real implementation
  const airdrops: AirdropData[] = [
    {
      id: "airtime-airdrop",
      type: "Airtime",
      title: "Special Airtime Airdrop",
      description:
        "Participate in our special Airtime Airdrop and earn exclusive rewards. Complete the required tasks to qualify for free airtime credits that will be sent directly to your registered phone number.",
      rules: [
        "Complete at least 5 tasks on the platform",
        "Maintain an active streak of 7+ days",
        "Refer at least 1 active user",
        "Engage with at least 3 community posts",
      ],
      eligibility:
        "All users are eligible to participate in this airdrop. New users must complete their profile setup to qualify.",
      deadline: "May 21, 2025 at 11:59 PM UTC",
      isActive: true,
    },
    {
      id: "token-airdrop",
      type: "Token",
      title: "Governance Token Airdrop",
      description:
        "Earn governance tokens by participating in our community activities and demonstrating your commitment to the platform's growth.",
      rules: [
        "Vote on at least 3 governance proposals",
        "Hold a minimum balance of 100 points",
        "Be an active member for at least 30 days",
        "Complete your profile verification",
      ],
      eligibility: "All verified users with completed KYC are eligible for this exclusive token airdrop.",
      deadline: "June 15, 2025 at 11:59 PM UTC",
      isActive: true,
    },
    {
      id: "nft-airdrop",
      type: "NFT",
      title: "Exclusive NFT Collection Airdrop",
      description:
        "Get early access to our limited edition NFT collection by participating in this special airdrop event.",
      rules: [
        "Hold at least 500 platform points",
        "Complete all available tasks",
        "Share our platform on at least 2 social media channels",
        "Participate in at least one community event",
      ],
      eligibility: "All users who have been active for at least 14 days are eligible to participate.",
      deadline: "April 30, 2025 at 11:59 PM UTC",
      isActive: false,
    },
  ]

  // For demonstration, we'll use the first airdrop in the array
  const airdrop = airdrops[0]

  return (
    <div className="relative p-1 rounded-xl overflow-">
      {/* Glow effect when open */}
      <div className="absolute rounded-xl blur-sm opacity-[0.8] inset-0 bg-secondary animate-right-to-lef"></div>
      <Card
        className={cn(
          "border-none bg-blue-800 text-white shadow-md overflow-hidden transition-all duration-300 relative z-10",
          isOpen && "shadow-lg shadow-secondary/20",
        )}
      >
        {/* <div className="size-20 w-[40%] blur-3xl bg-gradient-to-r from-yellow-400 to-secondary absolute right-[-10px] opacity-[0.8]"></div> */}
        <Accordion type="single" collapsible className="w-full" onValueChange={(value) => setIsOpen(!!value)}>
          <AccordionItem value="airdrop-details" className="border-b-0">
            <AccordionTrigger className={cn("px-6 py-4 hover:no-underline group", isOpen && "bg-blue-900/50")}>
              <div className="flex items-center gap-3 text-left">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300",
                    isOpen ? "bg-secondary/20 text-secondary" : "bg-blue-900 text-blue-300",
                  )}
                >
                  <Gift className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{airdrop.title}</h3>
                    <div
                      className={cn(
                        "px-2 py-0.5 rounded-full text-xs",
                        airdrop.isActive ? "bg-green-700/90 text-white" : "bg-red-500/20 text-red-400",
                      )}
                    >
                      {airdrop.isActive ? "Active" : "Ended"}
                    </div>
                  </div>
                  <p className="text-sm text-blue-300">{airdrop.type} Airdrop</p>
                </div>
              </div>
              
            </AccordionTrigger>

            <AccordionContent className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6 pt-2"
              >
                {/* Description */}
                <div className="mb-4">
                  <h4 className="text-secondary font-semibold mb-2">Description</h4>
                  <p className="text-blue-100">{airdrop.description}</p>
                </div>

                {/* Rules */}
                <div className="mb-4">
                  <h4 className="text-secondary font-semibold mb-2">Rules & Requirements</h4>
                  <ul className="space-y-2">
                    {airdrop.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-2 text-blue-100">
                        <CheckCircle className="h-4 w-4 text-secondary mt-1 shrink-0" />
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Eligibility */}
                <div className="mb-4">
                  <h4 className="text-secondary font-semibold mb-2">Eligibility</h4>
                  <div className="flex items-start gap-2 text-blue-100">
                    <AlertCircle className="h-4 w-4 text-blue-300 mt-1 shrink-0" />
                    <p>{airdrop.eligibility}</p>
                  </div>
                </div>

                {/* Deadline if provided */}
                {airdrop.deadline && (
                  <div className="mb-6">
                    <h4 className="text-secondary font-medium mb-2">Deadline</h4>
                    <div className="flex items-center gap-2 text-blue-100">
                      <Clock className="h-4 w-4 text-blue-300" />
                      <p>{airdrop.deadline}</p>
                    </div>
                  </div>
                )}

                {/* Action button */}
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-white" disabled={!airdrop.isActive}>
                  {airdrop.isActive ? "Participate Now" : "Airdrop Ended"}
                </Button>
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  )
}

export default SpecialAirdrop

