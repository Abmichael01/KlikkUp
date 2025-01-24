import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Banner from "@/components/Dashboard/Banner";

const leaderboard = [
  { username: "John Doe", invites: 10 },
  { username: "Jane Smith", invites: 15 },
  { username: "Michael Johnson", invites: 20 },
  { username: "Emily Davis", invites: 25 },
  { username: "Sarah Wilson", invites: 30 },
  { username: "David Brown", invites: 35 },
  { username: "Sophia Green", invites: 40 },
  { username: "Michael Wilson", invites: 45 },
  { username: "Emily Thompson", invites: 50 },
  { username: "David Johnson", invites: 55 },
];

const Invite: React.FC = () => {
  return (
    <div className="flex flex-col gap-10 ">
      <Banner className="flex-col">
        <h2 className="text-xl sm:text-4xl font-semibold fancy-font">Your Referral Statistics</h2>
        <div className="text-xl sm:text-2xl font-medium text-center">
          <h2>Numbeer of mutations:</h2>
          <h2 className="text-6xl text-white font-semibold mt-3">30</h2>
        </div>
      </Banner>

      <div className="flex justify- items-center gap-5 ">
        <h2 className="text-xl sm:text-2xl font-semibold">Referral Code:</h2>
        <div className="flex gap-3 items-center">
          <h2 className="px-5 py-2 rounded-lg border">HG977h</h2>
          <Button>
            <Copy />
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h2 className="fancy-font text-xl sm:text-2xl font-semibold text-primary">
          Referral Leaderboard
        </h2>
        <Table>
          <TableCaption>Leaderboard</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">S/N</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>Invites</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboard.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.invites}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Invite;
