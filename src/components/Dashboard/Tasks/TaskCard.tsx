"use client";

import type React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Star, TrendingUp, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import TaskConfirmationForm from "@/components/Dashboard/Tasks/TaskConfirmationForm";
import { Task } from "@/types";

// Match the exact task data structure

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const [open, setOpen] = useState(false);
  
  return (
    <Card className="h-full border-none bg-blue-900 text-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {task.banner ? (
        <img src={task.banner} alt="" className="object-cover h-[200px] w-full" />
      ) : (
        <div className="flex items-center justify-center border border-blue-900 rounded-lg py-12 bg-blue-500 bg-gradient-to- from-blue-950 via-gray-900 to-blue-950 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0,transparent_70%)]"></div>
                  <ClipboardList className="w-16 h-16 text-blue-900 relative z-10" />
                </div>
      )}
      <CardContent className="p-5 flex flex-col gap-3">
        <div>
          <h3 className="font-semibold text-lg">{task.title}</h3>
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-blue-300" />
            <span className="text-xs text-blue-300">
              {task.estimated_time}mins
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-blue-300" />
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-blue-800">
          <div className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4 text-secondary" />
            <span className="font-bold">{task.reward}</span>
            <span className="text-xs text-blue-300">Klikks</span>
          </div>

          {!task.completed && (
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <Button
                  className="bg-secondary hover:bg-secondary/90 text-white px-8 py-2 h-auto rounded-full"
                  size="sm"
                >
                  Start
                </Button>
              </DrawerTrigger>
              <DrawerContent className="bg-blue-950 text-white">
                <TaskConfirmationForm
                  task={task}
                  onClose={() => setOpen(false)}
                />
              </DrawerContent>
            </Drawer>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
