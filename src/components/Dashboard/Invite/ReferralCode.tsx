import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Users, Trophy, UserPlus } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface ReferralCodeProps {
  referralCode: string;
  copyToClipboard: () => void;
  copied: boolean;
}

const ReferralCode: React.FC<ReferralCodeProps> = ({ referralCode, copyToClipboard, copied }) => {
  return (
    <Card className="border-none bg-blue-950 text-white shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-secondary" />
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
              <Button
                onClick={copyToClipboard}
                className="bg-secondary hover:bg-secondary/90"
              >
                <Copy />
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>

          <div className="flex flex-row justify-between items-start sm:items-center gap-2 bg-blue-900/50 rounded-lg border border-white/10 p-4 h-full">
            <div>
              <p className="text-sm text-blue-300">Referral Link</p>
            </div>
            <Button
              className="bg-secondary hover:bg-secondary/90 text-white float-right"
              onClick={() => {
                navigator.clipboard.writeText(
                  `https://urkelcodes.com/invite/${referralCode}`
                );
                toast({
                  title: "Copied to clipboard",
                  description:
                    "Your referral link has been copied to clipboard",
                });
              }}
            >
              <Copy className="h-4 w-4" />
              Copy Link
            </Button>
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
          <Button className="bg-secondary hover:bg-secondary/90 text-white">
            <UserPlus className="h-4 w-4 mr-2" />
            Invite Friends
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReferralCode;
