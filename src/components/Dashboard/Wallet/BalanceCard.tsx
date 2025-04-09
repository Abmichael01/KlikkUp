"use client"

import type React from "react"
import { useState } from "react"
import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff, Award } from "lucide-react"
import { cn } from "@/lib/utils"
import GradientCard from "@/components/ui/GradientCard"
import { useWalletStore } from "@/stores/walletStore"



export const BalanceCard: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true)
  const { walletDetails } = useWalletStore()
  // Mock data
  
  const currency = "₦" // Nigerian Naira

  return (
    <div className="space-y-6">
      {/* Earnings Card */}
      <GradientCard className="w-full rounded-xl overflow-hidden shadow-lg">
        {/* Card content */}
        <CardContent className="relative p-6 flex flex-col justify-between text-white gap-14">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-light opacity-80">Available Balance</p>
              <p className="text-3xl font-bold mt-1">
                {showBalance ? `${currency}${walletDetails.balance}` : "••••••"}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowBalance(!showBalance)}
              className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              {showBalance ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </Button>
          </div>

          <div className="flex items-center gap-2 ">
            <Award className="h-5 w-5" />
            <span className="text-sm font-medium">Klikk Up Earnings Wallet</span>
          </div>
        </CardContent>
      </GradientCard>

      {/* Earnings Summary */}
      <GradientCard className="p-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <p className="text-xs text-gray-500 mb-1"> Earned</p>
            <p className={cn("font-semibold text-green-600", !showBalance && "text-gray-400")}>
              {showBalance ? `${currency}${walletDetails.earned}` : "••••••"}
            </p>
          </div>

          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <p className="text-xs text-gray-500 mb-1"> Withdrawn</p>
            <p className={cn("font-semibold text-blue-600", !showBalance && "text-gray-400")}>
              {showBalance ? `${currency}${walletDetails.withdrawn}` : "••••••"}
            </p>
          </div>

          <div className="text-center p-3 bg-amber-50 rounded-lg">
            <p className="text-xs text-gray-500 mb-1">Pending</p>
            <p className={cn("font-semibold text-amber-600", !showBalance && "text-gray-400")}>
              {showBalance ? `${currency}${walletDetails.pending_withdrawal}` : "••••••"}
            </p>
          </div>
        </div>
      </GradientCard>
    </div>
  )
}
