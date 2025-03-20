import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface Referral {
  name: string;
  email: string;
  date: string;
}

interface ReferralListProps {
  referrals: Referral[];
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
                <TableHead className="text-blue-300">Name</TableHead>
                <TableHead className="text-blue-300">Email</TableHead>
                <TableHead className="text-blue-300">Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {referrals.map((referral, index) => (
                <TableRow key={index} className="border-b border-white/5 hover:bg-blue-900/30">
                  <TableCell>{referral.name}</TableCell>
                  <TableCell>{referral.email}</TableCell>
                  <TableCell>{referral.date}</TableCell>
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
