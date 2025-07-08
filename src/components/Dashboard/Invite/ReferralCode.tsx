import React from "react";
import { Button } from "@/components/ui/button";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Trophy, UserPlus } from "lucide-react";
import CopyButton from "@/components/ui/CopyButton";
import { useShareDialogStore } from "@/stores/useShareDialogStore";
import GradientCard from "@/components/ui/GradientCard";

interface ReferralCodeProps {
  referralCode: string;
}

const ReferralCode: React.FC<ReferralCodeProps> = ({ referralCode }) => {
  const openShareDialog = useShareDialogStore((state) => state.openDialog);

  const referralMessage = `Join KlikkUp today and start earning rewards! Use my referral link to sign up: https://klikkupp.com/auth/register?ref_code=${referralCode}`;

  return (
    <GradientCard className="border-none bg-blue-950 text-white shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
          <div className=" px-2 py-2 bg-secondary/20 rounded-xl">
            <Users className="text-secondary size-5" />
          </div>
          Your Referral Code
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 text-wrap sm:grid-cols-2 sm:flex-row gap-4 items-center">
          <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-blue-600/20 blur-xl "></div>
            <div className="relative flex items-center justify-between bg-blue-900/50 rounded-lg border border-white/10 p-4 w-full">
              <div>
                <p className="text-xs text-blue-300 mb-1">
                  Share this code with friends
                </p>
                <p className="text-2xl font-mono font-bold tracking-wider">
                  {referralCode}
                </p>
              </div>
              <CopyButton
                textToCopy={referralCode}
                className="bg-secondary hover:bg-secondary/90"
              />
            </div>
          </div>

          <div className="flex flex-row justify-between items-start sm:items-center gap-2 bg-blue-900/50 rounded-lg border border-white/10 p-4 h-full">
            <div>
              <p className="text-sm text-blue-300">Referral Link</p>
            </div>
            <CopyButton
              textToCopy={`https://klikkupp.com/auth/register?ref_code=${referralCode}`}
              className="bg-secondary hover:bg-secondary/90 text-white float-right"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-lg bg-blue-900/30 p-4 border border-white/5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/20">
              <Trophy className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <p className="font-medium">Earn 500 points per referral</p>
              <p className="text-sm text-blue-300">
                Invite friends to earn more points
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              className="bg-secondary hover:bg-secondary/90 text-white"
              onClick={() => openShareDialog(referralMessage)}
            >
              <UserPlus className="h-4 w-4 mr-2" />
              Invite Friends
            </Button>
          </div>
        </div>
      </CardContent>
    </GradientCard>
  );
};

export default ReferralCode;
