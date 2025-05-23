import React from "react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReferralUser } from "@/types";
import GradientCard from "@/components/ui/GradientCard";
import { Users } from "lucide-react";

interface ReferralListProps {
  referrals: ReferralUser[];
}

const ReferralList: React.FC<ReferralListProps> = ({ referrals }) => {
  return (
    <GradientCard className="border-none bg-blue-950 text-white shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
          <div className=" px-2 py-2 bg-secondary/20 rounded-xl">
            <Users className="text-secondary size-5" />
          </div>
          Your Referrals
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border bg-blue-950/80 border-white/10 overflow-hidden">
          {/* Large Screen Table */}
          <div className="hidden min-[400px]:block">
            <Table>
              <TableHeader>
                <TableRow className="bg-blue-900/50 hover:bg-blue-900/50">
                  <TableHead className="text-blue-300">Username</TableHead>
                  <TableHead className="text-blue-300">Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {referrals?.map((referral, index) => (
                  <TableRow
                    key={index}
                    className="border-b border-white/5 hover:bg-blue-900/30"
                  >
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-900/50 text-white uppercase">
                          <span>{referral.username.charAt(0)}</span>
                        </div>
                        <span>{referral.username}</span>
                      </div>
                    </TableCell>
                    <TableCell>{referral.point_balance}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Small Screen List */}
          <div className="min-[400px]:hidden space-y-3 p-2">
            {referrals?.map((referral, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-md bg-blue-900/30 p-3 border border-white/5"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900/50 text-white uppercase">
                    <span>{referral.username.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{referral.username}</p>
                    <p className="text-xs text-blue-300">
                      Points: {referral.point_balance}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </GradientCard>
  );
};

export default ReferralList;
