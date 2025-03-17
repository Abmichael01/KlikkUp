"use client";

import type React from "react";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Youtube, Clock, Star, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import TaskConfirmationForm from "@/components/Dashboard/Tasks/TaskConfirmationForm";

// Match the exact task data structure
interface Task {
  id: number;
  title: string;
  description: string;
  points: number;
  difficulty: string;
  estimatedTime: string;
  isNew: boolean;
}

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card className="h-full border-none bg-blue-900 text-white shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex items-center justify-center py-12 border-b bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0,transparent_70%)]"></div>
        <Youtube className="w-16 h-16 text-secondary relative z-10" />
        {task.isNew && (
          <Badge className="absolute top-3 right-3 bg-secondary text-white">
            New
          </Badge>
        )}
      </div>
      <CardContent className="p-5 flex flex-col gap-3">
        <div>
          <h3 className="font-semibold text-lg">{task.title}</h3>
          <p className="text-sm text-blue-300 mt-1">{task.description}</p>
        </div>

        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-blue-300" />
            <span className="text-xs text-blue-300">{task.estimatedTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-blue-300" />
            <span className="text-xs text-blue-300">{task.difficulty}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-blue-800">
          <div className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4 text-secondary" />
            <span className="font-bold">{task.points}</span>
            <span className="text-xs text-blue-300">Klikks</span>
          </div>

          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
              <Button className="bg-secondary hover:bg-secondary/90 text-white px-8 py-2 h-auto rounded-full" size="sm">
                Start
              </Button>
            </DrawerTrigger>
            <DrawerContent className="bg-blue-950 text-white">
              <TaskConfirmationForm task={task} onClose={() => setOpen(false)} />
            </DrawerContent>
          </Drawer>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
