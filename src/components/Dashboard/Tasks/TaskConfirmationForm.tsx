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
import { CheckCircle, AlertCircle, Loader2, Play, Video } from "lucide-react";
import { Task } from "@/types";
import { useConfirmTask } from "@/api/mutations";
import { toast } from "@/hooks/use-toast";
import { AxiosError } from "axios";
import { useQueryClient } from "@tanstack/react-query";

interface TaskConfirmationFormProps {
  task: Task;
  onClose: () => void;
}

const TaskConfirmationForm: React.FC<TaskConfirmationFormProps> = ({
  task,
  onClose,
}) => {
  const [confirmationCode, setConfirmationCode] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(2); // 5 minutes default
  const [timerStatus, setTimerStatus] = useState<
    "idle" | "running" | "completed"
  >("idle");
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const mutation = useConfirmTask();
  const queryClient = useQueryClient()

  // Mutation handling confirmation logic
  const confirmTask = () => {
    const data = { ...task, confirmation_code: confirmationCode };
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          description: `Task confirmed! ${task.reward}points has been added to you balance`,
        });
        queryClient.invalidateQueries({ queryKey: ["users"] })
        queryClient.invalidateQueries({ queryKey: ["tasks-data"] })
        onClose();
      },
    });
  };

  // Reset and cleanup on mount
  useEffect(() => {
    setTimerStatus("idle");
    setConfirmationCode("");
    mutation.reset();

    if (timerRef.current) clearInterval(timerRef.current);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [task, onClose]); // Remove mutation from dependencies

  // Timer logic
  const startTask = () => {
    setTimerStatus("running");
    if (timerRef.current) clearInterval(timerRef.current); // Clear any existing timer
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

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <DrawerHeader>
        <DrawerTitle className="text-center text-lg font-bold">
          Task Confirmation
        </DrawerTitle>
        <DrawerDescription className="text-center text-sm text-white/80">
          {timerStatus === "idle"
            ? "Watch the video and click 'Start Task'"
            : timerStatus === "running"
            ? `Please wait for the countdown before confirming "${task.title}"`
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
              <h1 className="text-blue-100 text-3xl text-center">
                {formatTime(timeRemaining)}
              </h1>
              <p className="mt-2 text-center text-xs text-white/80">
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
                className="text-center text-lg font-mono tracking-widest bg-transparent border rounded-xl placeholder:text-white/70"
                maxLength={6}
                disabled={mutation.isPending || mutation.isSuccess}
              />
            )}

            {mutation.isError && (
              <div className="flex items-center gap-2 text-sm text-red-500 bg-red-100 p-2 rounded-lg">
                <AlertCircle className="h-5 w-5" />
                {mutation.error instanceof AxiosError &&
                  mutation.error.response?.data?.error && (
                    <span className="text-red-600 font-medium">
                      {mutation.error.response.data.error}
                    </span>
                  )}
              </div>
            )}
            {mutation.isSuccess && (
              <div className="flex items-center gap-2 text-sm text-green-600 bg-green-100 p-2 rounded-lg">
                <CheckCircle className="h-5 w-5" />
                Task confirmed! {task.reward} Klikks awarded.
              </div>
            )}
          </div>
        )}
      </div>

      <DrawerFooter className="space-y-2">
        {timerStatus === "completed" && !mutation.isSuccess && (
          <Button
            onClick={confirmTask}
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
