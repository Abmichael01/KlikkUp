import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Gift, ClipboardList, BookOpen } from "lucide-react";
import { Chart } from "@/components/Admin/Chart";
import StatCard from "@/components/Admin/StatCard";
import { useAnalyticsData } from "@/api/queries";
import { DailyCountLineChart } from "@/components/Admin/Dashboard/DailyCountLineChart";
import { AnalyticsData } from "@/types";

// Mock data - replace with actual API calls in a real application
const userData = [
  { name: "1 day", users: 400 },
  { name: "7 days", users: 3000 },
  { name: "2 weeks", users: 5000 },
  { name: "1 month", users: 8000 },
];

const taskData = [
  { name: "1 day", tasks: 50 },
  { name: "7 days", tasks: 300 },
  { name: "2 weeks", tasks: 600 },
  { name: "1 month", tasks: 1200 },
];

const AdminDashboard: React.FC = () => {
  const { data } = useAnalyticsData();

  return (
    <div className="space-y-6">
      <h1 className="text-xl md:text-3xl font-semibold fancy-font text-gray-700">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Users"
          value={String(data?.users?.total)}
          icon={<Users className="h-6 w-6" />}
          new_today={data?.users.new_today as number}
        />
        <StatCard
          title="Coupons Sold"
          value={String(data?.coupons?.sold)}
          icon={<Gift className="h-6 w-6" />}
          new_today={data?.coupons.new_today as number}
        />
        <StatCard
          title="Tasks Completed"
          value={String(data?.tasks?.completed)}
          icon={<ClipboardList className="h-6 w-6" />}
          new_today={data?.tasks.new_today as number}
        />
        <StatCard
          title="Stories Read"
          value={String(data?.stories?.completed)}
          icon={<BookOpen className="h-6 w-6" />}
          new_today={data?.stories.new_today as number}
        />
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
        <DailyCountLineChart data={data as AnalyticsData} />
      </div>
    </div>
  );
};

interface ChartCardProps {
  title: string;
  description: string;
  data: Array<{ name: string } & { [key: string]: number | string }>;
  dataKey: string;
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
);

export default AdminDashboard;
