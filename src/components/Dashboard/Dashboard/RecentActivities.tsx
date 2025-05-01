import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RecentActivity } from "@/types"; // make sure this path matches your project

type RecentActivitiesProps = {
  data: RecentActivity[];
};

const RecentActivities: React.FC<RecentActivitiesProps> = ({ data }) => {
  return (
    <div>
      <Card className="border-none bg-blue-900 text-white shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data?.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-white/10 pb-3 last:border-0"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-orange-400"></div>
                  <div>
                    <p className="font-medium">
                      {item.activity_type === "task"
                        ? "Completed task"
                        : item.activity_type === "story"
                        ? "Completed story"
                        : item.activity_type === "checkin"
                        ? "Checked In"
                        : ""}
                    </p>
                    <p className="text-sm text-blue-300">
                      +{item.reward} points
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-green-400">+{item.reward}</p>
                  <p className="text-xs text-blue-300">{item.created_at}</p>
                </div>
              </div>
            ))}
            {data?.length === 0 && (
              <p className="">You haven't done any activity</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecentActivities;
