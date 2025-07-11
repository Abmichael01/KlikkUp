import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useGenerateCoupon } from "@/api/mutations";
import { useQueryClient } from "@tanstack/react-query";
import { Input } from "@/components/ui/input";
import { Loader2, RefreshCcw } from "lucide-react";
import CopyButton from "@/components/ui/CopyButton";

const GenerateCoupon: React.FC = () => {
  const { mutate, isPending } = useGenerateCoupon();
  const queryClient = useQueryClient();

  const [couponCode, setCouponCode] = useState<string>("");

  const handleGenerateCoupon = () => {
    mutate(1, {
      onSuccess: (data) => {
        const code = data?.data?.code;
        if (code) {
          setCouponCode(code);
          toast.success("Coupon generated successfully");
          queryClient.invalidateQueries({ queryKey: ["coupons"] });
        }
      },
      onError: (error) => {
        console.error("Error generating coupon:", error);
        toast.error("An error occurred while generating the coupon");
      },
    });
  };

  // Generate coupon on mount
  useEffect(() => {
    handleGenerateCoupon();
  }, []);

  return (
    <div className="space-y-4">
      {isPending ? (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Generating coupon...</span>
        </div>
      ) : couponCode ? (
        <div className="flex items-center gap-2">
          <Input value={couponCode} readOnly className="w-full" />
          <CopyButton textToCopy={couponCode} />
        </div>
      ) : null}

      <Button
        onClick={handleGenerateCoupon}
        disabled={isPending}
        className="gap-2 rounded-full"
      >
        <RefreshCcw className="w-4 h-4" />
        Generate New Coupon
      </Button>
    </div>
  );
};

export default GenerateCoupon;
