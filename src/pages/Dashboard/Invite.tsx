"use client";

import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";
import ReferralStats from "@/components/Dashboard/Invite/ReferralStats";
import ReferralCode from "@/components/Dashboard/Invite/ReferralCode";
import Leaderboard from "@/components/Dashboard/Invite/Leaderboard";
import ReferralList from "@/components/Dashboard/Invite/ReferralList";
import ReferralBonus from "@/components/Dashboard/Invite/ReferralBonus";

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

const referrals = [
  { name: "John Doe", email: "john@example.com", date: "2023-10-01" },
  { name: "Jane Smith", email: "jane@example.com", date: "2023-10-02" },
  { name: "Michael Johnson", email: "michael@example.com", date: "2023-10-03" },
];

const Invite: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const referralCode = "HG977h";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "Your referral code has been copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6">
      <ReferralStats />
      <ReferralCode referralCode={referralCode} copyToClipboard={copyToClipboard} copied={copied} />
      <ReferralList referrals={referrals} />
      <Leaderboard leaderboard={leaderboard} />
      <ReferralBonus />
    </div>
  );
};

export default Invite;
