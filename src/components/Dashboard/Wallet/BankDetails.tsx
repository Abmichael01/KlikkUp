"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CreditCard, Trash2 } from "lucide-react"

// Nigerian banks
const banks = [
  "Access Bank",
  "Fidelity Bank",
  "First Bank of Nigeria",
  "First City Monument Bank",
  "Guaranty Trust Bank",
  "Polaris Bank",
  "Stanbic IBTC Bank",
  "Sterling Bank",
  "Union Bank of Nigeria",
  "United Bank for Africa",
  "Wema Bank",
  "Zenith Bank",
]

export const BankDetails: React.FC = () => {
  const [hasBank, setHasBank] = useState(true)

  // Mock saved bank data
  const savedBank = {
    bankName: "Guaranty Trust Bank",
    accountNumber: "0123456789",
    accountName: "John Doe",
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
                  <p className="font-medium text-gray-800">{savedBank.bankName}</p>
                  <p className="text-sm text-gray-600">{savedBank.accountNumber}</p>
                  <p className="text-xs text-gray-500">{savedBank.accountName}</p>
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
            <Select>
              <SelectTrigger id="bank">
                <SelectValue placeholder="Select your bank" />
              </SelectTrigger>
              <SelectContent>
                {banks.map((bank) => (
                  <SelectItem key={bank} value={bank}>
                    {bank}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="accountNumber">Account Number</Label>
            <Input id="accountNumber" placeholder="Enter 10-digit account number" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="accountName">Account Name</Label>
            <Input id="accountName" placeholder="Account name will appear here" disabled />
            <p className="text-xs text-gray-500">Account name will be verified automatically</p>
          </div>

          <Button className="w-full bg-green-600 hover:bg-green-700">Save Bank Details</Button>
        </div>
      )}
    </div>
  )
}
