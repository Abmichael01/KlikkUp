import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const RecentActivities: React.FC = () => {
  return (
    <div>
        <Card className="border-none bg-blue-900 text-white shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Completed task", task: "Daily login", points: "+10", time: "Today, 9:30 AM" },
                { action: "Level up", task: "Reached Level 3", points: "+50", time: "Yesterday" },
                { action: "Referral bonus", task: "New user joined", points: "+500", time: "2 days ago" },
                { action: "Completed task", task: "Profile update", points: "+25", time: "3 days ago" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-blue-400"></div>
                    <div>
                      <p className="font-medium">{item.action}</p>
                      <p className="text-sm text-blue-300">{item.task}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-400">{item.points}</p>
                    <p className="text-xs text-blue-300">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Button variant="link" className="text-blue-300 hover:text-white">
                View All Activity
              </Button>
            </div>
          </CardContent>
        </Card>
    </div>
  )
}

export default RecentActivities