"use client";

import React from "react";
import ReferralStats from "@/components/Dashboard/Invite/ReferralStats";
import ReferralCode from "@/components/Dashboard/Invite/ReferralCode";
import Leaderboard from "@/components/Dashboard/Invite/Leaderboard";
import ReferralList from "@/components/Dashboard/Invite/ReferralList";
import ReferralBonus from "@/components/Dashboard/Invite/ReferralBonus";
import { useReferralsData } from "@/api/queries.ts";
import { ReferralsData, ReferralUser } from "@/types";
import PageIsLoading from "@/components/Dashboard/PageIsLoading";

const Invite: React.FC = () => {
  const { data, isLoading } = useReferralsData();

  if (isLoading) return <PageIsLoading />;

  return (
    <div className="flex flex-col gap-6">
      <ReferralStats data={data as ReferralsData} />
      <ReferralCode referralCode={data?.ref_code ?? ""} />
      <ReferralList referrals={data?.referrals as ReferralUser[]} />
      <Leaderboard leaderboard={data?.leaderboard as ReferralUser[]} />
      <ReferralBonus />
    </div>
  );
};

export default Invite;
