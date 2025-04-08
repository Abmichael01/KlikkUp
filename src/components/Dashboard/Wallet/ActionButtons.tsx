"use client"

import type React from "react"
import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, CreditCard, Send } from "lucide-react"
import GradientCard from "@/components/ui/GradientCard"

export const ActionButtons: React.FC<{
  onWithdraw: () => void
  onAddBank: () => void
  onTransfer: () => void
}> = ({ onWithdraw, onAddBank, onTransfer }) => {
  return (
    <GradientCard>
      <CardContent className="p-4">
        <div className="grid grid-cols-3 gap-3">
          <Button
            variant="outline"
            className="flex flex-col items-center justify-center h-20 py-2 px-2 border-green-100 hover:bg-green-50 hover:text-green-700"
            onClick={onWithdraw}
          >
            <ArrowUpRight className="h-5 w-5 mb-1 text-green-600" />
            <span className="text-xs font-medium">Withdraw</span>
          </Button>

          <Button
            variant="outline"
            className="flex flex-col items-center justify-center h-20 py-2 px-2 border-green-100 hover:bg-green-50 hover:text-green-700"
            onClick={onAddBank}
          >
            <CreditCard className="h-5 w-5 mb-1 text-green-600" />
            <span className="text-xs font-medium">Add Bank</span>
          </Button>

          <Button
            variant="outline"
            className="flex flex-col items-center justify-center h-20 py-2 px-2 border-green-100 hover:bg-green-50 hover:text-green-700"
            onClick={onTransfer}
          >
            <Send className="h-5 w-5 mb-1 text-green-600" />
            <span className="text-xs font-medium">Transfer</span>
          </Button>
        </div>
      </CardContent>
    </GradientCard>
  )
}
