"use client";

import { CheckCircle, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { AccountOverviewData } from "@/types";
import { useCheckIn } from "@/api/mutations";
import { useQueryClient } from "@tanstack/react-query";
import { CardContent } from "@/components/ui/card";
import GradientCard from "@/components/ui/GradientCard";
import CheckinSuccess from "./CheckinSuccess";
import { useDialog } from "@/hooks/useDialog";

interface Props {
  data: AccountOverviewData;
}

export default function Overview({ data }: Props) {
  const { setOpen } = useDialog("checkinSuccess")
  const { mutate, isPending } = useCheckIn();
  const queryClient = useQueryClient();

  const handleCheckIn = () => {
    mutate(undefined, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["account-overview"] });
        setOpen(true);
      },
    });
  };

  console.log(data?.checked_in_today);
  return (
    <GradientCard
      bg="from-blue-950 to-blue-950"
      className="col-span-2 border-none text-white shadow-md flex-grow"
    >
      <CardContent className="relative mt-5">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* User info and level */}
          <div className="space-y-4 w-full">
            <div className="flex  items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-800/50 text-white">
                <span className="text-xl font-semibold uppercase">
                  {data?.username[0]}
                </span>
              </div>
              <div>
                <h2 className="text-xl font-bold tracking-tight">
                  {" "}
                  <span className="uppercase">{data?.username[0]}</span>
                  {data?.username.slice(1)}
                </h2>
                <p className="text-xs text-blue-300 mt-0.5">Earning Overview</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <p className="text-xs text-blue-300">
                    Level {data?.current_level}
                  </p>
                  <span className="inline-flex h-5 items-center rounded-full bg-blue-900/60 px-2 text-xs font-medium">
                    {data?.xp}/{data?.next_level_xp} XP
                  </span>
                </div>
                <p className="text-xs font-medium">Level {data?.next_level}</p>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-blue-900/50">
                <Progress
                  value={data?.percent_xp_in_level}
                  className="h-full bg-gradient-to-r from-blue-400 to-indigo-400"
                />
              </div>
              <p className="text-xs text-blue-300">
                {(data?.next_level_xp ?? 0) - (data?.xp ?? 0)} XP needed to
                reach Level {data?.next_level}
              </p>
            </div>
          </div>

          {/* Check-in button */}
          <div className="flex flex-col gap-3 w-full">
            <div className="flex items-center gap-2 rounded-lg bg-blue-900/40 p-3">
              <div className="flex p-5 items-center justify-center rounded-full bg-blue-800/50">
                <span className="text-lg font-bold">
                  {data?.checked_in_today ? "25" : "0"}
                </span>
              </div>
              <div>
                <p className="text-xs text-blue-300">Today's Points</p>
                <p className="text-sm font-medium">
                  Check in daily to earn more
                </p>
              </div>
            </div>

            <Button
              onClick={handleCheckIn}
              disabled={data?.checked_in_today || isPending}
              className={`w-full ${
                data?.checked_in_today
                  ? "bg-blue-800/50 text-blue-300"
                  : "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                {isPending ? (
                  <Loader className="h-4 w-4 animate-spin" />
                ) : (
                  <CheckCircle className="h-4 w-4" />
                )}
                {data?.checked_in_today
                  ? "Checked In Today"
                  : "Daily Check-In (+25 points)"}
              </div>
            </Button>
          </div>
        </div>
        <CheckinSuccess streaks={data?.streak} />
      </CardContent>
      
    </GradientCard>
  );
}
