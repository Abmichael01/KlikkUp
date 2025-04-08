"use client";

import type React from "react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ActionButtons } from "@/components/Dashboard/Wallet/ActionButtons";
import { TransactionHistory } from "@/components/Dashboard/Wallet/TransactionHistory";
import { BalanceCard } from "@/components/Dashboard/Wallet/BalanceCard";
import { WithdrawForm } from "@/components/Dashboard/Wallet/WithdrawForm";
import { BankDetails } from "@/components/Dashboard/Wallet/BankDetails";

const Wallet: React.FC = () => {
  const [activeDialog, setActiveDialog] = useState<
    "withdraw" | "bank" | "transfer" | null
  >(null);

  // Handlers for the action buttons
  const handleWithdraw = () => setActiveDialog("withdraw");
  const handleAddBank = () => setActiveDialog("bank");
  const handleTransfer = () => setActiveDialog("transfer");

  return (
    <div className="">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <BalanceCard />

          <div>
            <ActionButtons
              onWithdraw={handleWithdraw}
              onAddBank={handleAddBank}
              onTransfer={handleTransfer}
            />
          </div>

          <div className="block md:hidden">
            <TransactionHistory />
          </div>
        </div>

        <div className="lg:col-span-1 hidden md:block">
          <TransactionHistory />
        </div>
      </div>

      {/* Withdraw Dialog */}
      <Dialog
        open={activeDialog === "withdraw"}
        onOpenChange={() => setActiveDialog(null)}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Withdraw Funds</DialogTitle>
          </DialogHeader>
          <WithdrawForm />
        </DialogContent>
      </Dialog>

      {/* Bank Details Dialog */}
      <Dialog
        open={activeDialog === "bank"}
        onOpenChange={() => setActiveDialog(null)}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Bank Account Details</DialogTitle>
          </DialogHeader>
          <BankDetails />
        </DialogContent>
      </Dialog>

      {/* Transfer Dialog - Placeholder */}
      <Dialog
        open={activeDialog === "transfer"}
        onOpenChange={() => setActiveDialog(null)}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Transfer Funds</DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <p className="text-center text-gray-500">
              Transfer functionality coming soon.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Wallet;
