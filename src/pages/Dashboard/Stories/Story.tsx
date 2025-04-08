"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  CheckCircle,
  Clock,
  ArrowLeft,
  TrendingUp,
  Timer,
  Loader2,
} from "lucide-react";
import { Link, useParams } from "react-router";
import { toast } from "@/hooks/use-toast";
import { motion, useInView } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { useGetStory } from "@/api/queries";
import { useConfirmStory } from "@/api/mutations";
import type { Story as StoryType } from "@/types";

const Story: React.FC = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const buttonRef = useRef(null);

  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetStory(Number(id));
  const { mutate } = useConfirmStory();

  const MIN_READING_TIME = (data?.estimated_time ?? 0) * 60;
  // const MIN_READING_TIME = ;

  // Use Framer Motion's useInView to detect when the button is in view
  const isInView = useInView(buttonRef, { once: true, amount: 0.5 });

  // In a real app, you would fetch the story based on ID or route params
  const story = data;

  // Start timer when component mounts
  useEffect(() => {
    if (isLoading) return;
    const timer = setInterval(() => {
      setElapsedTime((prev) => {
        if (prev >= MIN_READING_TIME) {
          clearInterval(timer);
          return MIN_READING_TIME;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [MIN_READING_TIME, isLoading]);

  // Calculate time progress percentage
  const timeProgress = Math.min((elapsedTime / MIN_READING_TIME) * 100, 100);

  // Format remaining time
  const formatRemainingTime = () => {
    const remaining = Math.max(MIN_READING_TIME - elapsedTime, 0);
    const minutes = Math.floor(remaining / 60);
    const seconds = remaining % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // Check if both conditions are met: scrolled to bottom and minimum time elapsed
  const canComplete = isInView && elapsedTime >= MIN_READING_TIME;

  const handleComplete = () => {
    mutate(story as StoryType, {
      onSuccess: () => {
        setIsCompleted(true);
        toast({
          title: "Story completed!",
          description: `You've earned ${story?.reward} points for reading this story.`,
        });
      },
    });
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-40">
        <Loader2 className="animate-spin text-primary" />
      </div>
    );

  return (
    <div className="container mx-auto max-w-3xl">
      <div className="mb-6">
        <Link to="/stories" className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Stories
        </Link>
      </div>

      <Card className="border-none bg-blue-950 text-white shadow-md w-full">
        <CardHeader className="border-b border-blue-800 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-blue-300">
              <BookOpen className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-300">
              <Clock className="h-4 w-4" />
              <span>{story?.estimated_time} min(s) read</span>
            </div>
          </div>
          <CardTitle className="text-2xl mt-2 text-white">
            {story?.title}
          </CardTitle>
        </CardHeader>

        {/* Reading timer progress */}
        {!story?.story_read && (
          <div className="px-6 py-2 border-b border-blue-800">
            <div className="flex items-center justify-between text-xs text-blue-300 mb-1">
              <span className="flex items-center">
                <Timer className="h-3 w-3 mr-1" />
                 Reading time
              </span>
              {elapsedTime < MIN_READING_TIME ? (
                <span>{formatRemainingTime()} remaining</span>
              ) : (
                <span className="text-green-400">Minimum time reached</span>
              )}
            </div>
            <Progress value={timeProgress} className="h-1 bg-blue-900/50" />
          </div>
        )}

        <CardContent className="p-6 text-blue-100">
          <div
            className="prose prose-invert"
            dangerouslySetInnerHTML={{ __html: data?.body || "" }}
          />
        </CardContent>

        {!story?.story_read && (
          <CardFooter
            ref={buttonRef}
            className="flex justify-between items-center border-t border-blue-800 p-4"
          >
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-secondary" />
              <div className="text-sm">
                <span className="font-medium text-secondary">
                  {story?.reward}
                </span>
                <span className="text-blue-300 ml-1">
                  points upon completion
                </span>
              </div>
            </div>

            {!story?.story_read && (
              <Button
                onClick={handleComplete}
                disabled={!canComplete || isCompleted}
                className={
                  isCompleted
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-secondary hover:bg-secondary/90"
                }
              >
                {isCompleted ? (
                  <>
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Completed
                  </>
                ) : (
                  "Mark as Done"
                )}
              </Button>
            )}
          </CardFooter>
        )}
      </Card>

      {!story?.story_read && !canComplete && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-4 left-0 right-0 mx-auto w-max z-10"
        >
          <div className="p-3 bg-blue-900/80 text-blue-300 border border-blue-800 rounded-md text-sm flex items-center backdrop-blur-sm shadow-lg">
            {!isInView ? (
              <>
                <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                <p>Continue reading to the end to earn points</p>
              </>
            ) : elapsedTime < MIN_READING_TIME ? (
              <>
                <Timer className="h-4 w-4 mr-2 flex-shrink-0" />
                <p>Please wait {formatRemainingTime()} before completing</p>
              </>
            ) : null}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Story;
