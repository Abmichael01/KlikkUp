import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Gift, ClipboardList, BookOpen } from 'lucide-react'
import { Chart } from '@/components/Admin/Chart'
import StatCard from '@/components/Admin/StatCard'

// Mock data - replace with actual API calls in a real application
const userData = [
  { name: '1 day', users: 400 },
  { name: '7 days', users: 3000 },
  { name: '2 weeks', users: 5000 },
  { name: '1 month', users: 8000 },
]

const taskData = [
  { name: '1 day', tasks: 50 },
  { name: '7 days', tasks: 300 },
  { name: '2 weeks', tasks: 600 },
  { name: '1 month', tasks: 1200 },
]

const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold text-gray-700">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Users" value="10,245" icon={<Users className="h-6 w-6" />} change="+5.25%" />
        <StatCard title="Coupons Bought" value="1,876" icon={<Gift className="h-6 w-6" />} change="+3.2%" />
        <StatCard title="Total Tasks" value="5,432" icon={<ClipboardList className="h-6 w-6" />} change="+7.5%" />
        <StatCard title="Total Stories" value="892" icon={<BookOpen className="h-6 w-6" />} change="+2.1%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard 
          title="User Growth" 
          description="New user signups over time"
          data={userData} 
          dataKey="users"
        />
        <ChartCard 
          title="Task Completion" 
          description="Tasks completed by users over time"
          data={taskData} 
          dataKey="tasks"
        />
      </div>
    </div>
  )
}





interface ChartCardProps {
  title: string
  description: string
  data: Array<{ name: string } & { [key: string]: number | string }>
  dataKey: string
}

const ChartCard: React.FC<ChartCardProps> = ({ title, description }) => (
  <Card className="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="h-[300px]">
      <Chart />
    </CardContent>
  </Card>
)

export default AdminDashboard