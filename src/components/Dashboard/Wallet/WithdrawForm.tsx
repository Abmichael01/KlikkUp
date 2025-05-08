"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpRight, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useWalletStore } from "@/stores/walletStore";
import { useWithdraw } from "@/api/mutations";

export const WithdrawForm: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const { mutate } = useWithdraw()

  const { walletDetails } = useWalletStore();

  const minWithdrawal = 1000;
  const maxWithdrawal = 200000;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);

    const numValue = Number.parseFloat(value);
    if (numValue < minWithdrawal) {
      setError(
        `Minimum withdrawal amount is ₦${minWithdrawal.toLocaleString("en-NG")}`
      );
    } else if (numValue > walletDetails.balance) {
      setError("Amount exceeds available balance");
    } else if (numValue > maxWithdrawal) {
      setError(
        `Maximum withdrawal amount is ₦${maxWithdrawal.toLocaleString("en-NG")}`
      );
    } else {
      setError("");
    }
  };

  const handleWithdrawal = () => {
    mutate(Number(parseFloat(amount).toFixed(2)))
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm">
        <span className="text-gray-500">Available Balance:</span>
        <span className="font-medium">
          ₦{walletDetails.balance.toLocaleString("en-NG")}
        </span>
      </div>

      <div className="space-y-2">
        <Label htmlFor="amount">Amount to Withdraw</Label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            ₦
          </span>
          <Input
            id="amount"
            type="number"
            placeholder="0.00"
            className="pl-8"
            value={amount}
            onChange={handleAmountChange}
          />
        </div>
        {error && (
          <Alert variant="destructive" className="p-2">
            <div className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription className="text-xs">{error}</AlertDescription>
            </div>
          </Alert>
        )}
        <p className="text-xs text-gray-500">
          Minimum: ₦{minWithdrawal.toLocaleString("en-NG")} • Maximum: ₦
          {maxWithdrawal.toLocaleString("en-NG")}
        </p>
      </div>

      <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
        <p className="text-sm text-amber-800">
          Withdrawals are processed within 24 hours during business days. Bank
          charges may apply.
        </p>
      </div>

      <Button
        className="w-full bg-green-600 hover:bg-green-700"
          onClick={handleWithdrawal}
        disabled={
          !amount || !!error || Number.parseFloat(amount) < minWithdrawal
        }
      >
        <ArrowUpRight className="h-4 w-4 mr-2" />
        Withdraw Funds
      </Button>
    </div>
  );
};
