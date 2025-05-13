"use client";

import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormItem,
} from "@/components/ui/form";

import { ArrowUpRight, Loader, MailCheck } from "lucide-react";
import { useWalletStore } from "@/stores/walletStore";
import { useSendOtp, useWithdraw } from "@/api/mutations";
import { useQueryClient } from "@tanstack/react-query";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { WithdrawalData } from "@/types";
import { useOtpCooldown } from "@/stores/otpCoolDownStore";
import { useMessageToaster } from "@/hooks/useMessageToaster";
import { AnimatePresence, motion } from "framer-motion";

const WithdrawSchema = (balance: number) =>
  z.object({
    amount: z
      .number({
        required_error: "Amount is required",
        invalid_type_error: "Enter a valid number",
      })
      .min(500, { message: "Minimum withdrawal amount is ₦500" })
      .max(200000, { message: "Maximum withdrawal amount is ₦200,000" })
      .refine((val) => val <= balance, {
        message: "Amount exceeds available balance",
      }),
    otp: z.string().length(6, "OTP must be 6 digits").optional(),
  });

export const WithdrawForm: React.FC = () => {
  const { walletDetails } = useWalletStore();
  const queryClient = useQueryClient();
  const [success, setSuccess] = useState(false);
  const { mutate, isPending } = useWithdraw();
  const { mutate: sendOtp, isPending: sendingOtp } = useSendOtp();
  const [error, setError] = useState("");
  const { isCooldownActive, remainingSeconds, startCooldown } =
    useOtpCooldown();
  const toast = useMessageToaster();

  const form = useForm<z.infer<ReturnType<typeof WithdrawSchema>>>({
    resolver: zodResolver(WithdrawSchema(walletDetails.balance)),
    defaultValues: {
      amount: undefined,
      otp: "",
    },
  });

  const onSubmit = (data: z.infer<ReturnType<typeof WithdrawSchema>>) => {
    setError("")
    mutate(data as WithdrawalData, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["wallet-data"] });
        setSuccess(true);
      },
      onError: (error) => {
        const withdrawalError = error as {
          response?: { data?: { message?: string } };
        };
        setError(
          withdrawalError.response?.data?.message ||
            "An unexpected error occurred."
        );
      },
    });
  };

  const handleSendOtp = () => {
    sendOtp(undefined, {
      onSuccess: () => {
        startCooldown(120);
        toast({
          message: "OTP has been sent to your email. It will expire in 5mins",
        });
      },
    });
  };

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center text-center space-y-4 py-6">
        <MailCheck className="text-green-600 h-10 w-10" />
        <h3 className="text-lg font-semibold">Withdrawal Pending</h3>
        <p className="text-sm text-gray-600 max-w-xs">
          Your withdrawal request has been received and is being processed. A
          receipt will be sent to your Gmail once approved.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Available Balance:</span>
          <span className="font-medium">
            ₦{walletDetails.balance.toLocaleString("en-NG")}
          </span>
        </div>

        {error && (
          <AnimatePresence>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              ease: 'easeInOut',
            }}
            className="overflow-hidden"
            >
              <Alert
                variant={"destructive"}
                className="bg-destructive/10 border-destructive/20"
              >
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Amount Field */}
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount to Withdraw</FormLabel>
              <FormControl>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    ₦
                  </span>
                  <Input
                    {...field}
                    type="number"
                    className="pl-8"
                    placeholder="0.00"
                    onChange={(e) => field.onChange(parseFloat(e.target.value))}
                  />
                </div>
              </FormControl>
              <FormMessage />
              <p className="text-xs text-gray-500">
                Minimum: ₦500 • Maximum: ₦200,000
              </p>
            </FormItem>
          )}
        />

        {/* OTP Field with Button */}
        <FormField
          control={form.control}
          name="otp"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between">
                <FormLabel>OTP</FormLabel>
                {isCooldownActive ? (
                  <Button
                    type="button"
                    onClick={handleSendOtp}
                    className="py-[2px] px-3 text-xs"
                    disabled={isCooldownActive}
                  >
                    Resend in {Math.floor(remainingSeconds / 60)}:
                    {(remainingSeconds % 60).toString().padStart(2, "0")}
                  </Button>
                ) : (
                  <Button
                    type="button"
                    onClick={handleSendOtp}
                    className=" p-0 py-[2px] px-3 text-xs"
                    disabled={sendingOtp}
                  >
                    {sendingOtp ? "Sending" : "Send OTP"}
                    {sendingOtp && <Loader className="animate-spin" />}
                  </Button>
                )}
              </div>
              <FormControl>
                <Input {...field} type="text" placeholder="Enter 6-digit OTP" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Withdrawal Note */}
        <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
          <p className="text-sm text-amber-800">
            Withdrawals are processed within 24 hours during business days. Bank
            charges may apply.
          </p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700"
          disabled={isPending}
        >
          {isPending ? (
            <>
              <Loader className="animate-spin h-4 w-4 mr-2" />
              Processing...
            </>
          ) : (
            <>
              <ArrowUpRight className="h-4 w-4 mr-2" />
              Withdraw Funds
            </>
          )}
        </Button>
      </form>
    </Form>
  );
};
