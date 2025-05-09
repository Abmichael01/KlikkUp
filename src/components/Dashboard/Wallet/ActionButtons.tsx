"use client";

import React from "react";
import { CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CreditCard, Send } from "lucide-react";
import GradientCard from "@/components/ui/GradientCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WithdrawForm } from "./WithdrawForm";
import { BankDetails } from "./BankDetails";


const actions = [
  {
    name: "Withdraw",
    icon: ArrowUpRight,
    dialogContent: WithdrawForm,
    className: "text-green-600",
  },
  {
    name: "Add Bank",
    icon: CreditCard,
    dialogContent: BankDetails,
    className: "text-green-600",
  },
  {
    name: "Transfer",
    icon: Send,
    dialogContent: (
      <p className="text-center">This Feature is not yet available</p>
    ),
    className: "text-gray-400",
  },
];

export const ActionButtons: React.FC = () => {
  
  return (
    <GradientCard>
      <CardContent className="p-4">
        <div className="grid grid-cols-3 gap-3">
          {actions.map((action) => (
            <Dialog key={action.name} >
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="flex flex-col items-center justify-center h-20 py-2 px-2 border-green-100 hover:bg-green-50 hover:text-green-700"
                >
                  <action.icon className="h-5 w-5 mb-1 text-green-600" />
                  <span className="text-xs font-medium">{action.name}</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="rounded-xl" aria-description={action.name}>
                <DialogHeader>
                  <DialogTitle>{action.name}</DialogTitle>
                </DialogHeader>
                {typeof action.dialogContent === "function" ? (
                  <action.dialogContent />
                ) : (
                  action.dialogContent 
                )}
              </DialogContent>
            </Dialog>
          ))}

          
        </div>
      </CardContent>
    </GradientCard>
  );
};
