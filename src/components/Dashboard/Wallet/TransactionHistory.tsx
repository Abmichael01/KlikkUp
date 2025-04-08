import type React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Award, ArrowUpRight, Gift, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import GradientCard from "@/components/ui/GradientCard"

// Simplified transaction data
const transactions = [
  {
    id: 1,
    title: "Quiz Competition Win",
    amount: 15000,
    type: "credit",
    category: "earnings",
    date: "15 Aug",
    icon: Trophy,
  },
  {
    id: 2,
    title: "Withdrawal to GTBank",
    amount: 10000,
    type: "debit",
    category: "withdrawal",
    date: "12 Aug",
    icon: ArrowUpRight,
  },
  {
    id: 3,
    title: "Referral Bonus",
    amount: 2500,
    type: "credit",
    category: "referral",
    date: "10 Aug",
    icon: Gift,
  },
  {
    id: 4,
    title: "Daily Challenge Win",
    amount: 5000,
    type: "credit",
    category: "earnings",
    date: "08 Aug",
    icon: Award,
  },
]

// Transaction item component to reduce complexity
const TransactionItem = ({ transaction }: { transaction: (typeof transactions)[0] }) => {
  const Icon = transaction.icon
  return (
    <div className="flex items-center p-2 rounded-lg hover:bg-white/10 transition-colors">
      <div
        className={`h-8 w-8 rounded-full flex items-center justify-center mr-2 ${
          transaction.type === "credit" ? "bg-green-100/20" : "bg-amber-100/20"
        }`}
      >
        <Icon className={`h-5 w-5 ${transaction.type === "credit" ? "text-green-300" : "text-amber-300"}`} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-medium text-sm text-white/90 truncate">{transaction.title}</p>
            <p className="text-[12px] text-white/60">{transaction.date}</p>
          </div>
          <div className="text-right">
            <p
              className={`font-semibold text-sm ${transaction.type === "credit" ? "text-green-300" : "text-amber-300"}`}
            >
              {transaction.type === "credit" ? "+" : "-"} ₦{transaction.amount.toLocaleString("en-NG")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const TransactionHistory: React.FC = () => {
  return (
    <GradientCard className="h-full">
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium text-white">Transaction History</h3>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 text-[14px] text-blue-100 hover:text-white hover:bg-white/10"
          >
            View All
          </Button>
        </div>

        <ScrollArea className="h-[280px] pr-2">
          <div className="space-y-1">
            {transactions.map((transaction) => (
              <TransactionItem key={transaction.id} transaction={transaction} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </GradientCard>
  )
}
