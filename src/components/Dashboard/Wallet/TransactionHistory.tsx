import type React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { History } from "lucide-react";
import { Button } from "@/components/ui/button";
import GradientCard from "@/components/ui/GradientCard";
import { useWalletStore } from "@/stores/walletStore";
import { Transaction } from "@/types";
import { cn } from "@/lib/utils";

// Simplified transaction data

// Transaction item component to reduce complexity
const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const Icon = History;
  return (
    <div className="space-y-2 p-2 rounded-lg hover:bg-white/10 transition-colors">
      <div className="flex items-center">
        <div
          className={`h-8 w-8 rounded-full flex items-center justify-center mr-2 ${
            transaction.transaction_type === "CREDIT"
              ? "bg-green-100/20"
              : "bg-amber-100/20"
          }`}
        >
          <Icon
            className={`h-5 w-5 ${
              transaction.transaction_type === "CREDIT"
                ? "text-green-300"
                : "text-amber-300"
            }`}
          />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium text-sm text-white/90 truncate">
                {transaction.description}
              </p>
              <p className="text-[12px] text-white/60">
                {transaction.timestamp}
              </p>
            </div>
            <div className="text-right space-y-2">
              <p
                className={`font-semibold text-sm ${
                  transaction.transaction_type === "CREDIT"
                    ? "text-green-300"
                    : "text-amber-300"
                }`}
              >
                {transaction.transaction_type === "CREDIT" ? "+" : "-"} ₦
                {transaction.amount.toLocaleString("en-NG")}
              </p>
              <h2
                className={cn(
                  "px-2 py-1 text-[10px] text-white rounded-full tracking-wide font-semibold w-fit float-right ",
                  transaction.status === "PENDING"
                    ? "bg-amber-600"
                    : transaction.status === "SUCCESS"
                    ? "bg-green-600"
                    : "bg-red-300"
                )}
              >
                {transaction.status}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TransactionHistory: React.FC = () => {
  const { walletDetails } = useWalletStore();
  const transactions = walletDetails.transactions;
  return (
    <GradientCard className="h-full">
      <div className="p-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-lg font-medium text-white">
            Transaction History
          </h3>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 text-[14px] text-blue-100 hover:text-white hover:bg-white/10"
          >
            View All
          </Button>
        </div>

        <ScrollArea className="min-h-[100px] pr-2">
          <div className="space-y-1 h-full">
            {transactions?.length != 0 &&
              transactions?.map((transaction) => (
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                />
              ))}
            {transactions?.length === 0 && (
              <div className="flex justify-center items-center mt-6">
                <p className="text-white/60 text-[14px]">
                  No transactions found
                </p>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>
    </GradientCard>
  );
};
