"use client";

import type React from "react";
import { useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import StatsCards from "@/components/Dashboard/Tasks/StatsCards";
import TaskCard from "@/components/Dashboard/Tasks/TaskCard";
import { useTasksData } from "@/api/queries";
import PageIsLoading from "@/components/Dashboard/PageIsLoading";
import { Task, TasksData } from "@/types";
import GradientCard from "@/components/ui/GradientCard";

const tabs = [
  {
    label: "New",
    slug: "new-tasks",
  },
  {
    label: "Done",
    slug: "completed-tasks",
  },
  {
    label: "Missed",
    slug: "missed-tasks",
  },
];

const Tasks: React.FC = () => {
  const [currentTab, setCurrentTab] = useState("new-tasks");

  const { data, isLoading } = useTasksData();

  if (isLoading) return <PageIsLoading />;

  // Determine which tasks to display based on the current tab
  const displayedTasks =
    currentTab === "new-tasks"
      ? data?.available_tasks
      : currentTab === "missed-tasks"
      ? data?.missed_tasks
      : (data?.completed_tasks as Task[]);

  // Filter tasks based on the search query
  const filteredTasks = displayedTasks;

  console.log(data);

  return (
    <div className="flex flex-col gap-6">
      <StatsCards data={data as TasksData} />

      {/* Search and Filter */}
      <GradientCard className="border-none bg-blue-950 text-white shadow-md">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  className={cn(
                    "text-center px-6 py-2 text-sm font-medium rounded-lg border border-blue-800 transition-colors",
                    tab.slug === currentTab
                      ? "bg-secondary text-white border-0"
                      : "bg-blue-950/50 text-blue-300 hover:bg-blue-950"
                  )}
                  onClick={() => setCurrentTab(tab.slug)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </GradientCard>

      {/* Tasks Grid */}
      {(filteredTasks?.length ?? 0) > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTasks?.map((task: Task) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <TaskCard task={task} />
            </motion.div>
          ))}
        </div>
      ) : (
        <GradientCard className="border-none bg-blue-900 text-white shadow-md">
          <CardContent className="py-12 flex flex-col items-center justify-center">
            <div className="h-16 w-16 rounded-full bg-blue-950 flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-blue-300" />
            </div>
            <h3 className="text-xl font-semibold">No tasks found</h3>
          </CardContent>
        </GradientCard>
      )}

      {/* View All Tasks */}
      {/* <Card className="border-none bg-blue-900 text-white shadow-md">
        <CardContent className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-medium">Looking for more tasks?</h3>
              <p className="text-sm text-blue-300">Check back regularly for new opportunities to earn points</p>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 text-white">
              View All Tasks <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card> */}
    </div>
  );
};

export default Tasks;
