"use client";

import type React from "react";
import { ChevronRight } from "lucide-react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  roadmapItems,
  calculateProgress,
} from "@/components/Dashboard/Roadmap/utils";
import StatsCards from "@/components/Dashboard/Roadmap/StatsCards";
import TimelineView from "@/components/Dashboard/Roadmap/TimelineView";
import { useShareDialogStore } from "@/stores/useShareDialogStore";
import GradientCard from "@/components/ui/GradientCard";
import { useAuthStore } from "@/stores/useAuthStore";

const Roadmap: React.FC = () => {
  const progress = calculateProgress();
  const { user } = useAuthStore()
  const referralMessage = `Join KlikkUp today and start earning rewards! Use my referral link to sign up: https://urkelcodes.com/invite/${user?.username}`;
  const { openDialog } = useShareDialogStore()
  
  return (
    <div className="flex flex-col gap-10">
      <StatsCards progress={progress} roadmapItems={roadmapItems} />
      <TimelineView roadmapItems={roadmapItems} />
      <GradientCard className="border-none bg-blue-900 text-white shadow-md">
        <CardContent className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-medium">
                Want to help us reach our goals faster?
              </h3>
              <p className="text-sm text-blue-300">
                Invite friends and complete tasks to accelerate our roadmap
                progress
              </p>
            </div>
            <Button
              onClick={() => openDialog(referralMessage)}
              className="bg-secondary hover:bg-secondary/90 text-white whitespace-nowrap"
            >
              Invite Friends <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </GradientCard>
    </div>
  );
};

export default Roadmap;
