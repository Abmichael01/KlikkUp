import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useGenerateCoupon } from "@/api/mutations";
import { useToast } from "@/hooks/use-toast";
import LoadingAnimation from "@/components/LoadingAnimation";
import { useQueryClient } from "@tanstack/react-query";

const formSchema = z.object({
    amount: z.coerce.number().min(1)
});

const GenerateCoupon: React.FC = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: 1,
    },
  });
  const { mutate, isPending } = useGenerateCoupon();
  const { toast } = useToast();
  const queryClient = useQueryClient()


  function onSubmit(values: z.infer<typeof formSchema>) {
    mutate(values.amount, {
      onSuccess: () => {
        toast({
          title: "Coupon Generation Successful",
          description: `Generated ${values.amount} coupons`,
        })
        queryClient.invalidateQueries({ queryKey: ["coupons"] }) // Invalidate coupons query after successful coupon generation
      },
      onError: (error) => {
        console.error("Error generating coupons:", error);
        toast({
          title: "Coupon Generation Failed",
          description: "An error occurred while generating coupons",
        });
      },
    });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount of Coupons to Generate</FormLabel>
              <FormControl>
                <Input placeholder="Amount of Coupons to generate" type="number" min={1} {...field} />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />
        <Button type="submit">
          {isPending ? <LoadingAnimation size="small" /> : "Generate Coupons"}
        </Button>
      </form>
    </Form>
  );
};

export default GenerateCoupon;
