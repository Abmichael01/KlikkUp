"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Trash2 } from "lucide-react";
import { useWalletStore } from "@/stores/walletStore";
import { BankSelect } from "./BankSelect";
import axios from "axios";
import { banks } from "./banks"
import { useUpdateBankDetails } from "@/api/mutations";
import { Alert } from "@/components/ui/alert";

export const BankDetails: React.FC = () => {
  const { walletDetails } = useWalletStore();
  const [hasBank, setHasBank] = useState(false);
  const [selectedBank, setSelectedBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [verified, setVerified] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationError, setVerificationError] = useState("");

  useEffect(() => {
    const bankDetails = walletDetails.bank_details;
    setHasBank(
      bankDetails &&
        bankDetails.account_name &&
        bankDetails.account_number &&
        bankDetails.bank_name
        ? true
        : false
    );
  }, [walletDetails]);

  const savedBank = walletDetails.bank_details

  const verifyAccountNumber = async () => {
    if (!selectedBank && !accountNumber) {
      setVerificationError("Please select a bank and enter an account number.");
      return;
    }

    setIsVerifying(true);
    setVerificationError("");
    try {
      const response = await axios.get(
        `https://api.paystack.co/bank/resolve?account_number=${accountNumber}&bank_code=${selectedBank}`,
        {
          headers: {
            Authorization:
              "Bearer sk_test_bacb546c151e18d44f3f4aa17a98aec6379b3c55", // Replace with your actual Paystack secret key
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);

      if (response.data && response.data.status) {
        setAccountName(response.data.data.account_name);
        setVerified(true);
      } else {
        setVerificationError(
          "Failed to verify account number. Please try again."
        );
      }
    } catch (error) {
      console.error("Error verifying account number:", error);
      setVerificationError(
        "An error occurred while verifying the account number."
      );
    } finally {
      setIsVerifying(false);
    }
  };

  const { mutate, isPending } = useUpdateBankDetails()

  const saveBankDetails = () => {
    const bank_name = banks.find((bank) => bank.code === selectedBank)?.name;
    const data = {
      bank_name: bank_name as string,
      bank_code: selectedBank,
      account_number: accountNumber,
      account_name: accountName,
    }
    mutate(data, {
      onSuccess: () => {
        setHasBank(true);
        setVerified(false);
        if (savedBank) {
          savedBank.account_name = accountName;
          savedBank.account_number = accountNumber;
          savedBank.bank_name = bank_name as string;
        }
      },
      onError: (error) => {
        console.error("Error saving bank details:", error);
      },
    })
  }

  return (
    <div className="space-y-4">
      {hasBank ? (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <div className="flex justify-between">
              <div className="flex items-center gap-3">
                <CreditCard className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-800">
                    {savedBank?.bank_name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {savedBank?.account_number}
                  </p>
                  <p className="text-xs text-gray-500">
                    {savedBank?.account_name}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                onClick={() => setHasBank(false)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full border-green-200 text-green-700 hover:bg-green-50 hover:text-green-800"
            onClick={() => setHasBank(false)}
          >
            Change Bank Details
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="bank">Select Bank</Label>
            <BankSelect setVerified={setVerified} onSelect={setSelectedBank} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="accountNumber">Account Number</Label>
            <Input
              id="accountNumber"
              placeholder="Enter 10-digit account number"
              value={accountNumber}
              onChange={(e) => {
                setAccountNumber(e.target.value);
                setVerified(false);
                setAccountName("");
              }}
            />
            <Button
              className="mt-2 text-xs px-3 py-[2px] bg-blue-600 hover:bg-blue-700"
              onClick={verifyAccountNumber}
              disabled={isVerifying}
            >
              {isVerifying ? "Verifying..." : "Verify Account"}
            </Button>
            {verificationError && (
              <Alert variant="destructive" className="text-xs p-1 px-2">{verificationError}</Alert>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="accountName">Account Name</Label>
            <Input
              id="accountName"
              placeholder="Account name will appear here"
              value={accountName}
              disabled
            />
            <p className="text-xs text-gray-500">
              Account name will be verified automatically
            </p>
          </div>

          <Button
            className="w-full bg-green-600 hover:bg-green-700 "
            disabled={!verified || isPending}
            onClick={saveBankDetails}
          >
            {isPending ? "Saving..." : "Save Bank Details"}
          </Button>
        </div>
      )}
    </div>
  );
};
