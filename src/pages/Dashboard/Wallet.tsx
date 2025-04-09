"use client";

import type React from "react";
import { ActionButtons } from "@/components/Dashboard/Wallet/ActionButtons";
import { TransactionHistory } from "@/components/Dashboard/Wallet/TransactionHistory";
import { BalanceCard } from "@/components/Dashboard/Wallet/BalanceCard";
import { useWalletData } from "@/api/queries";
import PageIsLoading from "@/components/Dashboard/PageIsLoading";
import { useWalletStore } from "@/stores/walletStore";
import { useEffect } from "react";

const Wallet: React.FC = () => {
  const { data, isLoading } = useWalletData()
  const setWalletDetails = useWalletStore((state) => state.setWalletDetails);

  useEffect(() => {
    if (data) {
      setWalletDetails(data); // Save wallet data to the store
    }
  }, [data, setWalletDetails]);


  if (isLoading) return <PageIsLoading />


  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <BalanceCard />

          <div>
            <ActionButtons />
          </div>

          <div className="block md:hidden">
            <TransactionHistory />
          </div>
        </div>

        <div className="lg:col-span-1 hidden md:block">
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
