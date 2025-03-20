import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Gift, Clock, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const AdditionalInfo: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="border-none bg-blue-900 text-white shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <Gift className="h-5 w-5 text-secondary" />
            Airdrop Eligibility
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {[
              "Maintain a minimum of 10,000 points",
              "Complete at least 5 tasks per month",
              "Refer at least 2 active users",
              "Maintain an active streak of 30+ days",
              "Participate in community events",
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="h-5 w-5 rounded-full bg-secondary/20 flex items-center justify-center mt-0.5">
                  <span className="text-xs text-secondary font-bold">{index + 1}</span>
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Button className="w-full mt-6 bg-secondary hover:bg-secondary/90">Check Your Eligibility</Button>
        </CardContent>
      </Card>

      <Card className="border-none bg-blue-900 text-white shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-secondary" />
            Previous Airdrops
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { date: "January 15, 2025", participants: "15,432", totalPoints: "2.5M" },
              { date: "October 10, 2024", participants: "8,765", totalPoints: "1.2M" },
            ].map((airdrop, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-blue-800 pb-3 last:border-0"
              >
                <div>
                  <p className="font-medium">{airdrop.date}</p>
                  <p className="text-sm text-blue-300">{airdrop.participants} participants</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-secondary">{airdrop.totalPoints}</p>
                  <p className="text-xs text-blue-300">total points</p>
                </div>
              </div>
            ))}
            <div className="pt-2">
              <Button variant="link" className="text-blue-300 hover:text-white p-0">
                View All History <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdditionalInfo
