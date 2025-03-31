"use client";

import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";
import ReferralStats from "@/components/Dashboard/Invite/ReferralStats";
import ReferralCode from "@/components/Dashboard/Invite/ReferralCode";
import Leaderboard from "@/components/Dashboard/Invite/Leaderboard";
import ReferralList from "@/components/Dashboard/Invite/ReferralList";
import ReferralBonus from "@/components/Dashboard/Invite/ReferralBonus";
import {useReferralsData} from "@/api/queries.ts";
import {ReferralsData, ReferralUser} from "@/types";


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

  const { data } = useReferralsData()

  return (
    <div className="flex flex-col gap-6">
      <ReferralStats data={data as ReferralsData} />
      <ReferralCode referralCode={data?.ref_code ?? ""} copyToClipboard={copyToClipboard} copied={copied} />
      <ReferralList referrals={data?.referrals as ReferralUser[]} />
      <Leaderboard leaderboard={data?.leaderboard as ReferralUser[]} />
      <ReferralBonus />
    </div>
  );
};

export default Invite;
