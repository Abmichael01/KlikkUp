import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

interface StatCardProps {
    title: string
    value: string
    icon: React.ReactNode
    new_today: number;
}


const StatCard: React.FC<StatCardProps> = ({ title, value, icon, new_today }) => (
    <Card className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="text-primary">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-green-500 flex gap-1 items-center">
          + {new_today}
          <ArrowUpRight className="h-4 w-4" />
          <span className="">Today</span>
        </p>
      </CardContent>
    </Card>
  )

export default StatCard