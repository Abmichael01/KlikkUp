"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowUpRight, AlertCircle, Loader, MailCheck } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useWalletStore } from "@/stores/walletStore";
import { useWithdraw } from "@/api/mutations";
import { useQueryClient } from "@tanstack/react-query"; // assuming your useDialog hook is here

export const WithdrawForm: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const { mutate, isPending } = useWithdraw();
  const queryClient = useQueryClient();

  const { walletDetails } = useWalletStore();

  const minWithdrawal = 1000;
  const maxWithdrawal = 200000;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmount(value);

    const numValue = Number.parseFloat(value);
    if (numValue < minWithdrawal) {
      setError(`Minimum withdrawal amount is ₦${minWithdrawal.toLocaleString("en-NG")}`);
    } else if (numValue > walletDetails.balance) {
      setError("Amount exceeds available balance");
    } else if (numValue > maxWithdrawal) {
      setError(`Maximum withdrawal amount is ₦${maxWithdrawal.toLocaleString("en-NG")}`);
    } else {
      setError("");
    }
  };

  const handleWithdrawal = () => {
    mutate(Number(parseFloat(amount).toFixed(2)), {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["wallet-data"] });
        setSuccess(true);
      },
      onError: (error) => {
        console.error("Withdrawal error:", error);
      },
    });
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center text-center space-y-4 py-6">
        <MailCheck className="text-green-600 h-10 w-10" />
        <h3 className="text-lg font-semibold">Withdrawal Pending</h3>
        <p className="text-sm text-gray-600 max-w-xs">
          Your withdrawal request has been received and is being processed. A receipt will be sent to your Gmail once approved.
        </p>
      </div>
    );
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
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₦</span>
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
          !amount || isPending || !!error || Number.parseFloat(amount) < minWithdrawal
        }
      >
        {!isPending ? (
          <>
            <ArrowUpRight className="h-4 w-4 mr-2" />
            Withdraw Funds
          </>
        ) : (
          <>
            <Loader className="animate-spin h-4 w-4 mr-2" />
            Processing...
          </>
        )}
      </Button>
    </div>
  );
};
