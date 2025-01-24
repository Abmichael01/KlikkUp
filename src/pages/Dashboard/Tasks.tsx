import Banner from "@/components/Dashboard/Banner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Youtube } from "lucide-react";
import React from "react";
import { useNavigate, useSearchParams } from "react-router";


const tasks = [
  {
    id: 1,
    title: "Task 1",
    description: "This is the first task",
    points: 2000,
  },
  {
    id: 1,
    title: "Task 2",
    description: "This is the first task",
    points: 1000,
  },
  {
    id: 1,
    title: "Task 3",
    description: "This is the first task",
    points: 5000,
  },
  {
    id: 1,
    title: "Task 4",
    description: "This is the first task",
    points: 1000,
  },
  {
    id: 1,
    title: "Task 5",
    description: "This is the first task",
    points: 1000,
  },
  {
    id: 1,
    title: "Task 6",
    description: "This is the first task",
    points: 1000,
  },
  {
    id: 1,
    title: "Task 4",
    description: "This is the first task",
    points: 1000,
  },
  {
    id: 1,
    title: "Task 5",
    description: "This is the first task",
    points: 1000,
  },
  {
    id: 1,
    title: "Task 6",
    description: "This is the first task",
    points: 1000,
  },
];

const tabs = [
  {
    label: "New tasks",
    active: true,
    slug: "new-tasks",
  },
  {
    label: "Completed tasks",
    active: false,
    slug: "completed-tasks",
  },
];

const Tasks: React.FC = () => {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const currentTab = search.get("tab");

  const setActiveTab = (slug: string) => {
    navigate(`/tasks?tab=${slug}`);
  };

  return (
    <div className="flex flex-col gap-10">
      <Banner>
        <div className="flex flex-col gap-4 fancy-font text-center">
            <h2 className="text-2xl md:text-4xl font-semibold">Complete the tasks, earn the points</h2>
            <h2 className="text-xl md:text-2xl text-white font-semibold">Only qualified actions will unclock the new world</h2>
        </div>
      </Banner>

      <div className="flex gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={cn(
              "text-center px-6 py-[10px] text-sm font-medium bg-primary/20 border   rounded-lg",
              tab.slug === currentTab && "bg-primary text-white"
            )}
            onClick={() => setActiveTab(tab.slug)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {tasks.map((task) => (
          <div key={task.id} className="flex flex-col rounded-xl border overflow-hidden">
            <div className="flex items-center justify-center py-12 border-b bg-gradient-to-b from-black via-gray-700 to-black text-white">
                <Youtube className="w-20 h-20" />
            </div>
            <div className="p-3 flex flex-col gap-2">
              <h3 className="font-semibold">{task.title}</h3>
              <p>{task.description}</p>
              <div className="flex-shrink-0">
                <p> {task.points} <span className="text-xs">Klikks</span></p>
              </div>
              <Button variant={"outline"}>
                Watch and Like
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
