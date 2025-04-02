import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ReferralUser } from "@/types";

interface ReferralListProps {
  referrals: ReferralUser[];
}

const ReferralList: React.FC<ReferralListProps> = ({ referrals }) => {
  return (
    <Card className="border-none bg-blue-950 text-white shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Your Referrals
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-white/10 overflow-hidden">
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
      </CardContent>
    </Card>
  );
};

export default ReferralList;
