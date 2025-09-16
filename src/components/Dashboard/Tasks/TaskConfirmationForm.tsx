"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, AlertCircle, Loader2, Play } from "lucide-react";
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
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [timerStatus, setTimerStatus] = useState<"idle" | "running" | "completed">("idle");
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const mutation = useConfirmTask();
  const queryClient = useQueryClient();

  // Initialize timer duration (only for tasks that require waiting)
  const timerDuration = task.no_wait_confirm ? 0 : Number(task.estimated_time ?? 0) * 60;

  // Cleanup timer
  const clearTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Reset component state
  const resetState = useCallback(() => {
    setTimerStatus("idle");
    setConfirmationCode("");
    setTimeRemaining(timerDuration);
    clearTimer();
  }, [timerDuration, clearTimer]);

  // Start task timer
  const startTask = useCallback(() => {
    if (task.link) {
      window.open(task.link, "_blank", "noopener,noreferrer");
    }
    
    // For tasks that don't require waiting, skip timer and go directly to completion
    if (task.no_wait_confirm) {
      setTimerStatus("completed");
      setTimeRemaining(0);
      return;
    }
    
    setTimerStatus("running");
    setTimeRemaining(timerDuration);
    clearTimer();
    
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
  }, [task.link, task.no_wait_confirm, timerDuration, clearTimer]);

  // Confirm task
  const confirmTask = useCallback(() => {
    // For tasks that don't require confirmation code
    if (task.no_code_required) {
      mutation.mutate(
        { ...task, confirmation_code: "" },
        {
          onSuccess: () => {
            toast({
              description: `Task confirmed! ${task.reward} points added to your balance`,
            });
            queryClient.invalidateQueries({ queryKey: ["users"] });
            queryClient.invalidateQueries({ queryKey: ["tasks-data"] });
            onClose();
          },
        }
      );
      return;
    }
    
    // For tasks that require confirmation code
    if (!confirmationCode.trim()) return;
    
    mutation.mutate(
      { ...task, confirmation_code: confirmationCode },
      {
        onSuccess: () => {
          toast({
            description: `Task confirmed! ${task.reward} points added to your balance`,
          });
          queryClient.invalidateQueries({ queryKey: ["users"] });
          queryClient.invalidateQueries({ queryKey: ["tasks-data"] });
          onClose();
        },
      }
    );
  }, [confirmationCode, mutation, task, queryClient, onClose]);

  // Handle Enter key press
  const handleKeyPress = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Enter" && timerStatus === "completed") {
      // For tasks that don't require confirmation code, or if confirmation code is provided
      if (task.no_code_required || confirmationCode.trim()) {
        confirmTask();
      }
    }
  }, [timerStatus, confirmationCode, confirmTask, task.no_code_required]);

  // Format time display
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  // Initialize on mount and task change
  useEffect(() => {
    resetState();
    return clearTimer;
  }, [task.id, resetState, clearTimer]);

  // Get status message
  const getStatusMessage = () => {
    if (task.no_wait_confirm) {
      switch (timerStatus) {
        case "idle":
          return "Ready to start task";
        case "completed":
          return task.no_code_required ? "Ready to confirm task" : "Enter your confirmation code";
        default:
          return "";
      }
    }
    
    switch (timerStatus) {
      case "idle":
        return "Ready to start task";
      case "running":
        return "Complete the task and wait for timer";
      case "completed":
        return "Enter your confirmation code";
      default:
        return "";
    }
  };

  return (
    <div className="mx-auto w-full max-w-md">
      <DrawerHeader className="text-center">
        <DrawerTitle className="text-lg font-semibold">
          {task.title}
        </DrawerTitle>
        <DrawerDescription className="text-sm text-muted-foreground">
          {getStatusMessage()}
        </DrawerDescription>
      </DrawerHeader>

      <div className="px-6 py-4 space-y-6">
        {/* Idle State */}
        {timerStatus === "idle" && (
          <div className="flex flex-col items-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Play className="w-8 h-8 text-primary" />
            </div>
            <Button
              onClick={startTask}
              size="lg"
              className="w-full"
            >
              Start Task
            </Button>
          </div>
        )}

        {/* Timer States */}
        {(timerStatus === "running" || timerStatus === "completed") && (
          <div className="space-y-6">
            {/* Timer Display - Only show for tasks that require waiting */}
            {!task.no_wait_confirm && (
              <div className="text-center space-y-2">
                <div className="text-4xl font-mono font-bold text-primary">
                  {formatTime(timeRemaining)}
                </div>
                <p className="text-sm text-muted-foreground">
                  {timerStatus === "running" ? "Timer running..." : "Timer completed!"}
                </p>
              </div>
            )}

            {/* No Wait Task Display */}
            {task.no_wait_confirm && timerStatus === "completed" && (
              <div className="text-center space-y-2">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {task.no_code_required ? "Ready to confirm task" : "Enter your confirmation code"}
                </p>
              </div>
            )}

            {/* Confirmation Code Input - Only for tasks that require confirmation code */}
            {timerStatus === "completed" && !task.no_code_required && (
              <div className="space-y-4">
                <Input
                  placeholder="Enter confirmation code"
                  value={confirmationCode}
                  onChange={(e) => setConfirmationCode(e.target.value.trim())}
                  onKeyPress={handleKeyPress}
                  className="text-center text-lg font-mono tracking-wider text-black"
                  maxLength={10}
                  disabled={mutation.isPending}
                  autoFocus
                />
                
                {/* Error Display */}
                {mutation.isError && (
                  <div className="flex items-center gap-2 p-3 text-sm text-destructive bg-destructive/10 rounded-lg">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>
                      {mutation.error instanceof AxiosError && mutation.error.response?.data?.error
                        ? mutation.error.response.data.error
                        : "Failed to confirm task. Please try again."}
                    </span>
                  </div>
                )}

                {/* Success Display */}
                {mutation.isSuccess && (
                  <div className="flex items-center gap-2 p-3 text-sm text-green-700 bg-green-50 rounded-lg">
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Task confirmed! {task.reward} points awarded.</span>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <DrawerFooter className="space-y-2">
        {/* Confirm Button */}
        {timerStatus === "completed" && !mutation.isSuccess && (
          <Button
            onClick={confirmTask}
            disabled={(!task.no_code_required && !confirmationCode.trim()) || mutation.isPending}
            className="w-full"
            size="lg"
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Confirming...
              </>
            ) : (
              "Confirm Task"
            )}
          </Button>
        )}
        
        {/* Cancel Button */}
        <DrawerClose asChild>
          <Button variant="outline" className="w-full" size="lg">
            {mutation.isSuccess ? "Close" : "Cancel"}
          </Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  );
};

export default TaskConfirmationForm;