"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, AlertCircle, Loader2, Play, Video } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";


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

interface TaskConfirmationFormProps {
  task: Task;
  onClose: () => void;
}

const TaskConfirmationForm: React.FC<TaskConfirmationFormProps> = ({
  task,
  onClose,
}) => {
  const [confirmationCode, setConfirmationCode] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes default
  const [timerStatus, setTimerStatus] = useState<
    "idle" | "running" | "completed"
  >("idle");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Mutation handling confirmation logic
  const mutation = useMutation({
    mutationFn: async (code: string) => {
      return new Promise<boolean>((resolve) => {
        setTimeout(() => resolve(/^\d{6}$/.test(code)), 1500); // validate 6-digit code
      });
    },
    onSuccess: (success) => {
      if (success) {
        toast({
          title: "Story completed!",
          description: `You've earned ${task.points} points for reading this story.`,
        });
        setTimeout(() => {
          onClose(); // Auto-close drawer
        }, 2000);
      }
    },
  });

  // Reset and cleanup on mount
  useEffect(() => {
    setTimeRemaining(300);
    setTimerStatus("idle");
    setConfirmationCode("");
    mutation.reset();

    if (timerRef.current) clearInterval(timerRef.current);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [ mutation, task, onClose]);

  // Timer logic
  const startTask = () => {
    setTimerStatus("running");
    timerRef.current = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setTimerStatus("completed");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const formatTime = (seconds: number) =>
    `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(
      seconds % 60
    ).padStart(2, "0")}`;

  const progressPercentage = 100 - (timeRemaining / 300) * 100;

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <DrawerHeader>
        <DrawerTitle className="text-center text-lg font-bold">
          Task Confirmation
        </DrawerTitle>
        <DrawerDescription className="text-center text-sm text-muted-foreground">
          {timerStatus === "idle"
            ? "Watch the video and click 'Start Task'"
            : timerStatus === "running"
            ? `Please wait ${formatTime(timeRemaining)} before confirming "${
                task.title
              }"`
            : `Enter the confirmation code to complete "${task.title}"`}
        </DrawerDescription>
      </DrawerHeader>

      <div className="p-4 space-y-6">
        {timerStatus === "idle" && (
          <div className="flex flex-col items-center gap-6">
            <div className="h-24 w-24 rounded-full bg-blue-900/40 flex items-center justify-center shadow-inner">
              <Video className="h-12 w-12 text-blue-300" />
            </div>
            <Button
              onClick={startTask}
              className="w-full bg-secondary hover:bg-secondary/90 text-white rounded-full py-3 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Start Task
            </Button>
          </div>
        )}

        {(timerStatus === "running" || timerStatus === "completed") && (
          <div className="space-y-6">
            <div>
              <Progress
                value={progressPercentage}
                className="h-3 bg-blue-900/40 rounded-full"
              />
              <p className="mt-2 text-center text-xs text-muted-foreground">
                {timerStatus === "running" && "Timer in progress..."}
                {timerStatus === "completed" &&
                  "You can now enter the confirmation code."}
              </p>
            </div>

            {timerStatus === "completed" && (
              <Input
                placeholder="Enter 6-digit code"
                value={confirmationCode}
                onChange={(e) => setConfirmationCode(e.target.value)}
                className="text-center text-lg font-mono tracking-widest bg-transparent border rounded-xl placeholder:text-gray-400"
                maxLength={6}
                disabled={mutation.isPending || mutation.isSuccess}
              />
            )}

            {mutation.isError && (
              <div className="flex items-center gap-2 text-sm text-red-500 bg-red-100 p-2 rounded-lg">
                <AlertCircle className="h-5 w-5" />
                Invalid code. Try again.
              </div>
            )}
            {mutation.isSuccess && (
              <div className="flex items-center gap-2 text-sm text-green-600 bg-green-100 p-2 rounded-lg">
                <CheckCircle className="h-5 w-5" />
                Task confirmed! {task.points} Klikks awarded.
              </div>
            )}
          </div>
        )}
      </div>

      <DrawerFooter className="space-y-2">
        {timerStatus === "completed" && !mutation.isSuccess && (
          <Button
            onClick={() => mutation.mutate(confirmationCode)}
            disabled={!confirmationCode || mutation.isPending}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full"
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="animate-spin mr-2 h-5 w-5" />
                Confirming...
              </>
            ) : (
              "Confirm Task"
            )}
          </Button>
        )}
        <DrawerClose asChild>
          <Button
            variant="outline"
            className="w-full rounded-full py-3 border-gray-700"
          >
            Cancel
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  );
};

export default TaskConfirmationForm;
